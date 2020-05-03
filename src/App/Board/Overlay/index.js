import React from "react";

import styles from "./index.module.css";

const Overlay = (props) => (
	<div className={styles.overlay}>
		<div onClick={props.resume} className={styles.overlayResume}></div>
	</div>
);

export default Overlay;
