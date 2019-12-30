import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@components/Button";
import FormError from "@components/FormError";
import Input from "@components/Input";
import TextArea from "@components/TextArea";
import Flex from "@components/Flex";
import FlexEnd from "@components/FlexEnd";
import FlexStart from "@components/FlexStart";
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
		<>
			<form
				css="margin: 0 auto;text-align: left;"
				style={{ padding: this.props.isEditing ? 10 : 0 }}
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
					name="backgroundInfo"
					hasError={this.state.submitted && !this.state.backgroundInfo}
					label="Background"
					onHandleChange={this.handleChange}
					value={this.state.backgroundInfo}
					submitted={this.state.submitted}
					isRequired
				/>
				<Flex style={{ padding: "0 10px" }}>
					{this.props.isEditing && (
						<FlexStart>
							<Button
								id="cancel"
								danger
								type="button"
								onClick={this.props.cancelUpdate}
							>
								Cancel
							</Button>
						</FlexStart>
					)}
					<FlexEnd>
						<Button id="submit" primary type="submit">
							Submit
						</Button>
					</FlexEnd>
				</Flex>
			</form>
			<div css="padding: 0 10px;">
				<FormError hasError={this.props.serverError} />
			</div>
		</>
	);
}

UserForm.propTypes = {
	_id: PropTypes.string,
	isEditing: PropTypes.bool,
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
	cancelUpdate: PropTypes.func,
	submitAction: PropTypes.func.isRequired,
};

export default UserForm;
