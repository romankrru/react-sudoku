import React from "react";
import { render, screen } from "@testing-library/react";

import Timer from "../";

const createTextMatchIgnoringMarkup = (text) => (content, node) => {
	const hasText = (node) => node.textContent === text;
	const nodeHasText = hasText(node);

	const childrenDontHaveText = Array.from(node.children).every(
		(child) => !hasText(child)
	);

	return nodeHasText && childrenDontHaveText;
};

const renderTimer = () => {
	const defaultProps = {
		toggle: jest.fn,
		isRunning: false,
		seconds: 0,
	};

	const view = render(<Timer {...defaultProps} />);

	const rerender = (newProps) =>
		view.rerender(<Timer {...{ ...defaultProps, ...newProps }} />);

	return { view, rerender };
};

describe("<Timer />", () => {
	it("renders and shows time in correct format", () => {
		const { view, rerender } = renderTimer();

		expect(
			screen.getByText(createTextMatchIgnoringMarkup("00sec"))
		).toBeInTheDocument();

		// 12sec
		rerender({ seconds: 12 });

		expect(
			screen.getByText(createTextMatchIgnoringMarkup("12sec"))
		).toBeInTheDocument();

		// 05min 05sec
		rerender({ seconds: 305 });

		expect(
			screen.getByText(createTextMatchIgnoringMarkup("05min 05sec"))
		).toBeInTheDocument();

		// 06h 30min 00sec
		rerender({ seconds: 23400 });

		expect(
			screen.getByText(createTextMatchIgnoringMarkup("06h 30min 00sec"))
		).toBeInTheDocument();

		expect(view.container).toMatchSnapshot();
	});

	it("renders correct controls depending on timer state", () => {
		const { view, rerender } = renderTimer();

		// renders Play icon
		expect(
			view.container.querySelector(".timerControlPlay")
		).toBeInTheDocument();

		expect(
			view.container.querySelector(".timerControlPause")
		).not.toBeInTheDocument();

		expect(view.container).toMatchSnapshot();

		// renders Stop icon
		rerender({ isRunning: true });

		expect(
			view.container.querySelector(".timerControlPause")
		).toBeInTheDocument();

		expect(
			view.container.querySelector(".timerControlPlay")
		).not.toBeInTheDocument();

		expect(view.container).toMatchSnapshot();
	});
});
