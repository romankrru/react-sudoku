import { EMPTY_CELL, modes } from "../constants";

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

const initialState = {
	grid: transformGrid(_grid),
	focus: [],
	mode: modes.NORMAL,
};

const actionTypes = {
	UPDATE_CELL: "UPDATE_CELL",
	CLEAR_CELL: "CLEAR_CELL",
	SET_GRID: "SET_GRID",
	TOGGLE_CANDIDATE: "TOGGLE_CANDIDATE",
	TOGGLE_MODE: "TOGGLE_MODE",
	SET_FOCUS: "SET_FOCUS",
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

export { actionTypes, initialState };
export default reducer;
