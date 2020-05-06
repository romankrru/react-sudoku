import React, { useMemo } from "react";
import T from "prop-types";

import { gridType } from "../../generic/types";
import { validate } from "../../generic/sudoku/";
import { useWindowSize } from "../../generic/hooks";
import Cell from "./Cell";
import Overlay from "./Overlay";
import styles from "./assets/index.module.css";

const Board = (props) => {
	const invalidCells = useMemo(() => validate(props.grid), [props.grid]);
	const { width } = useWindowSize();

	return (
		<div className={styles.board}>
			{props.grid.map((row, i) =>
				row.map((cell, j) => (
					<Cell
						rowIdx={i}
						colIdx={j}
						isMobile={width < 761}
						isValid={!invalidCells.includes(`${i};${j}`)}
						toggleCandidate={props.toggleCandidate}
						changeable={cell.changeable}
						isHighlighted={props.focus[0] === i || props.focus[1] === j}
						setFocus={props.setFocus}
						isFocus={props.focus[0] === i && props.focus[1] === j}
						value={cell.value}
						candidates={cell.candidates}
						key={String(i) + String(j)}
					/>
				))
			)}

			{!props.isTimerRunning && <Overlay resume={props.toggleTimer} />}
		</div>
	);
};

Board.propTypes = {
	toggleCandidate: T.func.isRequired,
	setFocus: T.func.isRequired,
	isTimerRunning: T.bool.isRequired,
	toggleTimer: T.func.isRequired,
	focus: T.arrayOf(T.number).isRequired,
	grid: gridType,
};

export default Board;
