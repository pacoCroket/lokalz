document.addEventListener("DOMContentLoaded", event => {
  // const app = firebase.app();
  const db = firebase.firestore();

  const shops = db.collection("shops");

  function getUserDoc() {
    const currentUser = firebase.auth().currentUser;
    users
      .doc(currentUser.uid)
      .get()
      .then(doc => {});
  }
});
