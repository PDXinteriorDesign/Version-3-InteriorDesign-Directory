import React, { useCallback } from 'react';
import { Upload, X } from 'lucide-react';
import { storage } from '../../lib/firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

interface FileUploadProps {
  onUploadComplete: (urls: string[]) => void;
  maxFiles?: number;
  acceptedTypes?: string[];
}

export const FileUpload: React.FC<FileUploadProps> = ({
  onUploadComplete,
  maxFiles = 5,
  acceptedTypes = ['image/jpeg', 'image/png', 'image/webp']
}) => {
  const handleFileUpload = useCallback(async (files: FileList) => {
    try {
      if (files.length > maxFiles) {
        alert(`Please select a maximum of ${maxFiles} images.`);
        return;
      }

      const uploadPromises = Array.from(files).slice(0, maxFiles).map(async (file) => {
        const storageRef = ref(storage, `portfolio/${Date.now()}-${file.name}`);
        const snapshot = await uploadBytes(storageRef, file);
        return getDownloadURL(snapshot.ref);
      });

      const urls = await Promise.all(uploadPromises);
      onUploadComplete(urls);
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('Error uploading files. Please try again.');
    }
  }, [maxFiles, onUploadComplete]);

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
      <input
        type="file"
        multiple
        accept={acceptedTypes.join(',')}
        onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
        className="hidden"
        id="file-upload"
      />
      <label 
        htmlFor="file-upload"
        className="cursor-pointer"
      >
        <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
        <p className="text-gray-600">
          Drag and drop images here, or click to select files
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Maximum {maxFiles} images, 5MB each
        </p>
      </label>
    </div>
  );
};