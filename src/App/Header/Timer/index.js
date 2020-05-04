import React, { Fragment } from "react";
import T from "prop-types";
import cn from "classnames";

import styles from "./index.module.css";

const formatTime = (seconds) => {
	const ss = seconds % 60;
	const mm = Math.floor(seconds / 60) % 60;
	const hh = Math.floor(seconds / (60 * 60));
	const toStr = (t) => t.toString().padStart(2, "0");

	return [hh, mm, ss].map(toStr);
};

const Timer = (props) => {
	const [hh, mm, ss] = formatTime(props.seconds);

	return (
		<div className={styles.timer}>
			<div className={styles.timerClock}>
				{hh !== "00" && (
					<Fragment>
						{hh}
						<span className={styles.timerLegend}>h</span>{" "}
					</Fragment>
				)}

				{mm !== "00" && (
					<Fragment>
						{mm}
						<span className={styles.timerLegend}>min</span>{" "}
					</Fragment>
				)}

				<Fragment>
					{ss}
					<span className={styles.timerLegend}>sec</span>
				</Fragment>
			</div>

			<div
				onClick={props.toggle}
				className={cn(styles.timerControl, {
					[styles.timerControlPause]: props.isRunning,
					[styles.timerControlPlay]: !props.isRunning,
				})}
			></div>
		</div>
	);
};

Timer.propTypes = {
	seconds: T.number.isRequired,
	toggle: T.func.isRequired,
	isRunning: T.bool.isRequired,
};

export default Timer;
