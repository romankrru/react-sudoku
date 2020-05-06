import React from "react";
import { render, screen } from "@testing-library/react";

import Keyboard from "../index";
import { modes } from "../../../constants";

const renderKeyboard = () => {
	const defaultProps = {
		completedKeys: [],
		onClick: jest.fn,
		mode: modes.NORMAL,
	};

	const view = render(<Keyboard {...defaultProps} />);

	const rerender = (newProps) =>
		view.rerender(<Keyboard {...{ ...defaultProps, ...newProps }} />);

	return { view, rerender };
};

describe("<Keyboard />", () => {
	it("renders 9 digit keys", () => {
		const { view } = renderKeyboard();

		expect(
			[...view.container.querySelectorAll(".button span")].filter((node) =>
				Number.isFinite(Number(node.textContent))
			)
		).toHaveLength(9);

		expect(view.container).toMatchSnapshot();
	});

	it("disables completed keys", () => {
		const { view, rerender } = renderKeyboard();

		expect(
			view.container.querySelectorAll(".button.buttonDisabled")
		).toHaveLength(0);

		rerender({ completedKeys: [1, 2] });

		expect(
			view.container.querySelectorAll(".button.buttonDisabled")
		).toHaveLength(2);

		rerender({ completedKeys: [6, 7, 8, 9] });

		expect(
			view.container.querySelectorAll(".button.buttonDisabled")
		).toHaveLength(4);

		rerender({ completedKeys: [3] });

		expect(
			view.container.querySelectorAll(".button.buttonDisabled")
		).toHaveLength(1);
	});

	it("renders correct mode button", () => {
		const { view, rerender } = renderKeyboard();

		expect(view.getByText("Normal")).toBeInTheDocument();

		rerender({ mode: modes.CANDIDATE });
		expect(view.getByText("Candidate")).toBeInTheDocument();
	});
});
