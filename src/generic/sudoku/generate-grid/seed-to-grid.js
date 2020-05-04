import _ from "lodash";

const seedToGrid = (seed, lookupArr) => {
	return _.chain(seed)
		.map((char) => {
			if (char === "0") return 0;

			return lookupArr.indexOf(char) + 1;
		})
		.chunk(9)
		.value();
};

export default seedToGrid;
