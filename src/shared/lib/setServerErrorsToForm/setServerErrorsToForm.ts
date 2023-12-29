import { FieldValues, Path, UseFormSetError } from 'react-hook-form';

import { ServerFails } from '../../types/serverResponse';

interface SetServerErrorsToFormParam<Form extends FieldValues, Errors extends ServerFails> {
  errors?: Errors;
  setError: UseFormSetError<Form>;
  rootMessage?: string;
  mapErrorToForm: (error?: Errors) => Partial<Record<keyof Form, string | null>>;
}

export const setServerErrorsToForm = <Form extends FieldValues, Errors extends ServerFails>(
  param: SetServerErrorsToFormParam<Form, Errors>,
) => {
  const errors = param.mapErrorToForm(param.errors);
  Object.entries(errors).forEach(([key, message]) => {
    if (message) {
      param.setError(key as Path<Form>, { message });
    }
  });
  if (param.rootMessage) {
    param.setError('root', { message: param.rootMessage });
  }
};
