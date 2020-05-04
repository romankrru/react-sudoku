import _ from "lodash";

import seeds from "./seeds";
import seedToGrid from "./seed-to-grid";
import { rotate90, rotate180, rotate270 } from "./rotate";
import { flipY, flipX } from "./flip";

const generateGrid = (difficulty) => {
	// seed is a valid sudoku with 1 unique solution where each character
	// ['a'...'i'] represents cell value [1 ... 9], and '0' represents empty cell
	const seed = _.sample(seeds[difficulty]);

	// create random lookup array for characters in
	const lookupArr = _.shuffle(
		_.range(97, 106).map((n) => String.fromCharCode(n))
	);

	// create grid from seed with randomized numbers
	const grid = seedToGrid(seed, lookupArr);

	const randomize = _.flow(
		// rotate grid by 90, 180 or 270 deg
		_.sample([_.identity, rotate90, rotate180, rotate270]),

		// flip grid on X, Y or bot axises
		_.sample([_.identity, flipY, flipX, _.flow(flipX, flipY)])
	);

	return randomize(grid);
};

export default generateGrid;
