export const createFileExtensionValidation = (allowedExtensions: string[]) =>
  (file?: File): boolean => {
    if (file) {
      const extensions = file.name.split('.').slice(-1)[0];

      console.log('extensions: ', extensions);

      return allowedExtensions.includes(extensions);
    } else {
      return false;
    }
  };
