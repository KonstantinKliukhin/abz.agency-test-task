import { PUBLIC_ENV } from '../../constants/env';

export const apiFetch = async (
  relativeUrl: string,
  requestInit?: globalThis.RequestInit,
): Promise<Response> => {
  const apiUrl = PUBLIC_ENV.api;
  if (!apiUrl) {
    throw new Error("env API variable isn't provided");
  }

  return fetch(`${apiUrl}${relativeUrl}`, requestInit);
};
