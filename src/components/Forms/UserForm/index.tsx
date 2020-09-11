import * as React from "react";
import Button from "~components/Layout/Button";
import FieldGenerator from "~components/Forms/FieldGenerator";
import Flex from "~components/Layout/Flex";
import FlexEnd from "~components/Layout/FlexEnd";
import fieldValidator from "~utils/fieldValidator";
import fieldUpdater from "~utils/fieldUpdater";
import parseFields from "~utils/parseFields";
import fields from "./Fields";
import { ChangeEvent, FormEvent, UserFormProps, UserFormState } from "~types";

// TODO - FIX ERROR HANDLING

const UserForm = (props: UserFormProps) => {
  const [state, setState] = React.useState<UserFormState>({
    fields: fields(props),
    errors: 0,
    isSubmitting: false,
  });

  const handleChange = React.useCallback(
    ({ target: { name, value } }: ChangeEvent<any>) => {
      setState(prevState => ({
        ...prevState,
        fields: fieldUpdater(prevState.fields, name, value),
      }));
    },
    [fieldUpdater],
  );

  const handleSubmit = React.useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { validatedFields, errors } = fieldValidator(state.fields);

      setState(prevState => ({
        fields: !errors ? prevState.fields : validatedFields,
        errors,
        isSubmitting: !errors,
      }));
    },
    [state.fields, fieldValidator],
  );

  React.useEffect(() => {
    if (props.serverError && state.isSubmitting)
      setState(prevState => ({ ...prevState, isSubmitting: false }));
    if (props.serverMessage) props.resetForm();
  }, [
    state.isSubmitting,
    props.serverError,
    props.serverMessage,
    props.resetForm,
    props.resetMessage,
  ]);

  React.useEffect(() => {
    if (!state.errors) {
      const { _id: id } = props;

      props.submitAction({
        props: parseFields(state.fields),
        id,
      });
    }

    return () => {
      props.resetMessage();
    };
  }, [state.errors, state.fields, parseFields, props._id]);

  return (
    <form
      data-testid="user-form"
      css="margin: 0 auto;text-align: left; padding: 5px;"
      onSubmit={handleSubmit}
    >
      <Flex direction="row" wrap justify="space-between">
        <FieldGenerator fields={state.fields} onChange={handleChange} />
      </Flex>
      <FlexEnd>
        <Button
          dataTestId="cancel"
          danger
          type="button"
          onClick={props.cancelForm}
          style={{ marginRight: 10 }}
        >
          Cancel
        </Button>
        <Button
          dataTestId="submit"
          primary
          disabled={state.isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </FlexEnd>
    </form>
  );
};

export default UserForm;
