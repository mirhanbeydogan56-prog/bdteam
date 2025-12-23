import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getDatabase, ref, push, onValue, update } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

export const firebaseConfig={
  apiKey:"AIzaSyASo730FXSqQx4TRhFRAQVYn9Eetyjri_s",
  authDomain:"bd-team-30e74.firebaseapp.com",
  databaseURL:"https://bd-team-30e74-default-rtdb.firebaseio.com",
  projectId:"bd-team-30e74"
};

export const app=getApps().length?getApps()[0]:initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getDatabase(app);

export const api={
  signInWithEmailAndPassword,
  onAuthStateChanged,
  ref,
  push,
  onValue,
  update
};
