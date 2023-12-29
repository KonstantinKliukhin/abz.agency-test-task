import clsx from 'clsx';
import Image from 'next/image';
import { ComponentProps, memo } from 'react';

import cls from './Loader.module.scss';
import LoaderIcon from '../../../../public/common/loader.svg';

type LoaderSizes = 'm';

type ImageProps = Omit<ComponentProps<typeof Image>, 'width' | 'height' | 'alt' | 'src'>

interface LoaderProps extends ImageProps{
    size?: LoaderSizes;
}

export const Loader = memo<LoaderProps>(
  function Loader({ className, size = 'm', ...imageProps }) {
    return (
      <Image
        {...imageProps}
        className={clsx(cls.loader, cls[`size-${size}`], className)}
        src={LoaderIcon}
        width="48"
        height="48"
        alt="loading"
      />
    );
  });
