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
				[styles.cellHighlihted]: props.isHiglighted,
				[styles.changeableCell]: props.changeable,
				[styles.changeableCellInvalid]: !props.isValid && props.changeable,
				[styles.nativeCellInvalid]: !props.isValid && !props.changeable,
			})}
		>
			{props.cell.value}
			{props.cell.candidates && !props.cell.value && (
				<Candidates
					rowIdx={props.rowIdx}
					colIdx={props.colIdx}
					toggleCandidate={props.toggleCandidate}
					candidates={props.cell.candidates}
					isFocus={props.isFocus}
				/>
			)}
		</div>
	);
};

export default Cell;
