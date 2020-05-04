import React from "react";
import cn from "classnames";
import T from "prop-types";

import styles from "./index.module.css";

const Radio = (props) => (
	<label className={cn(styles.radio, props.className)}>
		<input
			className={styles.input}
			type="radio"
			name={props.name}
			value={props.value}
			checked={props.checked}
			onChange={props.onChange}
		/>
		<div className={styles.indicator}></div>
		{props.children}
	</label>
);

Radio.propTypes = {
	className: T.string,
	name: T.string,
	value: T.string,
	checked: T.bool,
	onChange: T.func,
	children: T.node,
};

export default Radio;
