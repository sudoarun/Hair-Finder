import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import store from "../Redux/reduxStore";
import { addAuth } from "../Redux/Slices/AuthSlice";

const UserSignUp = async (signUser) => {
  console.log("before fucntion:", signUser);
  const auth = getAuth();
  await createUserWithEmailAndPassword(auth, signUser.email, signUser.password)
    .then((res) => {
      const user = res.user;
      try {
        updateProfile(user, {
          displayName: signUser.username,
        }).then(() => {
          setDoc(doc(db, "userLogin", `${user.uid}`), signUser)
            .then(() =>
              store.dispatch(
                addAuth.addState({
                  name: user.displayName,
                  id: user.uid,
                  user: true,
                })
              )
            )
            .then(async () => {
              const docRef = doc(db, "UserDB", `${user.uid}`);
              await setDoc(docRef, {
                name: signUser.username,
                email: signUser.email,
                number: signUser.number,
                password: signUser.password,
              }).then(() => alert("User Saved !!!"));
            });
        });
      } catch (error) {
        console.log(error);
      }
    })
    .catch((err) => console.log("Auth Create :", err));
};

const UserSignIn = async (user) => {
  const auth = getAuth();
  await signInWithEmailAndPassword(auth, user.email, user.password)
    .then((data) => {
      const check = data.user;
      const { displayName, uid } = check;
      store.dispatch(
        addAuth.addState({
          name: displayName,
          id: uid,
          user: true,
        })
      );
      console.log(data);
    })
    .catch((err) => console.log("Sign in Error :", err.message));
};

export { UserSignUp, UserSignIn };
