export const getFirebaseErrorMessage = (error: any): string => {
  if (typeof error === 'string') return error;
  
  const code = error.code || '';
  
  switch (code) {
    case 'permission-denied':
      return 'You do not have permission to perform this action';
    case 'resource-exhausted':
      return 'Too many requests. Please try again later';
    case 'unauthenticated':
      return 'Please sign in to continue';
    default:
      return error.message || 'An unexpected error occurred';
  }
};