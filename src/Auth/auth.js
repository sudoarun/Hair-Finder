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
const ProfessionalSignIn = async (state, setSignInData) => {
  await signInWithEmailAndPassword(auth, state.email, state.password)
    .then((data) => {
      const user = data.user;
      // console.log(user);
      setSignInData(user);
    })
    .catch((err) => console.log("Sign in Error :", err.message));
};

export { ProfessionalSignUp, ProfessionalSignIn };
