import React from "react";
import cn from "classnames";
import T from "prop-types";

import styles from "./index.module.css";

const Button = (props) => (
	<div
		className={cn(styles.button, {
			[styles.buttonBig]: props.size === "big",
			[styles.buttonCandidate]: props.candidate,
			[styles[`buttonCandidate-${props.candidateValue}`]]: props.candidate,
		})}
		onClick={props.onClick}
		disabled={props.disabled}
	>
		<span>{props.children}</span>
	</div>
);

Button.propTypes = {
	candidateValue: T.number,
	size: T.string,
	onClick: T.func.isRequired,
	candidate: T.bool,
	disabled: T.bool,
	children: T.node,
};

export default Button;
