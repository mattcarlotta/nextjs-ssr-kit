import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class ClickHandler extends PureComponent {
	componentDidMount() {
		document.addEventListener("mousedown", this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener("mousedown", this.handleClickOutside);
	}

	handleClickOutside = ({ target }) => {
		const { closeModal } = this.props;

		if (this.wrapperRef && !this.wrapperRef.contains(target) && closeModal) {
			closeModal();
		}
	};

	render = () => (
		<div ref={node => (this.wrapperRef = node)}>{this.props.children}</div>
	);
}

ClickHandler.propTypes = {
	children: PropTypes.node.isRequired,
	closeModal: PropTypes.func,
};

export default ClickHandler;
