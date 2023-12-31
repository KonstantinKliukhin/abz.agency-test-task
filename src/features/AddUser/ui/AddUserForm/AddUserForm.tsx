'use client';
import { memo, useEffect } from 'react';
import { FormProvider } from 'react-hook-form';

import { useAddUserForm } from '../../model/useAddUserForm/useAddUserForm';
import { userActions } from '@entities/user';
import { UserPosition, UserPositionSelector } from '@entities/userPosition';
import { Button, FormFileInput, FormInput, Loader, Typography, VStack } from '@shared/ui';

import cls from './AddUserForm.module.scss';

interface AddUserFormProps {
    className?: string;
    positions: UserPosition[];
    token: string;
}

export const AddUserForm = memo<AddUserFormProps>(
  function AddUserForm(props) {
    const {
      onSubmit,
      isSubmitDisabled,
      userForm,
      rootError,
    } = useAddUserForm(props.positions);

    useEffect(function setInitialToken() {
      userActions.setToken(props.token);
    }, [props.token]);

    return (
      <FormProvider {...userForm}>
        <form onSubmit={onSubmit} className={cls.form}>
          <VStack gapY={30} className={cls.container}>
            <FormInput label="Your name" name="name" />
            <FormInput type="email" label="Email" name="email"/>
            <FormInput
              type="tel"
              label="Phone"
              helperText="+38 (XXX) XXX - XX - XX"
              name="phone"
            />
            <UserPositionSelector
              className={cls.positionSelector}
              name="position"
              positions={props.positions}
              label="Select your position"/>
            <FormFileInput
              placeholder="Upload your photo"
              name="photo"
              accept="image/jpeg,image/jpg"/>
            <Button
              size="s"
              type="submit"
              disabled={isSubmitDisabled}>
              Sign up
            </Button>
            {userForm.formState.isSubmitting
              ? <Loader/>
              : null
            }
            <Typography color="error">
              {rootError?.message}
            </Typography>
          </VStack>
        </form>
      </FormProvider>
    );
  });
