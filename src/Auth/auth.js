import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

const auth = getAuth();

const ProfessionalSignUp = async (state, setSignInData) => {
  await createUserWithEmailAndPassword(auth, state.email, state.password)
    .then((res) => {
      const user = res.user;
      try {
        updateProfile(user, {
          displayName: state.username,
        }).then(() => {
          setDoc(doc(db, "proLogin", `${user.uid}`), state).then(() =>
            setSignInData(user)
          );
        });
      } catch (error) {
        console.log(error);
      }
    })
    .catch((err) => console.log("Auth Create :", err));
};
const ProfessionalSignIn = async (state, setAuth) => {
  await signInWithEmailAndPassword(auth, state.email, state.password)
    .then((data) => {
      // setTimeout(() => {
      //   alert("Hello");
      // }, 2000);
      const check = data.user;
      setAuth(check);
    })
    .catch((err) => console.log("Sign in Error :", err.message));
};

export { ProfessionalSignUp, ProfessionalSignIn };
