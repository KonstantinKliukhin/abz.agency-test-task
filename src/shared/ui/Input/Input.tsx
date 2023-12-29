'use client';

import clsx from 'clsx';
import {
  type ChangeEvent,
  forwardRef,
  type InputHTMLAttributes,
  memo,
  useCallback,
  useEffect, useId,
  useRef, useState,
} from 'react';

import cls from './Input.module.scss';
import { Typography } from '../Typography/Typography';

type HtmlInputProps = Omit<
InputHTMLAttributes<HTMLInputElement>,
'onChange' | 'value'
>;

interface InputProps extends HtmlInputProps {
  wrapperClassName?: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  readonly?: boolean;
  helperText?: string;
  helperTextSpace?: boolean;
  isError?: boolean;
  label?: string;
}

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(function Input (props, ref) {
    const {
      value,
      onChange,
      className,
      wrapperClassName,
      type = 'text',
      isError = false,
      label,
      autoFocus,
      helperText,
      helperTextSpace = false,
      ...inputProps
    } = props;

    const inputRef = useRef<HTMLInputElement | null>(null);
    const [isEmpty, setIsEmpty] = useState<boolean>(!value);
    const inputHash = useId();
    const inputId = `${inputProps.name}-${inputHash}`;

    useEffect(() => {
      if (autoFocus && inputRef.current) {
        inputRef.current?.focus();
      }
    }, [autoFocus]);

    const refCb = useCallback(
      (elem: HTMLInputElement) => {
        inputRef.current = elem;

        if (!ref) return;
        if (ref instanceof Function) {
          ref(elem);
        } else {
          ref.current = elem;
        }
      },
      [ref],
    );

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.trim()) {
        setIsEmpty(false);
      } else {
        setIsEmpty(true);
      }
      onChange?.(e, e.target.value);
    }, [onChange]);

    return (
      <div className={clsx(cls.container, { [cls.error]: isError })}>
        <div className={clsx(cls.inputWrapper, wrapperClassName)}>
          <input
            {...inputProps}
            id={inputId}
            aria-invalid={helperText ? 'true' : 'false'}
            ref={refCb}
            type={type}
            onChange={handleChange}
            className={clsx(cls.input, className, { [cls.empty]: isEmpty })}
            value={value}
          />
          {label
            ? (
              <label htmlFor={inputId} className={cls.label}>
                {label}
              </label>
            )
            : null
          }
        </div>
        <Typography
          color={isError ? 'error' : 'tertiary'}
          size="sm"
          className={clsx(cls.helperText, { [cls.helperTextSpace]: !helperTextSpace })}>
          {helperText}
        </Typography>
      </div>
    );
  }),
);
