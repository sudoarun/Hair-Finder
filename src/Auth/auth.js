import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";
// import { message } from "antd";

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
  // await addDoc(ProLoginRef, state)
  //   .then(() => {
  //     createUserWithEmailAndPassword(auth, state.email, state.password)
  //       .then((res) => {
  //         const user = res.user;
  //         try {
  //           updateProfile(user, {
  //             displayName: state.username,
  //             phoneNumber: 234567,
  //           }).then(alert("Thug life"));
  //         } catch (error) {
  //           console.log(error);
  //         }
  //       })
  //       .catch((err) => console.log("Auth Create :", err));
  //   })
  //   .catch((err) => console.log("Add Doc : ", err));
};
const ProfessionalSignIn = async (state, setProfessional, setSignInData) => {
  // console.log(setProfessional);
  await signInWithEmailAndPassword(auth, state.email, state.password)
    .then((data) => {
      const user = data.user;
      setSignInData(user);
      // console.log(user);
    })
    .catch((err) => console.log("Sign in Error :", err.message));
};

export { ProfessionalSignUp, ProfessionalSignIn };
