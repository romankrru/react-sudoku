import React from "react";
import cn from "classnames";

import styles from "./index.module.css";

const Button = (props) => (
	<button className={cn(styles.button, props.className)}>
		{props.children}
	</button>
);

export default Button;
