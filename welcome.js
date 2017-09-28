
   
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAyyqbS1S8KWytJOIW8ZAddlmUIczJzGwU",
    authDomain: "meet-f4387.firebaseapp.com",
    databaseURL: "https://meet-f4387.firebaseio.com",
  };
  firebase.initializeApp(config);
var auth=firebase.auth();
var database=firebase.database().ref('/');
var fname=document.getElementById('fname');
var lname=document.getElementById('lname');
var email=document.getElementById('email');
var number=document.getElementById('number');
var age=document.getElementById('age');


firebase.auth().onAuthStateChanged(function(usr) {
  if (usr) {
    console.log(usr.uid);

    // database.child(usr.uid+'/Userinfo')
    database.child(usr.uid+'/UserInfo').on('child_added',function(user){
      
        user=user.val();
fname.innerHTML=user.FirstName;
lname.innerHTML=user.LastName;
email.innerHTML=user.Email;
number.innerHTML=user.Contact;
age.innerHTML=user.Age;

    });
  } else {
    
  }
});



function LogOut(){
    firebase.auth().signOut().then(function(user) {
  console.log('Successfully');
  location='index.html'
}).catch(function(error) {
 console.log('UnSuccessfully');});
}