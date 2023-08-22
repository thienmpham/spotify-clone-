
// require('dotenv').config();


var redirect_uri = "http://127.0.0.1:5500/";
var auth_endpoint  = "https://accounts.spotify.com/authorize";
var TOKEN = "https://accounts.spotify.com/api/token";
var access_token = null;
var refresh_token = null;


var client_id = "930fa5bb5cfb41cd93ee92a8307286a8";
// var client_secret = process.env.client_secret_key;
console.log(client_id);
console.log(client_secret);


//
// Authorization for Spotify 
//

function onPageLoad(){
  // client_id = localStorage.getItem("client_id");
  // client_secret = localStorage.getItem("client_secret");

    if( window.location.search.length > 0 ){
        handleRedirect();
    }
}

function handleRedirect(){
    let code = getCode();  
    fetchAccessToken( code );
    //window.history.pushState("", "", redirect_uri); //remove param from url
    
}

function fetchAccessToken( code ){
  let body = "grant_type=authorization_code";
  body += "&code=" + code;
  body += "&redirect_uri=" + encodeURI(redirect_uri);
  body += "&client_id=" + client_id;
  body += "&client_secret=" + client_secret;
  callAuthorizationApi(body);
  console.log(body);
}

function callAuthorizationApi(body){
    let xhr = new XMLHttpRequest(); 
    xhr.open("POST", TOKEN, true); 
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', 'Basic' + btoa(client_id + ":" + client_secret));
    xhr.send(body);
    xhr.onload = handleAuthorizationResponse;
    console.log(xhr);
}


// Parses through the url 
// and gets the value
// of code 
function getCode(){
  let code = null;
  const queryString = window.location.search;
  if ( queryString.length > 0 ){
    const urlParams = new URLSearchParams(queryString); // Turns URL into URLSearchParams object to through parse easier
    code = urlParams.get("code")
    console.log(code);
    window.localStorage.setItem("code", code);
  }
  return code;
  
}


function initalizeGlobals(callback) {
  client_id = process.env.client_id_key; 
  client_secret = process.env.client_secret_key;

  callback();

}


// Creates a unique link to
// access the Spotify Authorization page 
// using the Query parameters in the documentation

 function requestAuthorization(){   
    let url = auth_endpoint;
    url += "?client_id=" + client_id;
    url += "&response_type=code";
    url += "&redirect_uri=" + encodeURI(redirect_uri);
    url += "&show_dialog=false";
    url += "&scope=user-read-private ugc-image-upload user-read-playback-state user-modify-playback-state user-read-currently-playing streaming playlist-modify-private playlist-modify-public user-follow-modify user-follow-read user-read-playback-position user-top-read user-read-recently-played user-library-modify user-library-read user-read-email";
    window.location.href = url; // Show Spotify's authorization page 
    } 
  


  function handleAuthorizationResponse(){
    if (this.status == 200){
      var data = JSON.parse(this.responseText);
      console.log(data);
      var data = JSON.parse(this.responseText);
      if ( data.access_token != undefined ){
        access_token = data.access_token;
        localStorage.setItem("access_token", access_token);
      }
      if ( data.refresh_token != undefined ){
        refresh_token = data.refresh_token;
        localStorage.setItem("refresh_token", refresh_token);
      }
      onPageLoad();
  }
    else {
      console.log(this.responseText);
      alert(this.responseText);
    }
  }