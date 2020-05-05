import React from "react";
import _ from "lodash";
import T from "prop-types";

import { modes } from "../../constants";
import Button from "./Button";
import styles from "./index.module.css";

const Keyboard = (props) => (
	<div className={styles.keyboard}>
		<div className={styles.keyboardRow}>
			{_.range(1, 8).map((i) => (
				<Button
					key={i}
					candidate={props.mode === modes.CANDIDATE}
					candidateValue={i}
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
					candidate={props.mode === modes.CANDIDATE}
					candidateValue={i}
					disabled={props.completedKeys.includes(i)}
					onClick={() => props.onClick(i)}
				>
					{i}
				</Button>
			))}
			<Button onClick={() => props.onClick("Delete")}>✕</Button>
			<Button size="big" onClick={() => props.onClick("Mode")}>
				{props.mode === modes.NORMAL ? "Normal" : "Candidate"}
			</Button>
		</div>
	</div>
);

Keyboard.propTypes = {
	completedKeys: T.arrayOf(T.number).isRequired,
	onClick: T.func.isRequired,
	mode: T.string.isRequired,
};

export default Keyboard;
