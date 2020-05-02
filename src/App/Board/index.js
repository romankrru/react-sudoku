import React from "react";
import Cell from "./Cell";
import styles from "./index.module.css";

const Board = (props) => {
	return (
		<div className={styles.board}>
			{props.grid.map((row, i) => {
				return row.map((cell, j) => {
					return (
						<Cell
							rowIdx={i}
							colIdx={j}
							toggleCandidate={props.toggleCandidate}
							changeable={cell.changeable}
							isHiglighted={props.focus[0] === i || props.focus[1] === j}
							setFocus={props.setFocus}
							isFocus={props.focus[0] === i && props.focus[1] === j}
							// FIXME:
							cell={cell}
							key={String(i) + String(j)}
						/>
					);
				});
			})}
		</div>
	);
};

export default Board;
