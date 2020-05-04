import T from "prop-types";

const cellType = T.exact({
	value: T.number,
	changeable: T.bool.isRequired,
	candidates: T.arrayOf(T.number).isRequired,
});

const gridType = T.arrayOf(T.arrayOf(cellType).isRequired).isRequired;

export default gridType;
