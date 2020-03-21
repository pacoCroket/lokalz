document.addEventListener("DOMContentLoaded", event => {

  $("#body").load("landing.html");


    $("#event_toggle").click(function() {
        var active = $(".fold.active");
        console.log("blablabla");
        // if there is visible fold element on page (user already clicked at least once on link)
        if (active.length) {
            $(".fold.active").animate({ height: "0" }, 1000, function() {
                // this happens after above animations are complete
                $(this).removeClass("active");
            });
            // clicking for the first time
        } else {
            $("#hide_open")
                .addClass("active")
                .animate({ height: "250px" }, 1000);
        }
    });

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
