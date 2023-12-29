'use client';
import { FC, ReactNode } from 'react';

import { selectIsRegistered, useUserStore } from '@entities/user';

interface SignUpStepsProps {
  form: ReactNode;
  success: ReactNode;
}

export const SignUpSteps: FC<SignUpStepsProps> = props => {
  const isRegistered = useUserStore(selectIsRegistered);

  if (isRegistered) {
    return props.success;
  } else {
    return props.form;
  }
};
