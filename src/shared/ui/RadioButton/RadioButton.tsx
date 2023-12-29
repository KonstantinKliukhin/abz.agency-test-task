'use client';
import clsx from 'clsx';
import { ChangeEvent, forwardRef, InputHTMLAttributes, memo, useCallback, useId } from 'react';

import cls from './RadioButton.module.scss';

interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>{
    className?: string;
    label?: string;
    value: string | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
}

export const RadioButton = memo(forwardRef<HTMLInputElement, RadioButtonProps>(
  function RadioButton(props, ref) {
    const {
      label,
      onChange,
      value,
      className,
      ...inputProps
    } = props;
    const inputHash = useId();
    const inputId = `${inputProps.name}-${inputHash}`;

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e, e.target.value);
    }, [onChange]);

    return (
      <label className={clsx(cls.label, className)} htmlFor={inputId}>
        <input
          {...inputProps}
          onChange={handleChange}
          id={inputId}
          className={cls.input}
          value={value}
          ref={ref}
          type="radio" />
        <span className={cls.labelText}>
          {label}
        </span>
      </label>
    );
  }));
