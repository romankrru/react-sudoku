import ReactDOM from "react-dom";
import React, { Fragment } from "react";
import T from "prop-types";

import Button from "../../generic/Button";
import styles from "./index.module.css";

const Notification = (props) => {
	return ReactDOM.createPortal(
		<Fragment>
			<div className={styles.notificationBackdrop} />
			<div className={styles.notification}>
				<h4>{props.title}</h4>
				<div className={styles.notificationContent}>{props.children}</div>
				<div className={styles.notificationControls}>
					<Button
						color="blue"
						onClick={props.onConfirm}
						className={styles.notificationConfirm}
					>
						New
					</Button>
				</div>
			</div>
		</Fragment>,

		document.body
	);
};

Notification.propTypes = {
	onConfirm: T.func,
	children: T.node,
	title: T.string,
};

export default Notification;
