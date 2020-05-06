import { renderHook, act } from "@testing-library/react-hooks";
import { fireEvent } from "@testing-library/react";

import useEventListener from "../";

it("useEventListener should handle events", () => {
	const handlerMock = jest.fn(() => {});

	renderHook(() => useEventListener("keypress", handlerMock, window));

	expect(handlerMock).toHaveBeenCalledTimes(0);

	act(() => {
		fireEvent(window, new Event("keypress"));
	});

	expect(handlerMock).toHaveBeenCalledTimes(1);

	act(() => {
		fireEvent(window, new Event("keypress"));
	});

	expect(handlerMock).toHaveBeenCalledTimes(2);
});

it("useEventListener should remove listeners on unmount", () => {
	const handlerMock = jest.fn(() => {});

	const { unmount } = renderHook(() =>
		useEventListener("keypress", handlerMock, window)
	);

	act(() => {
		fireEvent(window, new Event("keypress"));
	});

	expect(handlerMock).toHaveBeenCalledTimes(1);

	unmount();

	act(() => {
		fireEvent(window, new Event("keypress"));
	});

	expect(handlerMock).toHaveBeenCalledTimes(1);
});
