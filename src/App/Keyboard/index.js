import React from "react";

import Button from "./Button";
import styles from "./index.module.css";

const Keyboard = (props) => {
	return (
		<div className={styles.keyboard}>
			<div className={styles.keyboardRow}>
				<Button onClick={() => props.onClick(1)}>1</Button>
				<Button onClick={() => props.onClick(2)}>2</Button>
				<Button onClick={() => props.onClick(3)}>3</Button>
				<Button onClick={() => props.onClick(4)}>4</Button>
				<Button onClick={() => props.onClick(5)}>5</Button>
				<Button onClick={() => props.onClick(6)}>6</Button>
				<Button onClick={() => props.onClick(7)}>7</Button>
			</div>
			<div className={styles.keyboardRow}>
				<Button onClick={() => props.onClick(8)}>8</Button>
				<Button onClick={() => props.onClick(9)}>9</Button>
				<Button onClick={() => props.onClick("Delete")}>✕</Button>
				<Button size="big" onClick={() => props.onClick("Mode")}>
					{props.mode === "normal" ? "Normal" : "Candidate"}
				</Button>
			</div>
		</div>
	);
};

export default Keyboard;
