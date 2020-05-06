import React from "react";
import styles from "./assets/index.module.css";

const Footer = () => (
	<footer className={styles.footer}>
		<a
			href="https://github.com/romankrru/react-sudoku"
			className={styles.footerLink}
		>
			View Source on Github
		</a>
	</footer>
);

export default Footer;
