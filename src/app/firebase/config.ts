import "dotenv/config";
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY?.toString(),
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export { app };
