import { useState } from 'react';
import { uploadImage } from '../lib/firebase/storage';
import { getFirebaseErrorMessage } from '../lib/firebase/errors';

export const useFirebaseUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const upload = async (file: File, path: string) => {
    try {
      setUploading(true);
      setError(null);
      return await uploadImage(file, path);
    } catch (err) {
      const errorMessage = getFirebaseErrorMessage(err);
      setError(errorMessage);
      throw err;
    } finally {
      setUploading(false);
    }
  };

  return { upload, uploading, error };
};