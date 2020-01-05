import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import {
	FaInfo,
	FaCheck,
	FaExclamationTriangle,
	FaBug,
	FaExclamationCircle,
} from "react-icons/fa";

const style = {
	marginTop: 9,
};

export const displayIcon = type => {
	switch (type) {
		case "success":
			return <FaCheck style={style} />;
		case "info":
			return <FaInfo />;
		case "error":
			return <FaExclamationCircle />;
		case "warning":
			return <FaExclamationTriangle style={style} />;
		default:
			return <FaBug style={style} />;
	}
};

const ToastMessage = ({ type, message }) =>
	toast[type](
		<div css="display: flex; color: white;">
			<div css="font-size:15px;padding-top: 8px;flex-shrink: 0;text-align: center;width: 30px;">
				{displayIcon(type)}
			</div>
			<div css="flex-grow: 1;font-size: 15px;padding: 8px 12px;">{message}</div>
		</div>,
	);

ToastMessage.propTypes = {
	message: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

export default ToastMessage;
