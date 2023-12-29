export const createFileSizeValidation = (maxSize: number) =>
  (file?: File): boolean => Boolean(file?.size && file.size < maxSize);
