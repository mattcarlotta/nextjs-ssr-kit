/* istanbul ignore file */
/* eslint-disable no-console */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Spinner from "~components/Spinner";

class DynamicImport extends Component {
	state = {
		Component: null,
	};

	componentDidMount = () => this.importFile();

	componentWillUnmount = () => (this.cancelImport = true);

	cancelImport = false;

	importFile = async () => {
		try {
			const { default: file } = await this.props.loadFile();

			if (!this.cancelImport) this.setState({ Component: file });
		} catch (err) {
			console.error(err.toString());
		}
	};

	render = () => {
		const { Component } = this.state;

		return Component ? <Component {...this.props} /> : <Spinner />;
	};
}

DynamicImport.propTypes = {
	loadFile: PropTypes.func.isRequired,
};

export default DynamicImport;
/* eslint-enable no-console */
