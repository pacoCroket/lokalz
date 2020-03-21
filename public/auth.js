document.addEventListener("DOMContentLoaded", event => {
    const users = db.collection("users");

    function signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          dispatch({ type: "SIGNOUT_SUCCESS" });
        })
        .catch(err => {
          dispatch({ type: "SIGNOUT_ERROR", err });
        });
    }
  
    function signUp(newUser) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then(resp => {
          return users.doc(resp.user.uid).set({
            firstName: newUser.firstName,
            lastName: newUser.lastName
          });
        })
        .then(() => {
          dispatch({ type: "SIGNUP_SUCCESS" });
        })
        .catch(err => {
          dispatch({ type: "SIGNUP_ERROR", err });
        });
    }
  
    function emailAndPasswordLogin(credentials) {
      firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(() => {
          dispatch({ type: "LOGIN_SUCCESS" });
        })
        .catch(err => {
          dispatch({ type: "LOGIN_ERROR", err });
        });
    }
  
    // not used
    function googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
  
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => {
          const user = res.user;
          document.write("hello " + user.displayName);
          console.log(user);
        })
        .catch(err => console.log(err));
    }
  
}