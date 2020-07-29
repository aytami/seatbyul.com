// Initialize Firebase
    var config = {
      apiKey: "AIzaSyCjwbKUvDopzXFnl8KhYeYHj0YGhrSHUjI",
      authDomain: "mydatabase-c1f53.firebaseapp.com",
      databaseURL: "https://mydatabase-c1f53.firebaseio.com",
      projectId: "mydatabase-c1f53",
      storageBucket: "mydatabase-c1f53.appspot.com",
      messagingSenderId: "925452085527"
     };
    firebase.initializeApp(config);
  

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    alert("Active User + email_id);

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

    alert("No Active User");

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
  alert("Im so sad you leave ..");
}
