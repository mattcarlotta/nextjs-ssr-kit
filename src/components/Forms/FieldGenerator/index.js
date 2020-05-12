import React from "react";
import PropTypes from "prop-types";
import Input from "~components/Forms/Input";
import TextArea from "~components/Forms/TextArea";

const FieldGenerator = ({ fields, onChange }) =>
	fields.map(props => {
		switch (props.type) {
			case "text":
			case "email":
			case "password": {
				return <Input {...props} key={props.name} onChange={onChange} />;
			}

			case "textarea": {
				return <TextArea {...props} key={props.name} onChange={onChange} />;
			}
		}
	});

FieldGenerator.propTypes = {
	fields: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
			placeholder: PropTypes.string,
			props: PropTypes.any,
			icon: PropTypes.string,
			value: PropTypes.any,
			errors: PropTypes.string,
			required: PropTypes.bool,
			disabled: PropTypes.bool,
			readOnly: PropTypes.bool,
			tooltip: PropTypes.string,
			selectOptions: PropTypes.arrayOf(PropTypes.string),
		}),
	),
};

FieldGenerator.defaultProps = {
	fields: [],
};

export default FieldGenerator;
