
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isMock = isDevelopment;
export const BACKEND_URL = false ? process.env.EXPO_PUBLIC_BASE_URL : process.env.EXPO_PUBLIC_BASE_URL_PROD;