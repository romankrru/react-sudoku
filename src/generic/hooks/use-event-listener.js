import { useEffect, useRef } from "react";

const useEventListener = (eventName, handler, el = window) => {
	const savedHandler = useRef();

	useEffect(() => {
		savedHandler.current = handler;
	}, [handler]);

	useEffect(() => {
		const eventListener = (e) => savedHandler.current(e);

		el.addEventListener(eventName, eventListener);

		return () => {
			el.removeEventListener(eventName, eventListener);
		};
	}, [eventName, el]);
};

export default useEventListener;
