import React from "react";
import cn from "classnames";
import T from "prop-types";

import styles from "./index.module.css";

const Button = (props) => (
	<button
		onClick={props.onClick}
		className={cn(styles.button, props.className)}
	>
		{props.children}
	</button>
);

Button.propTypes = {
	onClick: T.func,
	className: T.string,
	children: T.node,
};

export default Button;
