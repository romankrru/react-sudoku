import { useState, useEffect } from "react";

const useTimer = (initialValue = 0) => {
	const [seconds, setSeconds] = useState(initialValue);
	const [isRunning, setIsRunning] = useState(true);

	const toggle = () => setIsRunning(!isRunning);
	const reset = () => setSeconds(0);
	const set = (seconds) => setSeconds(seconds);
	const stop = () => setIsRunning(false);

	useEffect(() => {
		let intervalId = null;

		if (isRunning) {
			intervalId = setInterval(() => {
				setSeconds((seconds) => seconds + 1);
			}, 1000);
		} else {
			clearInterval(intervalId);
		}

		return () => clearInterval(intervalId);
	}, [isRunning]);

	return { seconds, toggle, isRunning, reset, set, stop };
};

export default useTimer;
