// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD200zBQen143YbDB6itiu9R99IKPtGzqA",
      authDomain: "kwitterdatabase-823c9.firebaseapp.com",
      databaseURL: "https://kwitterdatabase-823c9-default-rtdb.firebaseio.com",
      projectId: "kwitterdatabase-823c9",
      storageBucket: "kwitterdatabase-823c9.appspot.com",
      messagingSenderId: "487014245324",
      appId: "1:487014245324:web:0d4b69966e201fd233b369"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}