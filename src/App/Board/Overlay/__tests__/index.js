import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Overlay from "../";

describe("<Overlay />", () => {
	it("should render without crashes", () => {
		const view = render(<Overlay resume={jest.fn} />);
		expect(view.container).toMatchSnapshot();
	});

	it("should handle resume click", () => {
		const resumeMock = jest.fn(() => {});
		const view = render(<Overlay resume={resumeMock} />);

		expect(resumeMock).not.toHaveBeenCalled();
		fireEvent.click(view.container.querySelector(".overlayResume"));
		expect(resumeMock).toHaveBeenCalled();
		expect(resumeMock).toHaveBeenCalledTimes(1);
	});
});
