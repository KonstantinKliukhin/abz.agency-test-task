import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import heroImage from '../../../../../public/main/hero.webp';
import { APP_ROUTES, SECTIONS_IDS } from '@shared/constants';
import { Button, Container, Typography, VStack } from '@shared/ui';

import cls from './Hero.module.scss';

export const Hero: FC = () => {
  return (
    <Container size="l" className={cls.hero}>
      <VStack gapY={32} justify="center" className={cls.textContainer}>
        <VStack gapY={24} className={cls.container}>
          <Typography as="h1" color="secondary" align="center">
            Test assignment for front-end developer
          </Typography>
          <Typography color="secondary" align="center">
            What defines a good front-end developer is one
            that has skilled knowledge of HTML, CSS,
            JS with a vast understanding of User design thinking
            as they&apos;ll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world
            of Front-End Development keeps evolving.
          </Typography>
        </VStack>
        <Link href={APP_ROUTES.main(SECTIONS_IDS.main.signUp)}>
          <Button size="s">Sign up</Button>
        </Link>
        <Image
          src={heroImage}
          className={cls.backgroundImage}
          alt="wheat and sky in the form of the flag of Ukraine"
          sizes="(max-width: 1536px) 100vw, 1170px"
          priority
          fill
        />
      </VStack>
    </Container>

  );
};
