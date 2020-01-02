import React from "react";
import PropTypes from "prop-types";
import { subtitle } from "./Subtitle.module.scss";

const SubTitle = ({ children }) => <h2 className={subtitle}>{children}</h2>;

SubTitle.propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

export default SubTitle;
