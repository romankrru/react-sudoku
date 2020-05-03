import React, { useMemo } from "react";

import { validate } from "../../generic/sudoku/";
import Cell from "./Cell";
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
						isHiglighted={props.focus[0] === i || props.focus[1] === j}
						setFocus={props.setFocus}
						isFocus={props.focus[0] === i && props.focus[1] === j}
						// FIXME:
						cell={cell}
						key={String(i) + String(j)}
					/>
				))
			)}
		</div>
	);
};

export default Board;
