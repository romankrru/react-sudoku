const flipX = (matrix) => {
	const result = [];

	for (let i = matrix.length - 1; i >= 0; i--) {
		result.push(matrix[i]);
	}

	return result;
};

const flipY = (matrix) => {
	const result = [];

	for (const row of matrix) {
		result.push([...row].reverse());
	}

	return result;
};

export { flipX, flipY };
