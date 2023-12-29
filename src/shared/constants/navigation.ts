export enum RouteNames {
    MAIN='main',
}

export const SECTIONS_IDS = {
  [RouteNames.MAIN]: {
    usersList: 'users-list',
    signUp: 'sign-up',
  },
} as const;

export const APP_ROUTES = {
  [RouteNames.MAIN]: (sectionId?: string) => `#${sectionId}`,
} as const satisfies Record<RouteNames, (...args: any[]) => string>;
