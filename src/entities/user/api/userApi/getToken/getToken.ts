'use server';

import { apiFetch } from '@shared/api';
import { CommonServerResponse } from '@shared/types';

interface GetTokenResponse extends CommonServerResponse {
    token: string;
}

export const getToken = async (): Promise<GetTokenResponse> => {
  const response = await apiFetch('token', { method: 'GET' });

  return response.json();
};
