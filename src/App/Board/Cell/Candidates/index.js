import React from "react";
import _ from "lodash";
import cn from "classnames";
import T from "prop-types";

import styles from "./index.module.css";

const Candidates = (props) => (
	<div className={styles.candidates}>
		{_.range(1, 10).map((n) => {
			return (
				<div
					{...(props.isFocus && {
						onClick: () => props.toggleCandidate(props.rowIdx, props.colIdx, n),
					})}
					key={n}
					className={cn(styles.candidateCell, {
						[styles.candidateCellActive]: props.candidates.includes(n),
						[styles.candidateCellHidden]:
							!props.candidates.includes(n) && !props.isFocus,
					})}
				>
					<span>{n}</span>
				</div>
			);
		})}
	</div>
);

Candidates.propTypes = {
	isFocus: T.bool.isRequired,
	toggleCandidate: T.func.isRequired,
	rowIdx: T.number.isRequired,
	colIdx: T.number.isRequired,
	candidates: T.arrayOf(T.number).isRequired,
};

export default Candidates;
