import React, { useState } from "react";

import { useEventListener } from "./generic/hooks";
import Board from "./Board";
import Header from "./Header";
import Keyboard from "./Keyboard";

const _grid = [
	[3, 0, 6, 5, 0, 8, 4, 0, 0],
	[5, 2, 0, 0, 0, 0, 0, 0, 0],
	[0, 8, 7, 0, 0, 0, 0, 3, 1],
	[0, 0, 3, 0, 1, 0, 0, 8, 0],
	[9, 0, 0, 8, 6, 3, 0, 0, 5],
	[0, 5, 0, 0, 9, 0, 6, 0, 0],
	[1, 3, 0, 0, 0, 0, 2, 5, 0],
	[0, 0, 0, 0, 0, 0, 0, 7, 4],
	[0, 0, 5, 2, 0, 6, 3, 0, 0],
];

const EMPTY_CELL = 0;

const transformGrid = (grid) => {
	return _grid.map((row) =>
		row.map((cell) => {
			return {
				value: cell === EMPTY_CELL ? null : cell,
				changeable: cell === EMPTY_CELL,
				candidates: [],
			};
		})
	);
};

const App = () => {
	const [grid, setGrid] = useState(() => transformGrid(_grid));
	const [focus, setFocus] = useState([]);

	const handleKeyPress = (e) => {
		const [focusRowIdx, focusColIdx] = focus;

		if (["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(e.key)) {
			if (!focus.length) {
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

		if (!focus.length) return;

		if (!grid[focusRowIdx][focusColIdx].changeable) return;

		if (["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key)) {
			// FIXME: use 'slice'
			setGrid(
				grid.map((row, rowIdx) => {
					if (rowIdx !== focusRowIdx) return row;

					return row.map((col, colIdx) => {
						if (colIdx !== focusColIdx) return col;

						return {
							...col,
							value: Number(e.key),
							candidates: [],
						};
					});
				})
			);
		}

		if (["Backspace", "Delete"].includes(e.key)) {
			setGrid(
				grid.map((row, rowIdx) => {
					if (rowIdx !== focusRowIdx) return row;

					return row.map((col, colIdx) => {
						if (colIdx !== focusColIdx) return col;

						return {
							...col,
							value: null,
						};
					});
				})
			);
		}
	};

	useEventListener("keydown", handleKeyPress);

	const toggleCandidate = (rowIdx, colIdx, candidate) => {
		return setGrid([
			...grid.slice(0, rowIdx),
			[
				...grid[rowIdx].slice(0, colIdx),
				{
					...grid[rowIdx][colIdx],
					candidates: grid[rowIdx][colIdx].candidates.includes(candidate)
						? grid[rowIdx][colIdx].candidates.filter((el) => el !== candidate)
						: grid[rowIdx][colIdx].candidates.concat(candidate),
				},
				...grid[rowIdx].slice(colIdx + 1),
			],
			...grid.slice(rowIdx + 1),
		]);
	};

	return (
		<div>
			<Header />
			<Board
				toggleCandidate={toggleCandidate}
				grid={grid}
				focus={focus}
				setFocus={setFocus}
			/>
			<Keyboard />
		</div>
	);
};

export default App;
