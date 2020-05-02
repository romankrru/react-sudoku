import React from "react";
import _ from "lodash";

import Button from "./Button";
import styles from "./index.module.css";

const Keyboard = (props) => {
	return (
		<div className={styles.keyboard}>
			<div className={styles.keyboardRow}>
				{_.range(1, 8).map((i) => (
					<Button
						key={i}
						disabled={props.completedKeys.includes(i)}
						onClick={() => props.onClick(i)}
					>
						{i}
					</Button>
				))}
			</div>
			<div className={styles.keyboardRow}>
				{_.range(8, 10).map((i) => (
					<Button
						key={i}
						disabled={props.completedKeys.includes(i)}
						onClick={() => props.onClick(i)}
					>
						{i}
					</Button>
				))}
				<Button onClick={() => props.onClick("Delete")}>✕</Button>
				<Button size="big" onClick={() => props.onClick("Mode")}>
					{props.mode === "normal" ? "Normal" : "Candidate"}
				</Button>
			</div>
		</div>
	);
};

export default Keyboard;
