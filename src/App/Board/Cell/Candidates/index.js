import React from "react";
import _ from "lodash";
import cn from "classnames";

import styles from "./index.module.css";

const Candidates = (props) => {
	return (
		<div className={styles.candidates}>
			{_.range(1, 10).map((n) => {
				return (
					<div
						{...(props.isFocus && {
							onClick: () =>
								props.toggleCandidate(props.rowIdx, props.colIdx, n),
						})}
						key={n}
						className={cn(styles.candidateCell, {
							[styles.candidateCellActive]: props.candidates.includes(n),
							[styles.candidateCellHidden]:
								!props.candidates.includes(n) && !props.isFocus,
						})}
					>
						{n}
					</div>
				);
			})}
		</div>
	);
};

export default Candidates;
