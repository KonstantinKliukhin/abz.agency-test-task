import { getToken } from '@entities/user';
import { getUserPositions } from '@entities/userPosition';
import { SECTIONS_IDS } from '@shared/constants';
import { getMessageFromError } from '@shared/lib';
import { Container, SectionError } from '@shared/ui';

import { SignUpForm } from './SignUpForm/SignUpForm';
import cls from './SignUpSection.module.scss';
import { SignUpSteps } from './SignUpSteps/SignUpSteps';
import { SignUpSuccess } from './SignUpSuccess/SignUpSuccess';

export const SignUpSection = async () => {
  try {
    const [positionsData, tokenData] = await Promise.all([getUserPositions(), getToken()]);

    if (positionsData.success && tokenData.success) {
      return (
        <Container id={SECTIONS_IDS.main.signUp} size="m" className={cls.container}>
          <SignUpSteps
            form={<SignUpForm token={tokenData.token} positions={positionsData.positions} />}
            success={<SignUpSuccess/>} />
        </Container>
      );
    } else {
      throw new Error(positionsData.message || tokenData.message);
    }
  } catch (error) {
    return <SectionError message={getMessageFromError(error)}/>;
  }
};
