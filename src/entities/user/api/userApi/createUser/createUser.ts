import { CreateUserDto } from '../../../model/types/createUserDto';
import { apiFetch } from '@shared/api';
import { CommonServerResponse, ServerFails } from '@shared/types';

interface CreateUserFails extends ServerFails {
    email?: string[];
    name?: string[];
    phone?: string[];
    photo?: string[];
    position_id: string[];
}

interface CreateUserResponse extends CommonServerResponse<CreateUserFails> {
    user_id?: number;
}

export const createUser = async (userDto: CreateUserDto, token: string): Promise<CreateUserResponse> => {
  const formData = new FormData();
  Object.entries(userDto).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const response = await apiFetch(
    'users',
    {
      headers: {
        Token: token,
      },
      method: 'POST',
      body: formData,
    });

  return response.json();
};
