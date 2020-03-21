document.addEventListener("DOMContentLoaded", event => {
  $("#body").load("landing.html");
  // const app = firebase.app();
  const db = firebase.firestore();

  const usersRef = db.collection("users");
  const shopsRef = db.collection("shops");
  const currentUser = firebase.auth().currentUser;

  function getUserDoc() {
    if (!currentUser) return;
    usersRef
      .doc(currentUser.uid)
      .get()
      .then(doc => {});
  }

  function getShops(query) {
    shopsRef
      .where("location", "==", true)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      })
      .then(err => {
        console.log(err);
      });
  }
});

function loadSignUp() {
  $("#body").load("signup.html");
}

function loadHome() {
  $("#body").load("landing.html");
}
