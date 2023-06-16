
    var firebaseConfig = {
      apiKey: "AIzaSyBBCgSIuwlP0TIDg5ucfmAR9gSWmDKXRPw",
      authDomain: "lastprojectkwitterhomework.firebaseapp.com",
      databaseURL: "https://lastprojectkwitterhomework-default-rtdb.firebaseio.com/",
      projectId: "lastprojectkwitterhomework",
      storageBucket: "lastprojectkwitterhomework.appspot.com",
      messagingSenderId: "123784652937",
      appId: "1:123784652937:web:2954ef4e86b961775a3e58"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
    function addRoom() {
      room_name = document.getElementById("room_name").value;

     localStorage.setItem("Roomname",room_name);
 
     window.location = "kwitter_page.html";

     firebase.database().ref("/").child(room_name).update({
           purpose: "Adding Room Name"
     });
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room name - "+Room_names);
       row="<div class='room_name'id="+Room_names+" onclick='redirectToRoomName()this.id'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      });});}

getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");

      localStorage.removeItem("room_name");
       window.location="index.html";

}

