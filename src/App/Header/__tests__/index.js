import React from "react";
import { render, screen } from "@testing-library/react";

import Header from "../";
import { difficulties } from "../../../constants";

it("<Header /> renders and has logo with alt text", () => {
	const view = render(
		<Header
			seconds={12}
			newGame={jest.fn}
			reset={jest.fn}
			setDifficulty={jest.fn}
			toggleTimer={jest.fn}
			isTimerRunning={true}
			difficulty={difficulties.EASY}
		/>
	);

	expect(screen.getByAltText("Sudoku")).toBeInTheDocument();
	expect(view.container).toMatchSnapshot();
});
