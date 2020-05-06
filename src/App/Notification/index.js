import ReactDOM from "react-dom";
import React, { Fragment, useRef, useEffect } from "react";
import T from "prop-types";

import Button from "../../generic/Button";
import styles from "./index.module.css";

const notificationRoot = document.createElement("div");
notificationRoot.setAttribute("id", "notification-root");
document.body.appendChild(notificationRoot);

const Notification = (props) => {
	const el = useRef(document.createElement("div"));

	useEffect(() => {
		const node = el.current;

		notificationRoot.appendChild(node);

		return () => notificationRoot.removeChild(node);
	}, []);

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
						data-testid="notification-button-new"
					>
						New
					</Button>
				</div>
			</div>
		</Fragment>,

		el.current
	);
};

Notification.propTypes = {
	onConfirm: T.func,
	children: T.node,
	title: T.string,
};

export default Notification;
