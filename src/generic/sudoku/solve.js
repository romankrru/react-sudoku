import { EMPTY_CELL } from "../../constants";

const isValidCandidate = (grid, rowIdx, colIdx, candidate) => {
	for (let i = 0; i < 9; i++) {
		const blockRowIdx = 3 * Math.floor(rowIdx / 3) + Math.floor(i / 3);
		const blockColIdx = 3 * Math.floor(colIdx / 3) + (i % 3);

		if (
			grid[rowIdx][i] === candidate ||
			grid[i][colIdx] === candidate ||
			grid[blockRowIdx][blockColIdx] === candidate
		) {
			return false;
		}
	}

	return true;
};

const solve = (grid) => {
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (grid[i][j] === EMPTY_CELL) {
				for (let c = 1; c < 10; c++) {
					if (isValidCandidate(grid, i, j, c)) {
						grid[i][j] = c;

						if (solve(grid)) {
							return true;
						} else {
							grid[i][j] = EMPTY_CELL;
						}
					}
				}

				return false;
			}
		}
	}

	return true;
};

export default solve;
