export const getMessageFromError = (error: unknown | Error): string => {
  if (error && error instanceof Object && 'message' in error && typeof error.message === 'string') {
    return error.message;
  } else {
    return '';
  }
};
