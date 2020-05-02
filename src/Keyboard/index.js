import React from "react";

import Button from "./Button";
import styles from "./index.module.css";

const Keyboard = (props) => {
	return (
		<div className={styles.keyboard}>
			<div className={styles.keyboardRow}>
				<Button>1</Button>
				<Button disabled>2</Button>
				<Button>3</Button>
				<Button>4</Button>
				<Button>5</Button>
				<Button>6</Button>
				<Button>7</Button>
			</div>
			<div className={styles.keyboardRow}>
				<Button>8</Button>
				<Button>9</Button>
				<Button>✕</Button>
				<Button size="big">Normal</Button>
			</div>
		</div>
	);
};

export default Keyboard;
