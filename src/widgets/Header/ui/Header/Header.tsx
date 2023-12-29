import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import cls from './Header.module.scss';
import LogoIcon from '../../../../../public/logo.svg';
import { APP_ROUTES, SECTIONS_IDS } from '@shared/constants';
import { Bg, Button, Container, HStack } from '@shared/ui';

export const Header: FC = () => {
  return (
    <Bg variant="bg-secondary">
      <Container size="m">
        <HStack justify="between" className={cls.header}>
          <Image alt="logo"
            src={LogoIcon}
            width="104"
            height="26" />
          <HStack gapX={10}>
            <Link href={APP_ROUTES.main(SECTIONS_IDS.main.usersList)}>
              <Button size="s">
                Users
              </Button>
            </Link>
            <Link href={APP_ROUTES.main(SECTIONS_IDS.main.signUp)}>
              <Button size="s">
                Sign up
              </Button>
            </Link>
          </HStack>
        </HStack>
      </Container>
    </Bg>
  );
};
