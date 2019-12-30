import React from "react";
import PropTypes from "prop-types";
import { FaPencilAlt } from "react-icons/fa";
import { editButtonStyle } from "./EditButton.module.scss";

const EditButton = ({ id, onClick, style }) => (
	<button
		id={id}
		type="button"
		style={style}
		className={editButtonStyle}
		onClick={onClick}
	>
		<FaPencilAlt />
	</button>
);

EditButton.propTypes = {
	id: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	style: PropTypes.objectOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	),
};

export default EditButton;
