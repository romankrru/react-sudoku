import React from "react";
import cn from "classnames";
import T from "prop-types";

import styles from "./assets/index.module.css";

const Button = (props) => (
	<button
		data-testid={props["data-testid"]}
		onClick={props.onClick}
		className={cn(
			styles.button,
			{ [styles.buttonBlue]: props.color === "blue" },
			props.className
		)}
	>
		{props.children}
	</button>
);

Button.propTypes = {
	color: T.string,
	"data-testid": T.string,
	onClick: T.func,
	className: T.string,
	children: T.node,
};

export default Button;
