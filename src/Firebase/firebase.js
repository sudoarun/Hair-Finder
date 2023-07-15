import { initializeApp } from "firebase/app";
const config = {
  apiKey: process.env.apikey,
  authDomain: "project-saloon-65242.firebaseapp.com",
  projectId: "project-saloon-65242",
  storageBucket: "project-saloon-65242.appspot.com",
  messagingSenderId: "757530177620",
  appId: "1:757530177620:web:7e55f788d54c0035ea3dc1",
};
const app = initializeApp(config);
export default app;
