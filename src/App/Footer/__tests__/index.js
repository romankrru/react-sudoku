import React from "react";
import { render, screen } from "@testing-library/react";

import Footer from "../";

it("<Footer /> renders without crashes", () => {
	const view = render(<Footer />);

	expect(screen.getByText("View Source on Github")).toBeInTheDocument();
	expect(view.container).toMatchSnapshot();
});
