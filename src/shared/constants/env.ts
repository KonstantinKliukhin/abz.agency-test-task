interface PublicEnv {
    isDev: boolean;
    api?: string;
}

export const PUBLIC_ENV: PublicEnv = {
  isDev: process.env.NEXT_PUBLIC_IS_DEV === 'true',
  api: process.env.NEXT_PUBLIC_API,
};
