import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Candidates from "../index";

const renderCandidates = () => {
	const defaultProps = {
		isFocus: false,
		toggleCandidate: jest.fn,
		rowIdx: 0,
		colIdx: 0,
		isMobile: false,
		candidates: [],
	};

	const view = render(<Candidates {...defaultProps} />);

	const rerender = (newProps) =>
		view.rerender(<Candidates {...{ ...defaultProps, ...newProps }} />);

	return { view, rerender };
};

describe("<Candidates />", () => {
	it("should show correct candidates", () => {
		const { view, rerender } = renderCandidates();

		// empty candidates
		expect(
			view.container.querySelectorAll(".candidateCellHidden")
		).toHaveLength(9);

		expect(
			view.container.querySelectorAll(".candidateCellActive")
		).toHaveLength(0);

		// [1, 3, 6]
		rerender({ candidates: [1, 3, 6] });

		expect(
			view.container.querySelectorAll(".candidateCellHidden")
		).toHaveLength(6);

		expect(
			view.container.querySelectorAll(".candidateCellActive")
		).toHaveLength(3);

		expect(view.container).toMatchSnapshot();

		// [7]
		rerender({ candidates: [7] });

		expect(
			view.container.querySelectorAll(".candidateCellHidden")
		).toHaveLength(8);

		expect(
			view.container.querySelectorAll(".candidateCellActive")
		).toHaveLength(1);

		expect(
			view.container.querySelector(".candidateCellActive").textContent
		).toBe("7");

		// all candidates
		rerender({ candidates: [1, 2, 3, 4, 5, 6, 7, 8, 9] });

		expect(
			view.container.querySelectorAll(".candidateCellHidden")
		).toHaveLength(0);

		expect(
			view.container.querySelectorAll(".candidateCellActive")
		).toHaveLength(9);
	});

	it("should handle mousedown event correctly", () => {
		const { view, rerender } = renderCandidates();

		const handlerMock = jest.fn(() => {});

		rerender({
			isFocus: true,
			isMobile: false,
			toggleCandidate: handlerMock,
		});

		// find first candidate cell
		fireEvent.mouseDown(view.container.querySelector(".candidateCell"));
		expect(handlerMock).toHaveBeenCalled();
		expect(handlerMock).toHaveBeenCalledWith(0, 0, 1);

		// test mobile
		const mobileHandlerMock = jest.fn(() => {});

		rerender({
			isFocus: true,
			isMobile: true,
			toggleCandidate: mobileHandlerMock,
		});

		fireEvent.mouseDown(view.container.querySelector(".candidateCell"));
		expect(mobileHandlerMock).not.toHaveBeenCalled();
	});
});
