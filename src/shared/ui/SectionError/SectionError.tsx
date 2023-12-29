'use client';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

import { Button } from '../Button/Button';
import { Container } from '../Container/Container';
import { VStack } from '../Stack/VStack/VStack';
import { Typography } from '../Typography/Typography';

interface SectionErrorProps {
  message?: string;
}

export const SectionError: FC<SectionErrorProps> = props => {
  const router = useRouter();

  return (
    <Container size="m">
      <VStack justify="center" align="center" gapY={20}>
        <Typography color="error" as="h3" align="center">
          Ups... Something went wrong please try reload the page
        </Typography>
        <Typography align="center">
          {props.message}
        </Typography>
        <Button onClick={() => router.refresh()}>Reload</Button>
      </VStack>
    </Container>
  );
};
