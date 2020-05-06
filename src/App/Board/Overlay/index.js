import React from "react";
import T from "prop-types";

import styles from "./assets/index.module.css";

const Overlay = (props) => (
	<div className={styles.overlay}>
		<div onClick={props.resume} className={styles.overlayResume}></div>
	</div>
);

Overlay.propTypes = {
	resume: T.func.isRequired,
};

export default Overlay;
