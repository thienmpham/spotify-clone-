// server = require("../client/app.js")

export function getCode(){
  let code = null;
  const queryString = window.location.search;
  if ( queryString.length > 0 ){
      const urlParams = new URLSearchParams(queryString);
      code = urlParams.get('code')
  }
  return code;
}


console.log( getCode );
function onPageLoad(){
  if( window.location.search.length > 0 ){
      handleRedirect();
  }
};
window.onload = onPageLoad();


function handleRedirect(){
    let code = getCode();  
    fetchAccessToken( code );
    //window.history.pushState("", "", redirect_uri); //remove param from url
    console.log(code);
};

function fetchAccessToken( code ){
  let body = "grant_type=authorization_code";
  body += "&code=" + code;
  body += "&redirect_uri=" + encodeURI(redirect_uri);
  body += "&client_id=" + client_id;
  body += "&client_secret=" + client_secret;
  callAuthorizationApi(body);
  
};

function callAuthorizationApi(body){
    let xhr = new XMLHttpRequest(); 
    xhr.open("POST", TOKEN, true); 
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', 'Basic' + btoa(client_id + ":" + client_secret));
    xhr.send(body);
    xhr.onload = handleAuthorizationResponse;
    
};


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
};