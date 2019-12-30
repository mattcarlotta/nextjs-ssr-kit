import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import {
	FaInfo,
	FaCheck,
	FaTimes,
	FaExclamationTriangle,
	FaBug,
} from "react-icons/fa";

export const displayIcon = type => {
	switch (type) {
		case "success":
			return <FaCheck />;
		case "info":
			return <FaInfo />;
		case "error":
			return <FaTimes />;
		case "warning":
			return <FaExclamationTriangle />;
		default:
			return <FaBug />;
	}
};

const ToastMessage = ({ type, message }) =>
	toast[type](
		<div css="display: flex; color: white;">
			<div css="font-size:15px;padding-top: 12px;flex-shrink: 0;text-align: center;width: 30px;">
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
