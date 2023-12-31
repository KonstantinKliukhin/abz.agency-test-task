'use client';
import clsx from 'clsx';
import Image from 'next/image';
import {
  ComponentProps,
  type CSSProperties,
  type FC, memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import DefaultAvatar from '../../../../public/common/defaultAvatar.svg';

import cls from './Avatar.module.scss';

type ImageProps = Omit<
    ComponentProps<typeof Image>,
    'src' | 'alt' | 'style' | 'width' | 'height' | 'onError'
>;

interface AvatarProps extends ImageProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  defaultAvatar?: string;
}

export const Avatar: FC<AvatarProps> = memo<AvatarProps>(function Avatar(props) {
  const {
    className,
    size,
    alt,
    src,
    defaultAvatar = DefaultAvatar,
    ...imageProps
  } = props;

  const [avatarSrc, setAvatarSrc] = useState<string>(src ?? defaultAvatar);

  const style = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  );

  const onError = useCallback(() => {
    setAvatarSrc(defaultAvatar);
  }, [defaultAvatar]);

  useEffect(
    function resetSrc () {
      setAvatarSrc(src ?? defaultAvatar);
    },
    [src, defaultAvatar],
  );

  return (
    <Image
      {...imageProps}
      height={size}
      width={size}
      src={avatarSrc}
      alt={alt ?? 'Avatar'}
      onError={onError}
      style={style}
      className={clsx(cls.Avatar, className)}
    />
  );
});
