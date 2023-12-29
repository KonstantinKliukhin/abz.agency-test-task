const BYTES_IN_KILOBYTE = 1024;
const KILOBYTES_IN_MB = 1024;

export const mbToByte = (mb: number) => mb * KILOBYTES_IN_MB * BYTES_IN_KILOBYTE;
