// Import necessary functions from Firebase SDK v9+
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';  // For real-time database
import { getAuth } from 'firebase/auth';          // For authentication
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOMJEy-PcaCVmyqU8d-XywsMnd9i85aZg",
  authDomain: "imiburger-b2954.firebaseapp.com",
  databaseURL: "https://imiburger-b2954.firebaseio.com", // Add this line
  projectId: "imiburger-b2954",
  storageBucket: "imiburger-b2954.appspot.com",
  messagingSenderId: "365569186431",
  appId: "1:365569186431:web:c739e054a97f3359d7fd4a",
  measurementId: "G-0WR1CZYFWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);  // Initialize real-time database
const auth = getAuth(app);          // Initialize Firebase Authentication

export { database, auth, ref, push, analytics };
