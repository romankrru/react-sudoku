import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Cell from "../";

const renderCell = () => {
	const defaultProps = {
		isMobile: false,
		setFocus: jest.fn,
		rowIdx: 0,
		colIdx: 0,
		isFocus: false,
		isHighlighted: false,
		changeable: true,
		isValid: true,
		candidates: [],
		toggleCandidate: jest.fn,
	};

	const view = render(<Cell {...defaultProps} />);

	const rerender = (newProps) =>
		view.rerender(<Cell {...{ ...defaultProps, ...newProps }} />);

	return { view, rerender };
};

describe("<Cell />", () => {
	it("should render correctly", () => {
		const { view } = renderCell();
		expect(view.container).toMatchSnapshot();
	});

	it("should set focus on mousedown", () => {
		const { view, rerender } = renderCell();

		const setFocusMock = jest.fn(() => {});

		rerender({
			setFocus: setFocusMock,
			colIdx: 2,
			rowIdx: 3,
		});

		expect(setFocusMock).not.toHaveBeenCalled();
		fireEvent.mouseDown(view.container.querySelector(".cell"));
		expect(setFocusMock).toHaveBeenCalled();
		expect(setFocusMock).toHaveBeenCalledWith([3, 2]);
	});
});
