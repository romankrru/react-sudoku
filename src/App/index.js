import React, { useReducer } from "react";

import { useEventListener } from "../generic/hooks";
import Board from "./Board";
import Header from "./Header";
import Keyboard from "./Keyboard";
import reducer, { actionTypes, initialState } from "./reducer";

// ['Numpad1', 'Digit1', 'Numpad2', ...]
const digitKeys = Array.from({ length: 9 }, (_, i) => i + 1).reduce(
	(acc, i) => {
		acc.push(`Numpad${i}`, `Digit${i}`);
		return acc;
	},
	[]
);

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const setFocus = (focus) =>
		dispatch({ type: actionTypes.SET_FOCUS, focus: focus });

	const updateCell = (rowIdx, colIdx, newValue) =>
		dispatch({
			type: actionTypes.UPDATE_CELL,
			rowIdx: rowIdx,
			colIdx: colIdx,
			data: { value: newValue },
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
			// FIXME:
			if (state.mode === "normal")
				updateCell(focusRowIdx, focusColIdx, Number(e.code.slice(-1)));

			if (state.mode === "candidate")
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

		const [focusRowIdx, focusColIdx] = state.focus;

		if (!state.focus.length || !state.grid[focusRowIdx][focusColIdx].changeable)
			return;

		if ([1, 2, 3, 4, 5, 6, 7, 8, 9].includes(value)) {
			// FIXME:
			if (state.mode === "normal") updateCell(focusRowIdx, focusColIdx, value);

			if (state.mode === "candidate")
				toggleCandidate(focusRowIdx, focusColIdx, value);
		}

		if (value === "Delete") clearCell(focusRowIdx, focusColIdx);
	};

	return (
		<div>
			<Header />
			<Board
				toggleCandidate={toggleCandidate}
				grid={state.grid}
				focus={state.focus}
				setFocus={setFocus}
			/>
			<Keyboard mode={state.mode} onClick={handleAppKeyboard} />
		</div>
	);
};

export default App;
