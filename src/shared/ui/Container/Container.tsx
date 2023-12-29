import clsx from 'clsx';
import { HTMLAttributes, memo } from 'react';

import cls from './Container.module.scss';

type ContainerSize = 'l' | 'm' | 'screen';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    size?: ContainerSize;
}

export const Container = memo<ContainerProps>(
  function Container({ size = 'm', className, ...divProps }) {
    return (
      <div {...divProps} className={clsx(cls.container, cls[size], className)}>
      </div>
    );
  });
