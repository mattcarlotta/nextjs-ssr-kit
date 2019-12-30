import React from "react";
import PropTypes from "prop-types";
import { FaPencilAlt } from "react-icons/fa";

const EditButton = ({ className, id, onClick, style }) => (
	<button
		id={id}
		type="button"
		style={style}
		className={className}
		onClick={onClick}
	>
		<FaPencilAlt />
	</button>
);

EditButton.propTypes = {
	className: PropTypes.string.isRequired,
	id: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	style: PropTypes.objectOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	),
};

export default EditButton;
