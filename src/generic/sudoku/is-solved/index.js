const hasDuplicates = (arr) => [...new Set(arr)].length !== arr.length;

const isSolved = (grid) => {
	const transformedGrid = grid.map((row) =>
		row.map((cell) => (cell.value ? cell.value : 0))
	);

	for (let i = 0; i < transformedGrid.length; i++) {
		let column = [];

		for (let j = 0; j < transformedGrid[i].length; j++) {
			if (transformedGrid[i][j] === 0) {
				// check empty cells
				return false;
			}

			column.push(transformedGrid[j][i]);
		}

		if (hasDuplicates(column)) {
			// check columns for duplicates
			return false;
		}

		if (hasDuplicates(transformedGrid[i])) {
			// check rows for duplicates
			return false;
		}
	}

	for (let i = 0; i < transformedGrid.length; i += 3) {
		// check blocks for duplicates
		for (let j = 0; j < transformedGrid[i].length; j += 3) {
			const block = [
				...transformedGrid[i].slice(j, j + 3),
				...transformedGrid[i + 1].slice(j, j + 3),
				...transformedGrid[i + 2].slice(j, j + 3),
			];

			if (hasDuplicates(block)) {
				return false;
			}
		}
	}

	return true;
};

export default isSolved;
