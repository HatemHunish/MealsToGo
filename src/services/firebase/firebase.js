import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { FirebaseError, getApp, getApps, initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
export const getAuthErrorMessage = (error) => {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case 'auth/invalid-email':
        return 'Please enter a valid email address';

      case 'auth/user-not-found':
        return 'No account found with this email';

      case 'auth/wrong-password':
        return 'Incorrect password';

      case 'auth/too-many-requests':
        return 'Too many attempts. Try again later';

      default:
        return 'Something went wrong. Please try again';
    }
  }

  return 'Unexpected error occurred';
};
const firebaseConfig = {
  apiKey: 'AIzaSyAHFvrEEuO65gnRiAGj84rJT6Ytm18X1m8',
  authDomain: 'mealstogo-3caed.firebaseapp.com',
  projectId: 'mealstogo-3caed',
  storageBucket: 'mealstogo-3caed.firebasestorage.app',
  messagingSenderId: '6429824797',
  appId: '1:6429824797:web:5318a478e438778e9173f4',
  measurementId: 'G-RV0PSTNK03',
};

let auth;

if (!getApps().length) {
  const app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
} else {
  const app = getApp();
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
}
export { auth };
