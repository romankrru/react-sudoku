import { fireEvent } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";

import useWindowSize from "../";

it("useWindowSize hook should return correct window size", () => {
	window.innerHeight = 100;
	window.innerWidth = 200;

	const { result } = renderHook(useWindowSize);

	expect(result.current).toEqual({ width: 200, height: 100 });

	act(() => {
		window.innerHeight = 300;
		window.innerWidth = 400;
		fireEvent(window, new Event("resize"));
	});

	expect(result.current).toEqual({ width: 400, height: 300 });
});
