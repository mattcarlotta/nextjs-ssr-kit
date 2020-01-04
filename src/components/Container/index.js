import React from "react";
import PropTypes from "prop-types";

const Container = ({ children }) => (
	<div css="width: 100%;max-width: 800px; height: 400px; margin: 0 auto;padding: 10px;text-align: left;">
		<div css="background-color: #fff;height: 100%;padding: 10px 15px;margin-bottom: 0;position: relative;min-width: 1px;box-sizing: border-box;width: 100%;max-width: 100%;border-radius: 4px;box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);">
			{children}
		</div>
	</div>
);

Container.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Container;
