import { useState, useEffect } from "react";

const getSize = () => ({
	width: window.innerWidth,
	height: window.innerHeight,
});

const useWindowSize = () => {
	const [size, setSize] = useState(getSize);

	useEffect(() => {
		const eventListener = () => setSize(getSize());

		window.addEventListener("resize", eventListener);

		return () => window.removeEventListener("resize", eventListener);
	}, []);

	return size;
};

export default useWindowSize;
