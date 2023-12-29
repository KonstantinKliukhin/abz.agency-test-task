import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { formUserToDto } from '../../lib/formUserToDto/formUserToDto';
import { mapErrorToFormFields } from '../../lib/mapErrorToFormFields/mapErrorToFormFields';
import { UserForm } from '../types/userForm';
import { userValidation } from '../validation/userValidation/userValidation';
import { DEFAULT_USERS_LIST_COUNT, userActions } from '@entities/user';
import { UserPosition } from '@entities/userPosition';
import { setServerErrorsToForm, useYupValidationResolver } from '@shared/lib';

export const useAddUserForm = (positions: UserPosition[]) => {
  const userForm = useForm<UserForm>({
    mode: 'onBlur',
    resolver: useYupValidationResolver(userValidation),
    defaultValues: {
      position: String(positions[0]?.id),
    },
  });
  const { setError, clearErrors } = userForm;
  const isSubmitDisabled = !userForm.formState.isValid;

  useEffect(function clearRootError() {
    if (!isSubmitDisabled) {
      clearErrors('root');
    }
  }, [isSubmitDisabled, clearErrors]);

  const handleSubmit = useCallback(async (form: UserForm) => {
    const result = await userActions.createUser(formUserToDto(form));
    if (result.success) {
      userActions.getUsers({ page: 1, count: DEFAULT_USERS_LIST_COUNT });
    } else {
      setServerErrorsToForm({
        setError,
        errors: result.fails,
        mapErrorToForm: mapErrorToFormFields,
        rootMessage: result.message,
      });
    }
  }, [setError]);

  return {
    rootError: userForm.formState.errors.root,
    userForm,
    isSubmitDisabled,
    onSubmit: userForm.handleSubmit(handleSubmit),
  };
};
