import React from "react";

import Button from "../../generic/Button";
import Radio from "../../generic/Radio";
import { difficulty } from "../../constants";
import Timer from "./Timer";
import styles from "./index.module.css";
import logo from "./assets/logo.svg";

const Header = (props) => (
	<header className={styles.header}>
		<div className={styles.headerContainer}>
			<div className={styles.headerTop}>
				<img src={logo} alt="Sudoku" width="149" height="80" />
				<Timer
					seconds={props.seconds}
					toggle={props.toggleTimer}
					isRunning={props.isTimerRunning}
				/>
			</div>
			<div className={styles.headerControls}>
				<Button className={styles.headerControlsButton}>New</Button>
				<Button onClick={props.reset} className={styles.headerControlsButton}>
					Reset
				</Button>
				<Button className={styles.headerControlsButton}>Solve</Button>
			</div>
			<form className={styles.difficultyControls}>
				<Radio
					name="difficulty"
					value={difficulty.EASY}
					className={styles.difficultyRadio}
				>
					Easy
				</Radio>
				<Radio
					name="difficulty"
					value={difficulty.MEDIUM}
					className={styles.difficultyRadio}
				>
					Medium
				</Radio>
				<Radio
					name="difficulty"
					value={difficulty.HARD}
					className={styles.difficultyRadio}
				>
					Hard
				</Radio>
			</form>
		</div>
	</header>
);

export default Header;
