import clsx from 'clsx';
import { ChangeEvent, forwardRef, InputHTMLAttributes, memo, useCallback, useId } from 'react';

import cls from './FileInput.module.scss';
import { HStack } from '../Stack/HStack/HStack';
import { Typography } from '../Typography/Typography';

type HtmlInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value'
>;

interface FileInputProps extends HtmlInputProps {
    className?: string;
    placeholder?: string;
    value?: File;
    isError?: boolean;
    helperText?: string;
    helperTextSpace?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>, file?: File) => void;
}

export const FileInput = memo(forwardRef<HTMLInputElement, FileInputProps>(
  function FileInput(props, ref) {
    const {
      isError,
      placeholder,
      helperTextSpace,
      helperText,
      value,
      onChange,
      ...inputProps
    } = props;

    const inputHash = useId();
    const inputId = `${inputProps.name}-${inputHash}`;

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e, e.target.files?.[0]);
    }, [onChange]);

    return (
      <div className={clsx(cls.container, { [cls.error]: isError })}>
        <HStack className={cls.inputWrapper}>
          <input
            multiple={false}
            id={inputId}
            placeholder={placeholder}
            className={cls.hiddenInput}
            onChange={handleChange}
            type="file"
            ref={ref}
            {...inputProps}/>
          <label htmlFor={inputId} className={cls.labelButton}>
            <Typography size="m" color="primary">
              Upload
            </Typography>
          </label>
          <Typography color={value?.name ? 'primary' : 'tertiary'} ellipsis className={cls.textField}>
            {value?.name || props.placeholder}
          </Typography>
        </HStack>

        <Typography
          color={isError ? 'error' : 'tertiary'}
          size="sm"
          className={clsx(cls.helperText, { [cls.helperTextSpace]: !helperTextSpace })}>
          {helperText}
        </Typography>
      </div>
    );
  }));
