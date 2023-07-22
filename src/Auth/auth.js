import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import { addAuth } from "../Redux/Slices/AuthSlice";
import store from "../Redux/reduxStore";

const auth = getAuth();

const ProfessionalSignUp = async (state) => {
  await createUserWithEmailAndPassword(auth, state.email, state.password)
    .then((res) => {
      const user = res.user;
      try {
        updateProfile(user, {
          displayName: state.username,
        }).then(() => {
          setDoc(doc(db, "proLogin", `${user.uid}`), state).then(() =>
            store.dispatch(
              addAuth.addState({ name: user.displayName, id: user.uid })
            )
          );
        });
      } catch (error) {
        console.log(error);
      }
    })
    .catch((err) => console.log("Auth Create :", err));
};
const ProfessionalSignIn = async (state) => {
  await signInWithEmailAndPassword(auth, state.email, state.password)
    .then((data) => {
      const check = data.user;
      const { displayName, uid } = check;
      store.dispatch(
        addAuth.addState({
          name: displayName,
          id: uid,
        })
      );
    })
    .catch((err) => console.log("Sign in Error :", err.message));
};

export { ProfessionalSignUp, ProfessionalSignIn };
