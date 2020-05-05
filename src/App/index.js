import React, { useReducer, useMemo, Fragment } from "react";
import _ from "lodash";
import ls from "local-storage";

import { useEventListener, useTimer } from "../generic/hooks";
import { isSolved } from "../generic/sudoku";
import { modes } from "../constants";
import Board from "./Board";
import Header from "./Header";
import Keyboard from "./Keyboard";
import Notification from "./Notification";
import Footer from "./Footer";
import reducer, { actionTypes, initState } from "./reducer";
import styles from "./index.module.css";

// ['Numpad1', 'Digit1', 'Numpad2', 'Digit2',  ..., 'Digit9']
const digitKeys = _.range(1, 10).reduce((acc, i) => {
	acc.push(`Numpad${i}`, `Digit${i}`);
	return acc;
}, []);

const getCompletedKeys = (grid) => {
	const map = {};

	grid.forEach((row) => {
		row.forEach((col) => {
			if (!col.value) return;

			if (!map[col.value]) map[col.value] = 0;

			map[col.value] += 1;
		});
	});

	return Object.keys(map)
		.map(Number)
		.filter((key) => map[key] >= 9);
};

const App = () => {
	const [state, dispatch] = useReducer(reducer, undefined, initState);
	const timer = useTimer(() => ls.get("timer"));

	const completedKeys = useMemo(() => getCompletedKeys(state.grid), [
		state.grid,
	]);

	const solved = useMemo(() => isSolved(state.grid), [state.grid]);

	const setFocus = (focus) =>
		dispatch({ type: actionTypes.SET_FOCUS, focus: focus });

	const resetGrid = () => dispatch({ type: actionTypes.RESET_GRID });

	const updateCell = (rowIdx, colIdx, newValue) =>
		dispatch({
			type: actionTypes.UPDATE_CELL,
			rowIdx: rowIdx,
			colIdx: colIdx,
			data: { value: newValue, candidates: [] },
		});

	const clearCell = (rowIdx, colIdx) =>
		dispatch({ type: actionTypes.CLEAR_CELL, rowIdx: rowIdx, colIdx: colIdx });

	const toggleCandidate = (rowIdx, colIdx, candidate) =>
		dispatch({
			type: actionTypes.TOGGLE_CANDIDATE,
			rowIdx: rowIdx,
			colIdx: colIdx,
			candidate: candidate,
		});

	const toggleMode = () => dispatch({ type: actionTypes.TOGGLE_MODE });

	const newGame = () => {
		dispatch({ type: actionTypes.NEW_GRID });
		timer.reset();
	};

	const setDifficulty = (difficulty) => {
		const prevGame = state.savedGames[difficulty];

		dispatch({
			type: actionTypes.SET_DIFFICULTY,
			difficulty: difficulty,
			savedTimer: timer.seconds,
		});

		if (prevGame) timer.set(prevGame.savedTimer);
		else timer.reset();
	};

	useEventListener("keydown", (e) => {
		if (e.key === "Shift") toggleMode();

		if (!timer.isRunning) return;

		const [focusRowIdx, focusColIdx] = state.focus;

		if (["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(e.code)) {
			if (!state.focus.length) {
				setFocus([0, 0]);
				return;
			}

			switch (e.code) {
				case "ArrowDown":
					if (focusRowIdx < 8) setFocus([focusRowIdx + 1, focusColIdx]);
					break;

				case "ArrowUp":
					if (focusRowIdx > 0) setFocus([focusRowIdx - 1, focusColIdx]);
					break;

				case "ArrowLeft":
					if (focusColIdx > 0) setFocus([focusRowIdx, focusColIdx - 1]);
					break;

				case "ArrowRight":
					if (focusColIdx < 8) setFocus([focusRowIdx, focusColIdx + 1]);
					break;

				default:
					return;
			}
		}

		if (!state.focus.length || !state.grid[focusRowIdx][focusColIdx].changeable)
			return;

		if (digitKeys.includes(e.code)) {
			if (state.mode === modes.NORMAL)
				updateCell(focusRowIdx, focusColIdx, Number(e.code.slice(-1)));

			if (state.mode === modes.CANDIDATE)
				toggleCandidate(focusRowIdx, focusColIdx, Number(e.code.slice(-1)));
		}

		if (["Backspace", "Delete"].includes(e.code))
			clearCell(focusRowIdx, focusColIdx);
	});

	useEventListener("keyup", (e) => {
		if (e.key === "Shift") toggleMode();
	});

	useEventListener("beforeunload", () => {
		ls.set("timer", timer.seconds);
		ls.set("state", state);
	});

	const handleAppKeyboard = (value) => {
		if (value === "Mode") toggleMode();

		if (!timer.isRunning) return;

		const [focusRowIdx, focusColIdx] = state.focus;

		if (!state.focus.length || !state.grid[focusRowIdx][focusColIdx].changeable)
			return;

		if ([1, 2, 3, 4, 5, 6, 7, 8, 9].includes(value)) {
			if (state.mode === modes.NORMAL)
				updateCell(focusRowIdx, focusColIdx, value);

			if (state.mode === modes.CANDIDATE)
				toggleCandidate(focusRowIdx, focusColIdx, value);
		}

		if (value === "Delete") clearCell(focusRowIdx, focusColIdx);
	};

	return (
		<Fragment>
			<div className={styles.appContent}>
				<Header
					reset={resetGrid}
					newGame={newGame}
					seconds={timer.seconds}
					toggleTimer={timer.toggle}
					isTimerRunning={timer.isRunning}
					setDifficulty={setDifficulty}
					difficulty={state.difficulty}
				/>

				<Board
					isTimerRunning={timer.isRunning}
					toggleTimer={timer.toggle}
					toggleCandidate={toggleCandidate}
					grid={state.grid}
					focus={state.focus}
					setFocus={setFocus}
				/>

				<Keyboard
					completedKeys={completedKeys}
					mode={state.mode}
					onClick={handleAppKeyboard}
				/>

				{solved && (
					<Notification title="Success" onConfirm={newGame}>
						You have successfully solved this sudoku!
						<br /> Press New to try another one.
					</Notification>
				)}
			</div>
			<Footer />
		</Fragment>
	);
};

export default App;
