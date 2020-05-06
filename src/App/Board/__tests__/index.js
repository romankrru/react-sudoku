import React from "react";
import { render } from "@testing-library/react";

import Board from "../";

const validGrid = [
	[
		{ value: 3, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 2, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 8, changeable: false, candidates: [] },
		{ value: 5, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
	],
	[
		{ value: 1, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 9, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 4, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 3, changeable: false, candidates: [] },
		{ value: 5, changeable: false, candidates: [] },
	],
	[
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 5, changeable: false, candidates: [] },
		{ value: 3, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 9, changeable: false, candidates: [] },
		{ value: 4, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 2, changeable: false, candidates: [] },
	],
	[
		{ value: 2, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 8, changeable: false, candidates: [] },
		{ value: 6, changeable: false, candidates: [] },
		{ value: 1, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
	],
	[
		{ value: 7, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 1, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 8, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
	],
	[
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 3, changeable: false, candidates: [] },
		{ value: 6, changeable: false, candidates: [] },
		{ value: 9, changeable: false, candidates: [] },
		{ value: 2, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 4, changeable: false, candidates: [] },
	],
	[
		{ value: null, changeable: true, candidates: [] },
		{ value: 6, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 9, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 3, changeable: false, candidates: [] },
		{ value: 5, changeable: false, candidates: [] },
		{ value: 7, changeable: false, candidates: [] },
	],
	[
		{ value: null, changeable: true, candidates: [] },
		{ value: 3, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 4, changeable: false, candidates: [] },
		{ value: 6, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 9, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
	],
	[
		{ value: 9, changeable: false, candidates: [] },
		{ value: 2, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 1, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
	],
];

const invalidGrid = [
	[
		{ value: 3, changeable: false, candidates: [] },

		{ value: 3, changeable: true, candidates: [] }, // <--- INVALID VALUE

		{ value: 2, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 8, changeable: false, candidates: [] },
		{ value: 5, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
	],
	[
		{ value: 1, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 9, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 4, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 3, changeable: false, candidates: [] },
		{ value: 5, changeable: false, candidates: [] },
	],
	[
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 5, changeable: false, candidates: [] },
		{ value: 3, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 9, changeable: false, candidates: [] },
		{ value: 4, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 2, changeable: false, candidates: [] },
	],
	[
		{ value: 2, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 8, changeable: false, candidates: [] },
		{ value: 6, changeable: false, candidates: [] },
		{ value: 1, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
	],
	[
		{ value: 7, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 1, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 8, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
	],
	[
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 3, changeable: false, candidates: [] },
		{ value: 6, changeable: false, candidates: [] },
		{ value: 9, changeable: false, candidates: [] },
		{ value: 2, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 4, changeable: false, candidates: [] },
	],
	[
		{ value: null, changeable: true, candidates: [] },
		{ value: 6, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 9, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 3, changeable: false, candidates: [] },
		{ value: 5, changeable: false, candidates: [] },
		{ value: 7, changeable: false, candidates: [] },
	],
	[
		{ value: null, changeable: true, candidates: [] },
		{ value: 3, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 4, changeable: false, candidates: [] },
		{ value: 6, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 9, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
	],
	[
		{ value: 9, changeable: false, candidates: [] },
		{ value: 2, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: 1, changeable: false, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
		{ value: null, changeable: true, candidates: [] },
	],
];

const renderBoard = () => {
	const defaultProps = {
		toggleCandidate: jest.fn,
		setFocus: jest.fn,
		isTimerRunning: true,
		toggleTimer: jest.fn,
		focus: [],
		grid: validGrid,
	};

	const view = render(<Board {...defaultProps} />);

	const rerender = (newProps) =>
		view.rerender(<Board {...{ ...defaultProps, ...newProps }} />);

	return { view, rerender };
};

describe("<Board />", () => {
	it("should render sudoku board", () => {
		const { view } = renderBoard();
		expect(view.container.querySelectorAll(".cell")).toHaveLength(81);
	});

	it("should handle Overlay depending on timer state", () => {
		const { view, rerender } = renderBoard();

		rerender({ isTimerRunning: true });
		expect(view.container.querySelector(".overlay")).not.toBeInTheDocument();

		rerender({ isTimerRunning: false });
		expect(view.container.querySelector(".overlay")).toBeInTheDocument();
	});

	it("should handle validation", () => {
		const { view, rerender } = renderBoard();

		expect(
			view.container.querySelector(".changeableCellInvalid")
		).not.toBeInTheDocument();

		expect(
			view.container.querySelector(".nativeCellInvalid")
		).not.toBeInTheDocument();

		// render invalid grid
		rerender({ grid: invalidGrid });

		const invalidChangeableCells = view.container.querySelectorAll(
			".changeableCellInvalid"
		);

		const invalidNativeCells = view.container.querySelectorAll(
			".nativeCellInvalid"
		);

		expect(invalidChangeableCells).toHaveLength(1);
		expect(invalidChangeableCells[0].textContent).toBe("3");
		expect(invalidNativeCells).toHaveLength(2);

		expect(
			[...invalidChangeableCells].every((c) => c.textContent === "3")
		).toBe(true);
	});
});
