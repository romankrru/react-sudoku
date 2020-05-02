import React, { useReducer } from "react";

import { useEventListener } from "../generic/hooks";
import Board from "./Board";
import Header from "./Header";
import Keyboard from "./Keyboard";
import reducer, { actionTypes, initialState } from "./reducer";

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

	const handleKeyPress = (e) => {
		const [focusRowIdx, focusColIdx] = state.focus;

		if (["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(e.key)) {
			if (!state.focus.length) {
				setFocus([0, 0]);
				return;
			}

			switch (e.key) {
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

		if (!state.focus.length) return;

		if (!state.grid[focusRowIdx][focusColIdx].changeable) return;

		if (["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key))
			updateCell(focusRowIdx, focusColIdx, Number(e.key));

		if (["Backspace", "Delete"].includes(e.key))
			clearCell(focusRowIdx, focusColIdx);
	};

	useEventListener("keydown", handleKeyPress);

	const handleAppKeyboard = (value) => {
		console.log(value);
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
			<Keyboard onClick={handleAppKeyboard} />
		</div>
	);
};

export default App;
