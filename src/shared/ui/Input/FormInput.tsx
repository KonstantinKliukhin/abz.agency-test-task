'use client';
import { ComponentProps, memo } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

import { Input } from '../Input/Input';

interface FormInputProps extends ComponentProps<typeof Input> {
    name: string;
    registerOption?: RegisterOptions;
}

export const FormInput = memo<FormInputProps>(function FormInput(props) {
  const formContext = useFormContext();
  const errorMessage = formContext.formState.errors?.[props.name]?.message as string;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { registerOption, helperText, isError, ...inputProps } = props;

  return (
    <Input
      isError={Boolean(errorMessage)}
      helperText={errorMessage || helperText}
      {...inputProps}
      {...formContext.register(props.name, registerOption)}
    />
  );
});
