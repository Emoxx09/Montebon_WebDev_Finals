var subjectObject = {
  "Front-end": {

  },
  "Back-end": {

  }
}
window.onload = function() {
  var subjectSel = document.getElementById("subject");
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
}

function validateForm() {
  var fname = document.forms["myForm"]["fname"].value;
  var lname = document.forms["myForm"]["lname"].value;
  var pwd = document.forms["myForm"]["pwd"].value;
  var email = document.forms["myForm"]["email"].value;
  var homepage = document.forms["myForm"]["homepage"].value;
  var topix = document.forms["myForm"]["subject"].value;

  if (fname == "") {
    alert("First name seems to be empty, please fill it up!");
    return false;
  }
  else if (lname == ""){
  	alert("Last name seems to be empty, please fill it up!");
    return false;
  }
  else if (pwd == ""){
  	alert("Password seems to be empty, please fill it up!");
    return false;
  }
  else if (email == ""){
  	alert("Email seems to be empty, please fill it up!");
    return false;
  }
  else if (homepage == ""){
  	alert("Email seems to be empty, please fill it up!");
    return false;
  }
  else if(!document.getElementById('male').checked & !document.getElementById('female').checked & !document.getElementById('other').checked ) {
  	alert("Please select your gender!");
    return false;
  }
  else if(topix == "") {
  	alert("Please choose a preference in topic!");
    return false;
  }
  else{
  	welcome();
  }
}

function checkFormat(){
	
}

function welcome(){
	alert("Welcome, " + document.getElementById('fname').value + "! Hope you enjoy the experience!");
}
