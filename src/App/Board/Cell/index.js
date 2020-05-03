import React from "react";
import cn from "classnames";

import Candidates from "./Candidates";
import styles from "./index.module.css";

const Cell = (props) => {
	return (
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
};

export default Cell;
