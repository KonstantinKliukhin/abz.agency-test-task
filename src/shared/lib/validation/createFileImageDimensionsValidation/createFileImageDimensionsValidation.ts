export const createFileImageDimensionsValidation = (minWidth: number, minHeight: number) =>
  (file?: File): Promise<boolean> | boolean => {
    const isImage = file?.type.startsWith('image');

    if (!file || !isImage) {
      return false;
    }

    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        const img = new Image();

        img.onload = () => {
          const isDimensionsValid = img.width >= minWidth && img.height >= minHeight;

          if (isDimensionsValid) {
            resolve(true);
          } else {
            resolve(false);
          }
        };

        if (typeof e.target?.result === 'string') {
          img.src = e?.target?.result;
        } else {
          resolve(false);
        }
      };

      reader.onerror = (error) => reject(error);

      reader.readAsDataURL(file as Blob);
    });
  };
