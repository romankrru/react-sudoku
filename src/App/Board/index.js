import React, { useMemo } from "react";

import { validate } from "../../generic/sudoku/";
import Cell from "./Cell";
import Overlay from "./Overlay";
import styles from "./index.module.css";

const Board = (props) => {
	const invalidCells = useMemo(() => validate(props.grid), [props.grid]);

	return (
		<div className={styles.board}>
			{props.grid.map((row, i) =>
				row.map((cell, j) => (
					<Cell
						rowIdx={i}
						colIdx={j}
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

export default Board;
