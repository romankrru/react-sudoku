import ls from "local-storage";

import { EMPTY_CELL, modes, difficulties } from "../constants";
import { generateGrid } from "../generic/sudoku";

const loadGrid = (grid) =>
	grid.map((row) =>
		row.map((cell) => ({
			value: Number(cell) === EMPTY_CELL ? null : Number(cell),
			changeable: Number(cell) === EMPTY_CELL,
			candidates: [],
		}))
	);

const initialState = {
	grid: loadGrid(generateGrid(difficulties.EASY)),
	focus: [],
	mode: modes.NORMAL,
	difficulty: difficulties.EASY,

	savedGames: {
		[difficulties.EASY]: null,
		[difficulties.MEDIUM]: null,
		[difficulties.HARD]: null,
	},
};

const initState = () => {
	const stateFromLs = ls.get("state");

	if (!stateFromLs) return initialState;

	return stateFromLs;
};

const actionTypes = {
	UPDATE_CELL: "UPDATE_CELL",
	CLEAR_CELL: "CLEAR_CELL",
	SET_GRID: "SET_GRID",
	TOGGLE_CANDIDATE: "TOGGLE_CANDIDATE",
	TOGGLE_MODE: "TOGGLE_MODE",
	SET_FOCUS: "SET_FOCUS",
	RESET_GRID: "RESET_GRID",
	NEW_GRID: "NEW_GRID",
	SET_DIFFICULTY: "SET_DIFFICULTY",
};

const updateCell = (grid, rowIdx, colIdx, data) => {
	return [
		...grid.slice(0, rowIdx),

		[
			...grid[rowIdx].slice(0, colIdx),
			{
				...grid[rowIdx][colIdx],
				...data,
			},
			...grid[rowIdx].slice(colIdx + 1),
		],

		...grid.slice(rowIdx + 1),
	];
};

const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.SET_GRID:
			return {
				...state,
				grid: action.grid,
			};

		case actionTypes.UPDATE_CELL:
			return {
				...state,
				grid: updateCell(state.grid, action.rowIdx, action.colIdx, action.data),
			};

		case actionTypes.CLEAR_CELL:
			return {
				...state,

				grid: updateCell(state.grid, action.rowIdx, action.colIdx, {
					value: null,
					candidates: [],
				}),
			};

		case actionTypes.TOGGLE_CANDIDATE: {
			const currentCandidates =
				state.grid[action.rowIdx][action.colIdx].candidates;

			return {
				...state,

				grid: updateCell(state.grid, action.rowIdx, action.colIdx, {
					value: null,

					candidates: currentCandidates.includes(action.candidate)
						? currentCandidates.filter((c) => c !== action.candidate)
						: [...currentCandidates, action.candidate],
				}),
			};
		}

		case actionTypes.RESET_GRID:
			return {
				...state,
				focus: [],
				grid: state.grid.map((row) =>
					row.map((cell) =>
						cell.changeable ? { ...cell, value: null, candidates: [] } : cell
					)
				),
			};

		case actionTypes.NEW_GRID:
			return {
				...state,
				grid: loadGrid(generateGrid(state.difficulty)),
				focus: [],
			};

		case actionTypes.SET_DIFFICULTY: {
			return {
				...state,
				focus: [],

				savedGames: {
					...state.savedGames,

					[state.difficulty]: {
						grid: state.grid,
						savedTimer: action.savedTimer,
					},
				},

				difficulty: action.difficulty,

				grid: state.savedGames[action.difficulty]
					? state.savedGames[action.difficulty].grid
					: loadGrid(generateGrid(action.difficulty)),
			};
		}

		case actionTypes.SET_FOCUS:
			return { ...state, focus: action.focus };

		case actionTypes.TOGGLE_MODE:
			return {
				...state,
				mode: state.mode === modes.NORMAL ? modes.CANDIDATE : modes.NORMAL,
			};

		default:
			return state;
	}
};

export { actionTypes, initState };
export default reducer;
