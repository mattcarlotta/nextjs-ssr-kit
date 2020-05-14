import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "~components/Layout/Button";
import FieldGenerator from "~components/Forms/FieldGenerator";
import Flex from "~components/Layout/Flex";
import FlexEnd from "~components/Layout/FlexEnd";
// import FlexStart from "~components/Layout/FlexStart";
import fieldValidator from "~utils/fieldValidator";
import fieldUpdater from "~utils/fieldUpdater";
import parseFields from "~utils/parseFields";
import fields from "./Fields";

class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: fields(props),
      isSubmitting: false,
    };
  }

  static getDerivedStateFromProps = ({ serverError }) =>
    serverError ? { isSubmitting: false } : null;

  componentDidUpdate = prevProps => {
    if (this.props.serverMessage !== prevProps.serverMessage)
      this.props.resetForm();
  };

  componentWillUnmount = () => this.props.resetMessage();

  handleChange = ({ target: { name, value } }) => {
    this.setState(prevState => ({
      ...prevState,
      fields: fieldUpdater(prevState.fields, name, value),
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { validatedFields, errors } = fieldValidator(this.state.fields);

    this.setState(
      prevState => ({
        fields: !errors ? prevState.fields : validatedFields,
        isSubmitting: !errors,
      }),
      () => {
        const { _id: id } = this.props;
        if (!errors)
          this.props.submitAction({ props: parseFields(validatedFields), id });
      },
    );
  };

  render = () => (
    <form
      data-testid="user-form"
      css="margin: 0 auto;text-align: left; padding: 5px;"
      onSubmit={this.handleSubmit}
    >
      <Flex direction="row" wrap="true" justify="space-between">
        <FieldGenerator
          fields={this.state.fields}
          onChange={this.handleChange}
        />
      </Flex>
      <FlexEnd>
        <Button
          dataTest="cancel"
          danger
          type="button"
          onClick={this.props.cancelForm}
          style={{ marginRight: 10 }}
        >
          Cancel
        </Button>
        <Button
          dataTest="submit"
          primary
          disabled={this.state.isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </FlexEnd>
    </form>
  );
}

UserForm.propTypes = {
  _id: PropTypes.string,
  resetMessage: PropTypes.func.isRequired,
  serverError: PropTypes.string,
  serverMessage: PropTypes.string,
  resetForm: PropTypes.func,
  cancelForm: PropTypes.func,
  submitAction: PropTypes.func.isRequired,
};

export default UserForm;
