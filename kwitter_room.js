
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBGERyHngfCp4OoJPdzJkT7y_HCBoo87fo",
      authDomain: "kwitter-6c330.firebaseapp.com",
      databaseURL: "https://kwitter-6c330-default-rtdb.firebaseio.com",
      projectId: "kwitter-6c330",
      storageBucket: "kwitter-6c330.appspot.com",
      messagingSenderId: "343244999748",
      appId: "1:343244999748:web:8c5d49edc6448d1c7a0011"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
