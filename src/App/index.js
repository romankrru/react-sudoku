import React, { useReducer, useMemo } from "react";
import _ from "lodash";

import { useEventListener, useTimer } from "../generic/hooks";
import { modes } from "../constants";
import Board from "./Board";
import Header from "./Header";
import Keyboard from "./Keyboard";
import reducer, { actionTypes, initialState } from "./reducer";

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
	const [state, dispatch] = useReducer(reducer, initialState);
	const timer = useTimer(1000);

	const completedKeys = useMemo(() => getCompletedKeys(state.grid), [
		state.grid,
	]);

	const setFocus = (focus) =>
		dispatch({ type: actionTypes.SET_FOCUS, focus: focus });

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

	const handleKeyPress = (e) => {
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
	};

	const handleKeyUp = (e) => {
		if (e.key === "Shift") toggleMode();
	};

	useEventListener("keydown", handleKeyPress);
	useEventListener("keyup", handleKeyUp);

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
		<div>
			<Header
				seconds={timer.seconds}
				toggleTimer={timer.toggle}
				isTimerRunning={timer.isRunning}
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
		</div>
	);
};

export default App;
