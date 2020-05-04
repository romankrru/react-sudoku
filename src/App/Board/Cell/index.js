import React from "react";
import cn from "classnames";
import T from "prop-types";

import Candidates from "./Candidates";
import styles from "./index.module.css";

const Cell = (props) => (
	<div
		onClick={() => props.setFocus([props.rowIdx, props.colIdx])}
		className={cn(styles.cell, {
			[styles.cellFocus]: props.isFocus,
			[styles.cellHighlighted]: props.isHighlighted,
			[styles.changeableCell]: props.changeable,
			[styles.changeableCellInvalid]: !props.isValid && props.changeable,
			[styles.nativeCellInvalid]: !props.isValid && !props.changeable,
		})}
	>
		{props.value}
		{props.candidates && !props.value && (
			<Candidates
				rowIdx={props.rowIdx}
				colIdx={props.colIdx}
				toggleCandidate={props.toggleCandidate}
				candidates={props.candidates}
				isFocus={props.isFocus}
			/>
		)}
	</div>
);

Cell.propTypes = {
	setFocus: T.func.isRequired,
	rowIdx: T.number.isRequired,
	colIdx: T.number.isRequired,
	isFocus: T.bool.isRequired,
	isHighlighted: T.bool.isRequired,
	changeable: T.bool.isRequired,
	isValid: T.bool.isRequired,
	value: T.number,
	candidates: T.arrayOf(T.number).isRequired,
	toggleCandidate: T.func.isRequired,
};

export default Cell;
