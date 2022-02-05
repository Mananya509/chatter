
var firebaseConfig = {
      apiKey: "AIzaSyBDY2b7oyQ_st-UYmH3w7vWRhgTQ8cpqx4",
      authDomain: "kwitter-79116.firebaseapp.com",
      databaseURL: "https://kwitter-79116-default-rtdb.firebaseio.com",
      projectId: "kwitter-79116",
      storageBucket: "kwitter-79116.appspot.com",
      messagingSenderId: "218732969102",
      appId: "1:218732969102:web:4f4bb5e44392a929325ddf"
};
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
