const firebaseConfig = {
    apiKey: "AIzaSyDrV3C_OQ3-DcYluCN2rI-KVwGYrmdLl8c",
    authDomain: "c94-project-4ddb7.firebaseapp.com",
    databaseURL: "https://c94-project-4ddb7-default-rtdb.firebaseio.com",
    projectId: "c94-project-4ddb7",
    storageBucket: "c94-project-4ddb7.appspot.com",
    messagingSenderId: "931575460350",
    appId: "1:931575460350:web:9fced1381dd47d5c5710af",
    measurementId: "G-0W8EX96305"
  };
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }
  
