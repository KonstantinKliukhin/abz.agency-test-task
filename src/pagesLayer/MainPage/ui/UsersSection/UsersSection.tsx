import cls from './UsersSection.module.scss';
import { getUsers } from '@entities/user';
import { SECTIONS_IDS } from '@shared/constants';
import { getMessageFromError } from '@shared/lib';
import { Container, SectionError, Typography, VStack } from '@shared/ui';
import { UsersInfiniteList } from '@widgets/UsersInfiniteList';

const INITIAL_USERS_PAGE = 1;
const INITIAL_USERS_COUNT = 6;

export const UsersSection = async () => {
  try {
    const usersData = await getUsers({
      page: INITIAL_USERS_PAGE,
      count: INITIAL_USERS_COUNT,
    });

    if (usersData.success) {
      return (
        <Container size="m" id={SECTIONS_IDS.main.usersList}>
          <VStack gapY={50} align="stretch" className={cls.containerVertical}>
            <Typography as="h2" align="center">
              Working with GET request
            </Typography>
            <UsersInfiniteList
              initialUsers={usersData.users}
              initialPage={INITIAL_USERS_PAGE}
              initialCount={INITIAL_USERS_COUNT} />
          </VStack>
        </Container>
      );
    } else {
      throw new Error(usersData.message);
    }
  } catch (error) {
    return <SectionError message={getMessageFromError(error)}/>;
  }
};
