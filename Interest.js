

    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAyyqbS1S8KWytJOIW8ZAddlmUIczJzGwU",
    authDomain: "meet-f4387.firebaseapp.com",
    databaseURL: "https://meet-f4387.firebaseio.com",
  };
  firebase.initializeApp(config);
var auth=firebase.auth();
var CurentUser=localStorage.getItem('CurentUser');
var database=firebase.database().ref('/');
var Main=document.getElementById('Main');
function LogOut(){
    firebase.auth().signOut().then(function(user) {
  console.log('Successfully');
  location='index.html'
}).catch(function(error) {
 console.log('UnSuccessfully');});
}



database.child(CurentUser+'/InterestEvents').on('child_added',function(event){
var events=event.val();
events.id=event.key;
var Div=document.createElement('DIV');
Div.setAttribute('id',events.id);
Div.setAttribute('class','mrgn bgwhite');


var span=document.createElement('SPAN')//for date
var spantxt=document.createTextNode(events.Date);
span.setAttribute('class','font mrgn');
span.appendChild(spantxt);
Div.appendChild(span);

var span1=document.createElement('SPAN');//for event name
var span1txt=document.createTextNode(events.EventName);
span1.setAttribute('class','font mrgn');
span1.appendChild(span1txt);
Div.appendChild(span1);

var Para=document.createElement('P');//for description
var Paratxt=document.createTextNode('Description: \n'+events.Description);
// Para.setAttribute('class','fnt');
Para.appendChild(Paratxt);
Div.appendChild(Para);

var Para1=document.createElement('P');//for address
var Para1txt=document.createTextNode('Address: \n'+events.Address);
// Para.setAttribute('class','fnt');
Para1.appendChild(Para1txt);
Div.appendChild(Para1);



var span2=document.createElement('P');//for time
var span2txt=document.createTextNode('Time: \n'+events.Time);
span2.appendChild(span2txt);
Div.appendChild(span2);

var breakline=document.createElement('BR');
Div.appendChild(breakline);
var span3=document.createElement('SPAN');//for planner name
var span3txt=document.createTextNode('Planned By: \n'+events.PlannerName);
span3.appendChild(span3txt);
span3.setAttribute('class','float-left');
Div.appendChild(span3);
// var breakline=document.createElement('BR');
Div.appendChild(breakline);

Main.appendChild(Div);}

);