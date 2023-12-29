import { UserForm } from '../../model/types/userForm';
import { CreateUserDto } from '@entities/user';

export const formUserToDto = (form: UserForm): CreateUserDto => ({
  name: form.name,
  photo: form.photo,
  phone: form.phone,
  position_id: form.position,
  email: form.email,
});
