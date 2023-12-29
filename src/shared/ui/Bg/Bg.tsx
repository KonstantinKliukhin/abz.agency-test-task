import clsx from 'clsx';
import { HTMLAttributes, memo } from 'react';

import cls from './Bg.module.scss';

type BgVariant = 'primary' | 'secondary' | 'bg-primary' | 'bg-secondary';

interface BgProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    variant?: BgVariant;
}

export const Bg = memo<BgProps>(function Bg(props) {
  const {
    className,
    variant = 'bg-primary',
    ...componentProps
  } = props;

  return (
    <div className={clsx(cls[variant], className)} {...componentProps}/>
  );
});
