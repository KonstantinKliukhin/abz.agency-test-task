import clsx from 'clsx';
import { ComponentProps, HTMLAttributes, memo } from 'react';

import { Bg } from '../Bg/Bg';

import cls from './Card.module.scss';

type CardSize = 'm';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  size?: CardSize;
  bgVariant?: ComponentProps<typeof Bg>['variant'];
}

export const Card = memo<CardProps>(function Card(props) {
  const { size = 'm', bgVariant = 'bg-secondary', className, ...divProps } = props;

  return (
    <Bg variant={bgVariant} className={clsx(cls.card, cls[size], className)} {...divProps} />
  );
});
