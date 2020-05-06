import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import ls from "local-storage";

import App from "../";

describe("<App />", () => {
	it("should render without crashes", () => {
		render(<App />);
	});

	it("should set focus to grid cell on arrow press if grid has no focus", () => {
		const view = render(<App />);

		expect(view.container.querySelector(".cellFocus")).not.toBeInTheDocument();
		fireEvent.keyDown(window, { code: "ArrowDown" });
		expect(view.container.querySelector(".cellFocus")).toBeInTheDocument();
	});

	it("should handle keyboard navigation", () => {
		const view = render(<App />);

		// set focus to 1st cell
		fireEvent.keyDown(window, { code: "ArrowDown" });

		// move right
		fireEvent.keyDown(window, { code: "ArrowRight" });

		expect(
			view.container
				.querySelectorAll(".cellContainer")[1]
				.querySelector(".cellFocus")
		).toBeInTheDocument();

		// move down
		fireEvent.keyDown(window, { code: "ArrowDown" });

		expect(
			view.container
				.querySelectorAll(".cellContainer")[10]
				.querySelector(".cellFocus")
		).toBeInTheDocument();

		// move left
		fireEvent.keyDown(window, { code: "ArrowLeft" });

		expect(
			view.container
				.querySelectorAll(".cellContainer")[9]
				.querySelector(".cellFocus")
		).toBeInTheDocument();

		// move up
		fireEvent.keyDown(window, { code: "ArrowUp" });

		expect(
			view.container
				.querySelectorAll(".cellContainer")[0]
				.querySelector(".cellFocus")
		).toBeInTheDocument();
	});

	it("should invert input method while holding shift", () => {
		const view = render(<App />);

		expect(
			view.container.querySelector(".keyboard .buttonBig").textContent
		).toBe("Normal");

		fireEvent.keyDown(window, { key: "Shift" });

		expect(
			view.container.querySelector(".keyboard .buttonBig").textContent
		).toBe("Candidate");

		fireEvent.keyUp(window, { key: "Shift" });

		expect(
			view.container.querySelector(".keyboard .buttonBig").textContent
		).toBe("Normal");
	});

	it("should save state to local storage before unload", () => {
		render(<App />);

		jest.mock("local-storage");

		expect(ls.set).not.toHaveBeenCalled();
		fireEvent(window, new Event("beforeunload"));

		// saves timer
		expect(ls.set).toHaveBeenCalledWith("timer", 0);

		// saves app state
		expect(ls.set.mock.calls[1][0]).toBe("state");
		expect(Object.keys(ls.set.mock.calls[1][1])).toContain("grid");
	});

	it("should load state from local storage on load", () => {
		render(<App />);
		expect(ls.get).toHaveBeenCalled();
		expect(ls.get).toHaveBeenCalledWith("timer");
		expect(ls.get).toHaveBeenCalledWith("state");
	});

	it("should handle puzzle solve", () => {
		ls.get.mockImplementation((key) => {
			if (key === "timer") {
				return 1234;
			}

			if (key === "state") {
				return {
					grid: [
						[
							{ value: 9, changeable: false, candidates: [] },
							{ value: 6, changeable: true, candidates: [] },
							{ value: 3, changeable: false, candidates: [] },
							{ value: 1, changeable: true, candidates: [] },
							{ value: 7, changeable: false, candidates: [] },
							{ value: 8, changeable: false, candidates: [] },
							{ value: 5, changeable: true, candidates: [] },
							{ value: 4, changeable: true, candidates: [] },
							{ value: 2, changeable: true, candidates: [] },
						],
						[
							{ value: 2, changeable: false, candidates: [] },
							{ value: 7, changeable: true, candidates: [] },
							{ value: 5, changeable: false, candidates: [] },
							{ value: 3, changeable: true, candidates: [] },
							{ value: 6, changeable: false, candidates: [] },
							{ value: 4, changeable: true, candidates: [] },
							{ value: 1, changeable: true, candidates: [] },
							{ value: 9, changeable: false, candidates: [] },
							{ value: 8, changeable: false, candidates: [] },
						],
						[
							{ value: 4, changeable: true, candidates: [] },
							{ value: 1, changeable: true, candidates: [] },
							{ value: 8, changeable: false, candidates: [] },
							{ value: 9, changeable: false, candidates: [] },
							{ value: 2, changeable: true, candidates: [] },
							{ value: 5, changeable: false, candidates: [] },
							{ value: 6, changeable: false, candidates: [] },
							{ value: 7, changeable: true, candidates: [] },
							{ value: 3, changeable: false, candidates: [] },
						],
						[
							{ value: 3, changeable: false, candidates: [] },
							{ value: 5, changeable: true, candidates: [] },
							{ value: 6, changeable: true, candidates: [] },
							{ value: 8, changeable: true, candidates: [] },
							{ value: 1, changeable: true, candidates: [] },
							{ value: 7, changeable: false, candidates: [] },
							{ value: 4, changeable: false, candidates: [] },
							{ value: 2, changeable: false, candidates: [] },
							{ value: 9, changeable: true, candidates: [] },
						],
						[
							{ value: 1, changeable: false, candidates: [] },
							{ value: 8, changeable: true, candidates: [] },
							{ value: 4, changeable: true, candidates: [] },
							{ value: 2, changeable: false, candidates: [] },
							{ value: 9, changeable: true, candidates: [] },
							{ value: 6, changeable: true, candidates: [] },
							{ value: 7, changeable: false, candidates: [] },
							{ value: 3, changeable: true, candidates: [] },
							{ value: 5, changeable: true, candidates: [] },
						],
						[
							{ value: 7, changeable: true, candidates: [] },
							{ value: 2, changeable: true, candidates: [] },
							{ value: 9, changeable: false, candidates: [] },
							{ value: 4, changeable: false, candidates: [] },
							{ value: 5, changeable: false, candidates: [] },
							{ value: 3, changeable: false, candidates: [] },
							{ value: 8, changeable: true, candidates: [] },
							{ value: 1, changeable: true, candidates: [] },
							{ value: 6, changeable: false, candidates: [] },
						],
						[
							{ value: 6, changeable: true, candidates: [] },
							{ value: 4, changeable: false, candidates: [] },
							{ value: 7, changeable: true, candidates: [] },
							{ value: 5, changeable: false, candidates: [] },
							{ value: 3, changeable: true, candidates: [] },
							{ value: 2, changeable: true, candidates: [] },
							{ value: 9, changeable: false, candidates: [] },
							{ value: 8, changeable: false, candidates: [] },
							{ value: 1, changeable: false, candidates: [] },
						],
						[
							{ value: 8, changeable: true, candidates: [] },
							{ value: 9, changeable: false, candidates: [] },
							{ value: 2, changeable: true, candidates: [] },
							{ value: 6, changeable: false, candidates: [] },
							{ value: 4, changeable: false, candidates: [] },
							{ value: 1, changeable: true, candidates: [] },
							{ value: 3, changeable: true, candidates: [] },
							{ value: 5, changeable: false, candidates: [] },
							{ value: 7, changeable: true, candidates: [] },
						],
						[
							{ value: 5, changeable: false, candidates: [] },
							{ value: 3, changeable: false, candidates: [] },
							{ value: 1, changeable: true, candidates: [] },
							{ value: 7, changeable: true, candidates: [] },
							{ value: 8, changeable: true, candidates: [] },
							{ value: 9, changeable: true, candidates: [] },
							{ value: 2, changeable: false, candidates: [] },
							{ value: 6, changeable: true, candidates: [] },
							{ value: 4, changeable: true, candidates: [] },
						],
					],
					focus: [8, 5],
					mode: "NORMAL",
					difficulty: "EASY",
					savedGames: {
						EASY: null,
						MEDIUM: null,
						HARD: null,
					},
				};
			}

			return null;
		});

		const view = render(<App />);
		ls.get.mockRestore();

		// should show success message
		expect(view.getByRole("heading", { text: "Success" })).toBeInTheDocument();

		// should close notification on New click
		act(() => {
			fireEvent.click(view.getByTestId("notification-button-new"));
		});

		expect(
			document.body.querySelector(".notification")
		).not.toBeInTheDocument();
	});

	it("should handle del/backspace, digit keys and virtual keyboard", () => {
		ls.get.mockImplementation((key) => {
			if (key === "timer") {
				return 1234;
			}

			if (key === "state") {
				return {
					grid: [
						[
							{ value: 9, changeable: false, candidates: [] },
							{ value: null, changeable: true, candidates: [] },
							{ value: 3, changeable: false, candidates: [] },
							{ value: 1, changeable: true, candidates: [] },
							{ value: 7, changeable: false, candidates: [] },
							{ value: 8, changeable: false, candidates: [] },
							{ value: 5, changeable: true, candidates: [] },
							{ value: 4, changeable: true, candidates: [] },
							{ value: 2, changeable: true, candidates: [] },
						],
						[
							{ value: 2, changeable: false, candidates: [] },
							{ value: 7, changeable: true, candidates: [] },
							{ value: 5, changeable: false, candidates: [] },
							{ value: 3, changeable: true, candidates: [] },
							{ value: 6, changeable: false, candidates: [] },
							{ value: 4, changeable: true, candidates: [] },
							{ value: 1, changeable: true, candidates: [] },
							{ value: 9, changeable: false, candidates: [] },
							{ value: 8, changeable: false, candidates: [] },
						],
						[
							{ value: 4, changeable: true, candidates: [] },
							{ value: 1, changeable: true, candidates: [] },
							{ value: 8, changeable: false, candidates: [] },
							{ value: 9, changeable: false, candidates: [] },
							{ value: 2, changeable: true, candidates: [] },
							{ value: 5, changeable: false, candidates: [] },
							{ value: 6, changeable: false, candidates: [] },
							{ value: 7, changeable: true, candidates: [] },
							{ value: 3, changeable: false, candidates: [] },
						],
						[
							{ value: 3, changeable: false, candidates: [] },
							{ value: 5, changeable: true, candidates: [] },
							{ value: 6, changeable: true, candidates: [] },
							{ value: 8, changeable: true, candidates: [] },
							{ value: 1, changeable: true, candidates: [] },
							{ value: 7, changeable: false, candidates: [] },
							{ value: 4, changeable: false, candidates: [] },
							{ value: 2, changeable: false, candidates: [] },
							{ value: 9, changeable: true, candidates: [] },
						],
						[
							{ value: 1, changeable: false, candidates: [] },
							{ value: 8, changeable: true, candidates: [] },
							{ value: 4, changeable: true, candidates: [] },
							{ value: 2, changeable: false, candidates: [] },
							{ value: 9, changeable: true, candidates: [] },
							{ value: 6, changeable: true, candidates: [] },
							{ value: 7, changeable: false, candidates: [] },
							{ value: 3, changeable: true, candidates: [] },
							{ value: 5, changeable: true, candidates: [] },
						],
						[
							{ value: 7, changeable: true, candidates: [] },
							{ value: 2, changeable: true, candidates: [] },
							{ value: 9, changeable: false, candidates: [] },
							{ value: 4, changeable: false, candidates: [] },
							{ value: 5, changeable: false, candidates: [] },
							{ value: 3, changeable: false, candidates: [] },
							{ value: 8, changeable: true, candidates: [] },
							{ value: 1, changeable: true, candidates: [] },
							{ value: 6, changeable: false, candidates: [] },
						],
						[
							{ value: 6, changeable: true, candidates: [] },
							{ value: 4, changeable: false, candidates: [] },
							{ value: 7, changeable: true, candidates: [] },
							{ value: 5, changeable: false, candidates: [] },
							{ value: 3, changeable: true, candidates: [] },
							{ value: 2, changeable: true, candidates: [] },
							{ value: 9, changeable: false, candidates: [] },
							{ value: 8, changeable: false, candidates: [] },
							{ value: 1, changeable: false, candidates: [] },
						],
						[
							{ value: 8, changeable: true, candidates: [] },
							{ value: 9, changeable: false, candidates: [] },
							{ value: 2, changeable: true, candidates: [] },
							{ value: 6, changeable: false, candidates: [] },
							{ value: 4, changeable: false, candidates: [] },
							{ value: 1, changeable: true, candidates: [] },
							{ value: 3, changeable: true, candidates: [] },
							{ value: 5, changeable: false, candidates: [] },
							{ value: 7, changeable: true, candidates: [] },
						],
						[
							{ value: 5, changeable: false, candidates: [] },
							{ value: 3, changeable: false, candidates: [] },
							{ value: 1, changeable: true, candidates: [] },
							{ value: 7, changeable: true, candidates: [] },
							{ value: 8, changeable: true, candidates: [] },
							{ value: 9, changeable: true, candidates: [] },
							{ value: 2, changeable: false, candidates: [] },
							{ value: 6, changeable: true, candidates: [] },
							{ value: 4, changeable: true, candidates: [] },
						],
					],

					focus: [0, 1], // <- focus on 2nd cell

					mode: "NORMAL",
					difficulty: "EASY",
					savedGames: {
						EASY: null,
						MEDIUM: null,
						HARD: null,
					},
				};
			}

			return null;
		});

		const view = render(<App />);
		ls.get.mockRestore();

		fireEvent.keyDown(window, { code: "Digit3" });

		expect(
			view.container.querySelectorAll(".cellContainer")[1].textContent
		).toBe("3");

		// check numpad key
		fireEvent.keyDown(window, { code: "Numpad8" });

		expect(
			view.container.querySelectorAll(".cellContainer")[1].textContent
		).toBe("8");

		// del
		fireEvent.keyDown(window, { code: "Delete" });

		expect(
			view.container.querySelectorAll(".cellContainer")[1].textContent
		).not.toBe("8");

		// virtual keyboard
		fireEvent.click(view.container.querySelectorAll(".keyboard .button")[3]);

		expect(
			view.container.querySelectorAll(".cellContainer")[1].textContent
		).toBe("4");
	});
});
