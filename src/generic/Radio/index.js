import React from "react";
import cn from "classnames";

import styles from "./index.module.css";

const Radio = (props) => {
	return (
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
};

export default Radio;
