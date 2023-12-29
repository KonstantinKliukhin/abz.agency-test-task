import clsx from 'clsx';
import { HTMLAttributes, memo } from 'react';

import cls from './Typography.module.scss';

type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';

type TypographySize = 'sm' | 'm' | '2xl';

type TypographyColor = 'primary' | 'secondary' | 'tertiary' | 'error';

type TextAlign = 'right' | 'left' | 'center';

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement>{
    className?: string;
    as?: TypographyElement;
    size?: TypographySize;
    color?: TypographyColor;
    align?: TextAlign;
    ellipsis?: boolean;
}

const mapElementToDefaultSize: Record<TypographyElement, TypographySize> = {
  h1: '2xl',
  h2: '2xl',
  h3: '2xl',
  h4: '2xl',
  h5: '2xl',
  p: 'm',
};

export const Typography = memo<TypographyProps>(
  function Typography(props) {
    const {
      as: TextComponent = 'p',
      size = mapElementToDefaultSize[TextComponent],
      className,
      color = 'primary',
      align = 'left',
      ellipsis,
      ...textProps
    } = props;

    return (
      <TextComponent
        {...textProps}
        className={clsx(
          cls.text,
          className,
          cls[`size-${size}`],
          cls[color],
          cls[align],
          { [cls.ellipsis]: ellipsis },
        )}
      />
    );
  });
