import _ from "lodash";

import seeds from "./seeds";
import seedToGrid from "./seed-to-grid";
import { rotate90, rotate180, rotate270 } from "./rotate";
import { flipY, flipX } from "./flip";

const generateGrid = (difficulty) => {
	// Seed is a valid sudoku with 1 unique solution. Each character ['a'...'i'] in seed
	// string represents cell value [1 ... 9]. '0' represents empty cell
	const seed = _.sample(seeds[difficulty]);

	// create random lookup array for characters
	const lookupArr = _.shuffle(
		_.range(97, 106).map((n) => String.fromCharCode(n))
	);

	// create grid from seed with randomized numbers
	const grid = seedToGrid(seed, lookupArr);

	const randomize = _.flow(
		// rotate grid by 90, 180 or 270 deg
		_.sample([_.identity, rotate90, rotate180, rotate270]),

		// flip grid on X, Y or both axises
		_.sample([_.identity, flipY, flipX, _.flow(flipX, flipY)])
	);

	return randomize(grid);
};

export default generateGrid;
