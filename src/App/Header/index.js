import React from "react";

import Button from "../../generic/Button";
import Radio from "../../generic/Radio";
import { difficulties } from "../../constants";
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
				<Button onClick={props.newGame} className={styles.headerControlsButton}>
					New
				</Button>
				<Button onClick={props.reset} className={styles.headerControlsButton}>
					Reset
				</Button>
				<Button className={styles.headerControlsButton}>Solve</Button>
			</div>
			<form className={styles.difficultyControls}>
				<Radio
					name="difficulty"
					value={difficulties.EASY}
					checked={props.difficulty === difficulties.EASY}
					onChange={(e) => props.setDifficulty(e.target.value)}
					className={styles.difficultyRadio}
				>
					Easy
				</Radio>
				<Radio
					name="difficulty"
					value={difficulties.MEDIUM}
					checked={props.difficulty === difficulties.MEDIUM}
					onChange={(e) => props.setDifficulty(e.target.value)}
					className={styles.difficultyRadio}
				>
					Medium
				</Radio>
				<Radio
					name="difficulty"
					value={difficulties.HARD}
					checked={props.difficulty === difficulties.HARD}
					onChange={(e) => props.setDifficulty(e.target.value)}
					className={styles.difficultyRadio}
				>
					Hard
				</Radio>
			</form>
		</div>
	</header>
);

export default Header;
