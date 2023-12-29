import clsx from 'clsx';
import { Nunito } from 'next/font/google';
import { FC, PropsWithChildren } from 'react';

import cls from './Layout.module.scss';
import { PUBLIC_ENV } from '@shared/constants';
import { Header } from '@widgets/Header';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-nunito',
});

export const Layout: FC<PropsWithChildren> = props => (
  <html lang="en" className={clsx(nunito.variable)}>
    <body className={nunito.className} suppressHydrationWarning={!PUBLIC_ENV.isDev}>
      <Header/>
      <main className={cls.main}>
        {props.children}
      </main>
    </body>
  </html>
);
