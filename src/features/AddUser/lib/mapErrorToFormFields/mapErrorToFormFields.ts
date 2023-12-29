import { UserForm } from '../../model/types/userForm';
import { createUser } from '@entities/user';

export const mapErrorToFormFields = (errors?: Awaited<ReturnType<typeof createUser>>['fails']): Record<keyof UserForm, string | null> => {
  return {
    phone: errors?.phone?.[0] || null,
    name: errors?.name?.[0] || null,
    photo: errors?.photo?.[0] || null,
    email: errors?.email?.[0] || null,
    position: errors?.position_id?.[0] || null,
  };
};
