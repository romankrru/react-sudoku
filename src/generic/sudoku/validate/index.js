// returns empty array if grid is valid, otherwise returns array of strings
// where each string represent the position of invalid cell: ['rowIndex;cellIndex', ...]
const validate = (grid) => {
	const result = [];
	let map = {};

	// check rows
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			const cell = grid[i][j];

			if (!cell.value) continue;

			if (!map[cell.value]) {
				map[cell.value] = [j];
				continue;
			}

			map[cell.value].push(j);
		}

		for (const key of Object.keys(map)) {
			if (map[key].length > 1) {
				for (const cellIdx of map[key]) {
					result.push(`${i};${cellIdx}`);
				}
			}
		}

		map = {};
	}

	// check columns
	for (let i = 0; i < 9; i++) {
		const col = grid.map((row) => row[i]);

		for (let j = 0; j < 9; j++) {
			const cell = col[j];

			if (!cell.value) continue;

			if (!map[cell.value]) {
				map[cell.value] = [j];
				continue;
			}

			map[cell.value].push(j);
		}

		for (const key of Object.keys(map)) {
			if (map[key].length > 1) {
				for (const rowIdx of map[key]) {
					result.push(`${rowIdx};${i}`);
				}
			}
		}

		map = {};
	}

	// check blocks
	for (let i = 0; i < 9; i += 3) {
		for (let j = 0; j < 9; j += 3) {
			const block = [
				...grid[i].slice(j, j + 3),
				...grid[i + 1].slice(j, j + 3),
				...grid[i + 2].slice(j, j + 3),
			];

			for (let k = 0; k < 9; k++) {
				const cell = block[k];

				if (!cell.value) continue;

				const cellIdx = j + (k % 3);
				const rowIdx = i + Math.floor(k / 3);

				if (!map[cell.value]) {
					map[cell.value] = [[rowIdx, cellIdx]];
					continue;
				}

				map[cell.value].push([rowIdx, cellIdx]);
			}

			for (const key of Object.keys(map)) {
				if (map[key].length > 1) {
					for (const [rowIdx, cellIdx] of map[key]) {
						result.push(`${rowIdx};${cellIdx}`);
					}
				}
			}

			map = {};
		}
	}

	return result;
};

export default validate;
