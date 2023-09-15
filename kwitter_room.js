
var firebaseConfig = {
      apiKey: "AIzaSyDWAKPdu_VmVqwKrjbXKzQRI_eF-6sY-qo",
      authDomain: "catgram-f5677.firebaseapp.com",
      databaseURL: "https://catgram-f5677-default-rtdb.firebaseio.com",
      projectId: "catgram-f5677",
      storageBucket: "catgram-f5677.appspot.com",
      messagingSenderId: "281105707698",
      appId: "1:281105707698:web:a9c40fc1c23e543dbc4fab"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
user=localStorage.getItem("user");
room_name=localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="Bienvenido o bienvendia a un Catgramtástico lugar!!!"+user;
function addRoom() 
{ 
      room_name = document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
  localStorage.setItem("room_name", room_name); window.location.replace("kwitter_page.html");
 }
 function getData() { 
      firebase.database().ref("/" + room_name).on('value', function (snapshot) 
      { 
            document.getElementById("output").innerHTML = "";
             snapshot.forEach(function (childSnapshot) 
             {
                   childKey = childSnapshot.key;
                    childData = childSnapshot.val();
                     if (childKey != "purpose") { firebase_message_id = childKey;
                         message_data = childData;
                          
                          console.log(firebase_message_id);
                           console.log(message_data);
                            name = message_data['name'];
                             message = message_data['message'];
                              like = message_data['like'];
                               name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
                                message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                                 like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                                  span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                                   row= name_with_tag + message_with_tag + like_button + span_with_tag; document.getElementById("output").innerHTML += row;
                                     } }); });
                               } getData();
function logout()
{
      localStorage.removeItem("user");
      localStorage.removeItem("room_name");
      window.location="index.html";
      
}
function redirectToRoomName(name) 
{ 
      console.log(name);
       localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
       }