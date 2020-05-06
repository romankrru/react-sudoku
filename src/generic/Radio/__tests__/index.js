import React from "react";
import { render } from "@testing-library/react";

import Radio from "../";

describe("<Radio />", () => {
	it("renders without crashes", () => {
		const view = render(<Radio />);
		expect(view.container).toMatchSnapshot();
	});
});
