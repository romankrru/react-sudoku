import React from "react";
import cn from "classnames";
import T from "prop-types";

import styles from "./index.module.css";

const Button = (props) => (
	<button
		className={cn(styles.button, {
			[styles.buttonBig]: props.size === "big",
		})}
		onClick={props.onClick}
		disabled={props.disabled}
	>
		{props.children}
	</button>
);

Button.propTypes = {
	size: T.string,
	onClick: T.func.isRequired,
	disabled: T.bool,
	children: T.node,
};

export default Button;
