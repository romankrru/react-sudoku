import React from "react";
import { render } from "@testing-library/react";

import Button from "../index";

it("renders without crashes", () => {
	const view = render(<Button>Click</Button>);
	expect(view.getByText("Click")).toBeInTheDocument();
});
