'use server';

import { User } from '../../../model/types/user';
import { apiFetch } from '@shared/api';
import { CommonServerPaginationResponse } from '@shared/types';

interface GetUserResponse extends CommonServerPaginationResponse{
  users: User[];
  total_users: number;
}

interface GetUserParams {
  page: number;
  count: number;
}

export const getUsers = async (params: GetUserParams): Promise<GetUserResponse> => {
  const searchParams = new URLSearchParams();
  searchParams.set('page', String(params.page));
  searchParams.set('count', String(params.count));

  const response = await apiFetch(`users?${searchParams.toString()}`, { cache: 'no-store', method: 'GET' });

  return response.json();
};
