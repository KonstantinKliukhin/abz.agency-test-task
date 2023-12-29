'use client';
import clsx from 'clsx';
import Tooltip from 'rc-tooltip';
import { ComponentProps, memo } from 'react';

import 'rc-tooltip/assets/bootstrap.css';

import cls from './AppTooltip.module.scss';

interface AppTooltipProps extends ComponentProps<typeof Tooltip> {}

const align = {
  offset: [0, -5],
};

export const AppTooltip = memo<AppTooltipProps>(
  function AppTooltip({ overlayClassName, ...tooltipProps }) {
    return (
      <Tooltip
        overlayClassName={clsx(cls.overlay, overlayClassName)}
        placement="bottom"
        align={align}
        showArrow={false}
        {...tooltipProps} />
    );
  });
