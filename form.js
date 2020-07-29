// Your web app's Firebase configuration

  var firebaseConfig = {
  
    apiKey: "AIzaSyCjwbKUvDopzXFnl8KhYeYHj0YGhrSHUjI",
    authDomain: "mydatabase-c1f53.firebaseapp.com",
    databaseURL: "https://mydatabase-c1f53.firebaseio.com",
    projectId: "mydatabase-c1f53",
    storageBucket: "mydatabase-c1f53.appspot.com",
    messagingSenderId: "925452085527",
    appId: "1:925452085527:web:85300750c3f19de643af52",
    measurementId: "G-KSE2N84FVH"
  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

 

        const auth = firebase.auth();

        

        

        function signUp(){

                

                var email = document.getElementById("email");

                var password = document.getElementById("password");

                

                const promise = auth.createUserWithEmailAndPassword(email.value, password.value);

                promise.catch(e => alert(e.message));

                

                alert("Signed Up");

        }

        

        

        

        function login(){

                

                var email = document.getElementById("email");

                var password = document.getElementById("password");

                

                const promise = auth.signInWithEmailAndPassword(email.value, password.value);

                promise.catch(e => alert(e.message));

                

                

                

                

        }

        

        

        function logout(){

                

                auth.signOut();

                alert("Signed Out");

                

        }

        

        

        

        auth.onAuthStateChanged(function(user){

                

              if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

