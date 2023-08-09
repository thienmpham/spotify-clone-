
// For the dropdown menu
class Dropdown {

  constructor() {
    this.dropdowns = document.querySelectorAll('.dropdown .dropdown-menu');
    if (this.dropdowns.length) {
      this.initialize();
    }
  }


  initialize() {
    document.addEventListener('click', e => {
      //if (e.target.classList.contains('dropdown-action')) {
        this.hideOtherDropdowns(e.target);
        this.handleClick(e.target);
      /*} else {
        this.hideOtherDropdowns(null);
      }*/
    });
  }

  handleClick(dropdownAction) {
    this.dropdowns.forEach(dropdown => {
      if (dropdown.parentElement.contains(dropdownAction)) {
        dropdown.classList.add('active');
      } else {
        dropdown.classList.remove('active');
      }
    });
  }

  hideOtherDropdowns(dropdownAction) {

    this.dropdowns.forEach(dropdown => {
      if (!dropdown.parentElement.contains(dropdownAction)) {
        dropdown.classList.remove('active');
      }
    });
  }}




  document.addEventListener('DOMContentLoaded', () => new Dropdown());

  


      

// 2. Define and Get the HTML collection  of playlist content
      const playlistContainerDiv = document.getElementById('new-playlist-content');

let userPlaylist = document.getElementById('user-playlist-container');
      console.log(userPlaylist);

// 4. Add an event listener to the "Create new playlist" dropdown option 
      document.addEventListener('DOMContentLoaded',function handlePlaylistClick()  {
      const createNewPlaylistOption = document.getElementById('create-new-playlist-option');
      console.log(createNewPlaylistOption);
      
 // Define counter for the playlist 
      let counter = 1;

createNewPlaylistOption.addEventListener('click', function() {
      // 1. Define and Create div element 
      let div = document.createElement('div'); 
      
      // Clone the playistContainerDiv so that it does not target an already existing playlist content
      const clonedPlaylistContainerDiv = playlistContainerDiv.cloneNode(true);

      // Assign unique id to cloned div 
      clonedPlaylistContainerDiv.id = 'cloned-playlist-content';
      div.id = 'cloned-playlist-div';
      clonedPlaylistDiv = document.getElementById('cloned-playlist-div');
      console.log(clonedPlaylistDiv);

      // Adds the div to the userPlaylist container 
      userPlaylist.prepend(div);

      // 3.playListContainerDiv element will be added to the empty div 
      div.append(clonedPlaylistContainerDiv);

      // Counter to display the # of playlists created
      counter++;
      console.log(counter);
      playlistTextCounter = document.getElementById('playlist-text-counter');
      // Replace the text node with counter, in this case '1'
      playlistTextCounter.replaceWith(counter);
  });
});
 


// URL route for Single page application (SPA)
// Prevents the default behavior of any a href links within the class: navMain
// document.addEventListener('click', (e) => {
//     const {target} = e; 
//     if(!target.matches('nav a')) {
//       return;

//     }
//     e.preventDefault(); 
//     urlRoute();
// })

// Creates an object that maps the url to the template, title and description
const urlRoutes = {
  404: {
    template: "/templates/404.html",
    title: "", 
    description: "",
  },
  "/": { 
    template: "/templates/home.html", 
    title: "", 
    description: "",
  },
  search: { 
    template: "./templates/search.html", 
    title: "", 
    description: "",
  },
  playlist: { 
    template: "/templates/playlist.html", 
    title: "", 
    description: "",
  },

};

// Watches the url and calls the urlLocationHandler 
// const urlRoute = (event) => { 
//     event = event || window.event;
//     event.preventDefault(); 
//     window.history.pushState({}, "", event.target.href); 
//     urlLocationHandler(); 
// }

// Handles the URL location 
const urlLocationHandler = async () => { 
    var location = window.location.hash.replace("#", ""); 
    if(location.length == 0) {
      location = "/"; 
    }

    // get the route object from the urlRoutes object
     const route = urlRoutes[location] || urlRoutes["404"];
     // Get html content from the templates 
     const html = await fetch(route.template).then((response) => response.text());
     document.getElementById("main-content").innerHTML = html;
};
// Adds an event listener that watches for for url changes 
// window.onpopstate = urlLocationHandler;

// window.route = urlRoute;

// urlLocationHandler();

window.addEventListener("hashchange", urlLocationHandler);

urlLocationHandler();


//
// Authorization for Spotify 
//

function requestAuthorization(){
  client_id = document.getElementById("clientId").value; //fetch client id
  client_secret = document.getElementById("clientSecret").value; // fetch client secret 
  localStorage.setItem("client_id", client_id); // save to local storage for future use
  localStorage.setItem("client_secret", client_secret) // save to local storage for future use 
  // in real application do not expose client_secret to the user 

  let url

}