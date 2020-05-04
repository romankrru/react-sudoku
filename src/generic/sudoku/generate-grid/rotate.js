import _ from "lodash";

const rotate90 = (matrix) => {
	const result = [];

	for (let i = 0; i < matrix[0].length; i++) {
		let row = matrix.map((e) => e[i]).reverse();
		result.push(row);
	}

	return result;
};

const rotate180 = _.flow(rotate90, rotate90);
const rotate270 = _.flow(rotate90, rotate90, rotate90);

export { rotate90, rotate180, rotate270 };
