import React, { memo } from "react";
import cn from "classnames";
import T from "prop-types";

import Candidates from "./Candidates";
import styles from "./index.module.css";

const Cell = (props) => (
	<div className={styles.cellContainer}>
		<div
			onMouseDown={() => props.setFocus([props.rowIdx, props.colIdx])}
			className={cn(styles.cell, {
				[styles.cellFocus]: props.isFocus,
				[styles.cellHighlighted]: props.isHighlighted,
				[styles.changeableCell]: props.changeable,
				[styles.changeableCellInvalid]: !props.isValid && props.changeable,
				[styles.nativeCellInvalid]: !props.isValid && !props.changeable,
			})}
		>
			{props.value && <span>{props.value}</span>}

			{props.candidates && !props.value && (
				<Candidates
					rowIdx={props.rowIdx}
					colIdx={props.colIdx}
					isMobile={props.isMobile}
					toggleCandidate={props.toggleCandidate}
					candidates={props.candidates}
					isFocus={props.isFocus}
				/>
			)}
		</div>
	</div>
);

Cell.propTypes = {
	isMobile: T.bool.isRequired,
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

export default memo(Cell);
