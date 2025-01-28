// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAu876GRQ6-wnoBXSNb5tHFILc_hEmqzFs",
//   authDomain: "chamabike-2e11f.firebaseapp.com",
//   projectId: "chamabike-2e11f",
//   storageBucket: "chamabike-2e11f.appspot.com",
//   messagingSenderId: "1086294486512",
//   appId: "1:1086294486512:web:1c30fe3cf40d047cec8135",
//   measurementId: "G-8JTC20X9XP"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//console.log(import.meta.env.VITE_SOME_KEY)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;