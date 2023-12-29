'use client';
import { ComponentProps, memo } from 'react';
import { useFormContext } from 'react-hook-form';

import { RadioButton } from '../RadioButton/RadioButton';

interface FormRadioButtonProps extends ComponentProps<typeof RadioButton>{
    name: string;
}

export const FormRadioButton = memo<FormRadioButtonProps>(function FormRadioButton (props) {
  const formContext = useFormContext();

  return (<RadioButton {...props} {...formContext.register(props.name)} />);
});
