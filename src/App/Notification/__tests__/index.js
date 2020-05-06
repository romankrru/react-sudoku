import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Notification from "../";

describe("<Notification />", () => {
	it("should render without crashes", () => {
		const view = render(
			<Notification title="Hello!">This is notification body</Notification>
		);

		expect(view.getByText("This is notification body")).toBeInTheDocument();
	});

	it("should call onConfirm callback", () => {
		const callbackMock = jest.fn(() => {});
		const view = render(<Notification onConfirm={callbackMock} />);
		fireEvent.click(view.getByText("New"));
		expect(callbackMock).toHaveBeenCalledTimes(1);
	});
});
