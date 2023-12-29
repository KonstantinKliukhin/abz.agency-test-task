'use server';

import { UserPosition } from '../../../model/types/userPosition';
import { apiFetch } from '@shared/api';
import { CommonServerResponse } from '@shared/types';

interface GetUserPositionsResponse extends CommonServerResponse {
    positions: UserPosition[];
}

export const getUserPositions = async (): Promise<GetUserPositionsResponse> => {
  const response = await apiFetch('positions');

  return response.json();
};
