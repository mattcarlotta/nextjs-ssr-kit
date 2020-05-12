import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "~components/Forms/Input";
import TextArea from "~components/Forms/TextArea";
import Button from "~components/Layout/Button";
import Flex from "~components/Layout/Flex";
import FlexEnd from "~components/Layout/FlexEnd";
import FlexStart from "~components/Layout/FlexStart";
import fields from "./formFields";

class UserForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			error: "",
			email: props.email || "",
			firstName: props.firstName || "",
			lastName: props.lastName || "",
			userName: props.userName || "",
			backgroundInfo: props.backgroundInfo || "",
			street: props.address ? props.address.street : "",
			state: props.address ? props.address.state : "",
			suite: props.address ? props.address.suite : "",
			city: props.address ? props.address.city : "",
			zipCode: props.address ? props.address.zipCode : "",
			submitted: false,
		};
	}

	componentDidUpdate = prevProps => {
		const { serverMessage } = this.props;

		if (serverMessage !== prevProps.serverMessage) this.props.resetForm();
	};

	componentWillUnmount = () => this.props.resetMessage();

	handleChange = ({ target: { name, value } }) =>
		this.setState({ [name]: value });

	handleSubmit = e => {
		e.preventDefault();
		const {
			email,
			firstName,
			lastName,
			userName,
			backgroundInfo,
			street,
			state,
			suite,
			city,
			zipCode,
			submitted,
		} = this.state;

		const { _id: id } = this.props;

		if (
			!email ||
			!firstName ||
			!lastName ||
			!userName ||
			!backgroundInfo ||
			!street ||
			!state ||
			!city ||
			!zipCode
		) {
			if (!submitted) this.setState({ submitted: true });
			return null;
		}

		const props = {
			email,
			firstName,
			lastName,
			userName,
			backgroundInfo,
			address: {
				street,
				state,
				suite,
				city,
				zipCode,
			},
		};

		this.props.submitAction({ props, id });
	};

	render = () => (
		<form
			css="margin: 0 auto;text-align: left; padding: 5px;"
			onSubmit={this.handleSubmit}
		>
			{fields.map(({ fieldName, ...props }) => (
				<Input
					{...props}
					key={fieldName}
					hasError={this.state.submitted && !this.state[fieldName]}
					name={fieldName}
					onHandleChange={this.handleChange}
					value={this.state[fieldName]}
					submitted={this.state.submitted}
				/>
			))}
			<TextArea
				data-test="background-info"
				name="backgroundInfo"
				hasError={this.state.submitted && !this.state.backgroundInfo}
				label="Background"
				onHandleChange={this.handleChange}
				value={this.state.backgroundInfo}
				submitted={this.state.submitted}
				isRequired
			/>
			<Flex style={{ padding: "0 10px" }}>
				<FlexStart>
					<Button
						dataTest="cancel"
						danger
						type="button"
						onClick={this.props.cancelForm}
					>
						Cancel
					</Button>
				</FlexStart>
				<FlexEnd>
					<Button dataTest="submit" primary type="submit">
						Submit
					</Button>
				</FlexEnd>
			</Flex>
		</form>
	);
}

UserForm.propTypes = {
	_id: PropTypes.string,
	email: PropTypes.string,
	backgroundInfo: PropTypes.string,
	firstName: PropTypes.string,
	lastName: PropTypes.string,
	userName: PropTypes.string,
	address: PropTypes.shape({
		street: PropTypes.string,
		suite: PropTypes.string,
		city: PropTypes.string,
		state: PropTypes.string,
		zipCode: PropTypes.string,
	}),
	resetMessage: PropTypes.func.isRequired,
	serverError: PropTypes.string,
	serverMessage: PropTypes.string,
	resetForm: PropTypes.func,
	cancelForm: PropTypes.func,
	submitAction: PropTypes.func.isRequired,
};

export default UserForm;
