import { renderHook, act } from "@testing-library/react-hooks";

import useTimer from "../";

jest.useFakeTimers();

it("useTimer hook should pass tests", () => {
	const { result } = renderHook(useTimer);

	// assert initial state
	expect(result.current.seconds).toBe(0);
	expect(result.current.isRunning).toBe(true);

	expect(setInterval).toHaveBeenCalledTimes(1);
	expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 1000);

	// assert increment
	act(() => jest.advanceTimersByTime(1000));
	expect(result.current.seconds).toBe(1);

	act(() => jest.advanceTimersByTime(1000));
	expect(result.current.seconds).toBe(2);

	act(() => jest.advanceTimersByTime(1000));
	expect(result.current.seconds).toBe(3);

	// check toggle
	act(() => result.current.toggle());
	expect(result.current.isRunning).toBe(false);
	act(() => jest.advanceTimersByTime(4000));
	expect(result.current.seconds).toBe(3);

	act(() => result.current.toggle());
	expect(result.current.isRunning).toBe(true);

	// check set
	act(() => result.current.set(42));
	expect(result.current.seconds).toBe(42);

	// check reset
	act(() => result.current.reset());
	expect(result.current.seconds).toBe(0);

	// check stop
	act(() => result.current.stop());
	expect(result.current.isRunning).toBe(false);
	expect(result.current.seconds).toBe(0);
	act(() => jest.advanceTimersByTime(4000));
	expect(result.current.isRunning).toBe(false);
	expect(result.current.seconds).toBe(0);
});
