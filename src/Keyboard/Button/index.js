import React from "react";
import cn from "classnames";

import styles from "./index.module.css";

const Button = (props) => {
	return (
		<button
			className={cn(styles.button, {
				[styles.buttonBig]: props.size === "big",
			})}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
};

export default Button;
