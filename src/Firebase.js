
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import { getAuth} from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use

// const firebaseConfig = {
//   apiKey: "AIzaSyDUNv_3xeG-nneBNxhAT7QXgRVdmLkMGyo",
//   authDomain: "onereducation-5e6f4.firebaseapp.com",
//   projectId: "onereducation-5e6f4",
//   storageBucket: "onereducation-5e6f4.appspot.com",
//   messagingSenderId: "328710043555",
//   appId: "1:328710043555:web:23f1a24d5aa74aa06f8c16",
//   measurementId: "G-GX9F8H32EF"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// // const analytics = getAnalytics(app);
// export { app , auth };

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUNv_3xeG-nneBNxhAT7QXgRVdmLkMGyo",
  authDomain: "onereducation-5e6f4.firebaseapp.com",
  projectId: "onereducation-5e6f4",
  storageBucket: "onereducation-5e6f4.appspot.com",
  messagingSenderId: "328710043555",
   appId: "1:328710043555:web:23f1a24d5aa74aa06f8c16",
   measurementId: "G-GX9F8H32EF"
 };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth };
export { db };
export { storage };
export { app };