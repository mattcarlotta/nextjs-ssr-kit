import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { linkStyle } from "./StyledLink.module.scss";

const StyledLink = ({ children, style, to }) => (
	<div css="width: 170px;margin: 0 auto;" style={style}>
		<Link className={linkStyle} to={to}>
			{children}
		</Link>
	</div>
);

StyledLink.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	style: PropTypes.objectOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	),
};

export default StyledLink;
