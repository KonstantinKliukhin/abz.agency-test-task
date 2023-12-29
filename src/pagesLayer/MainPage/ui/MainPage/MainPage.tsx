import { Hero } from '../Hero/Hero';
import { SignUpSection } from '../SignUpSection/SignUpSection';
import { UsersSection } from '../UsersSection/UsersSection';
import { Bg, VStack } from '@shared/ui';

export const MainPage = () => {
  return (
    <Bg>
      <VStack gapY={140} align="stretch">
        <Hero/>
        <UsersSection/>
        <SignUpSection/>
      </VStack>
    </Bg>
  );
};
