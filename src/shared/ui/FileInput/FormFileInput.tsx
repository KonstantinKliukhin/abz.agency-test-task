'use client';

import { ChangeEvent, ComponentProps, memo, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';

import { FileInput } from './FileInput';

interface FormFileInputProps extends Omit<ComponentProps<typeof FileInput>, 'isError' | 'value'> {
    name: string;
}

export const FormFileInput = memo<FormFileInputProps>(function FormFileInput(props) {
  const { helperText, ...inputProps } = props;
  const { setValue, formState, watch } = useFormContext();
  const errorMessage = formState.errors?.[props.name]?.message as string;
  const value = watch(props.name);

  const onChange = useCallback((_: ChangeEvent<HTMLInputElement>, file?: File) => {
    setValue(inputProps.name, file, { shouldTouch: true, shouldDirty: true, shouldValidate: true });
  }, [inputProps.name, setValue]);

  return (
    <FileInput
      isError={Boolean(errorMessage)}
      helperText={errorMessage || helperText}
      value={value}
      {...inputProps}
      onChange={onChange}
    />
  );
});
