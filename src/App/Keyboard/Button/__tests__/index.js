import React from "react";
import { render } from "@testing-library/react";

import Button from "../";

const renderButton = (props) => {
	const defaultProps = {
		onClick: jest.fn,
	};

	const view = render(<Button {...defaultProps} />);

	const rerender = (newProps) =>
		view.rerender(<Button {...{ ...defaultProps, ...newProps }} />);

	return { view, rerender };
};

describe("Keyboard <Button />", () => {
	it("renders without crashes", () => {
		const { view } = renderButton();
		expect(view.container).toMatchSnapshot();
	});

	it("handles styles correctly while in candidate mode", () => {
		const { view, rerender } = renderButton();

		expect(
			view.container.querySelector(".buttonCandidate.buttonCandidate-1")
		).not.toBeInTheDocument();

		rerender({ candidate: true, candidateValue: 1 });

		expect(
			view.container.querySelector(".buttonCandidate.buttonCandidate-1")
		).toBeInTheDocument();

		rerender({ candidate: true, candidateValue: 9 });

		expect(
			view.container.querySelector(".buttonCandidate.buttonCandidate-9")
		).toBeInTheDocument();

		rerender({ candidate: true, candidateValue: 3 });

		expect(
			view.container.querySelector(".buttonCandidate.buttonCandidate-3")
		).toBeInTheDocument();
	});
});
