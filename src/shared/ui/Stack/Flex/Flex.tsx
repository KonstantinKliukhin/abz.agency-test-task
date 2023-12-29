'use client';
import clsx from 'clsx';
import { CSSProperties, type HTMLAttributes, memo, useMemo } from 'react';

import cls from './Flex.module.scss';

type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around';
type FlexDirection = 'column' | 'row';
type FlexAlign = 'start' | 'center' | 'end' | 'stretch';

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  justify?: FlexJustify;
  align?: FlexAlign;
  wrap?: boolean;
  direction?: FlexDirection;
  gapX?: CSSProperties['columnGap'];
  gapY?: CSSProperties['rowGap'];
  gap?: CSSProperties['gap'];
}

const justifyClasses: Record<FlexJustify, keyof typeof cls> = {
  start: 'justifyStart',
  center: 'justifyCenter',
  end: 'justifyEnd',
  between: 'justifyBetween',
  around: 'justifyAround',
};

const alignClasses: Record<FlexAlign, keyof typeof cls> = {
  start: 'alignStart',
  center: 'alignCenter',
  end: 'alignEnd',
  stretch: 'alignStretch',
};

const directionClasses: Record<FlexDirection, keyof typeof cls> = {
  row: 'directionRow',
  column: 'directionColumn',
};

export const Flex = memo<FlexProps>(function Flex (props) {
  const {
    justify = 'start',
    align = 'center',
    direction = 'row',
    className,
    gap,
    gapY = gap,
    gapX = gap,
    wrap,
    ...divProps
  } = props;

  const style: CSSProperties = useMemo(() => ({
    rowGap: gapY,
    columnGap: gapX,
  }), [gapX, gapY]);

  return (
    <div
      {...divProps}
      style={style}
      className={clsx(cls.flex,
        className,
        cls[justifyClasses[justify]],
        cls[alignClasses[align]],
        cls[directionClasses[direction]],
        { [cls.wrap]: wrap },
      )}
    >
      {props.children}
    </div>
  );
});
