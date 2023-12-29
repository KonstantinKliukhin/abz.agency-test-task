import Image from 'next/image';
import { FC } from 'react';

import cls from './SignUpSuccess.module.scss';
import SignUpSuccessImage from '../../../../../../public/signUp/signupSuccessImage.svg';
import { Typography, VStack } from '@shared/ui';

export const SignUpSuccess: FC = () => (
  <VStack align="center" gap={50} className={cls.container}>
    <Typography as="h2" align="center">
      User successfully registered
    </Typography>
    <Image src={SignUpSuccessImage} alt="User successfully registered" />
  </VStack>
);
