
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

// Add new playlist when "Create new playlist" link is clicked 
// function createPlaylist () {

//   //document.addEventListener( 'DOMContentLoaded', function() {
//     // Get the create Playlist and playlist container elements
//     var createNewPlaylistElement = document.getElementById('createNewPlaylist'); 
//     var playlistContainerElement = document.getElementById('playlistContainer'); 
    
//     createNewPlaylistElement.addEventListener("click", function(event) {
//       event.preventDefault();
      
//     // Get the reference to an already existing playlist element
//     var existingPlaylist = document.querySelector('.playlist-content');
//     //console.log(".playlist-content")
//     // Create a new playlist element as a copy of the existing element
//     var newPlaylist = existingPlaylist.cloneNode(true);

//     // Append the playlist element to the container 
//     playlistContainerElement.appendChild(newPlaylist);
//   });
// //});
// }

function createPlaylist () {
  // 1. Create div element 
  let newPlaylistDiv = document.createElement('div'); 
  // The new div will have elements from class: playlist-content
  newPlaylistDiv.classList.add('playlist-content');

  // Adds the newPlaylistDiv to the playlist container
  playlistContainerDiv.appendChild(newPlaylistDiv);




  }
  //Get the container of the playlist 
  let playlistContainerDiv = document.querySelector('.user-playlist'); 
  
  // // 2. Adds an event listener to the link button "Create new playlist"
  //  document.getElementById('createNewPlaylist').addEventListener('click', function(){
  //    alert("Div was clicked!");
  //  }); 

    //  Adds an event listener to the link button "Create new playlist"
    const createNewPlaylist = document.getElementById('createNewPlaylist');
    createNewPlaylist.addEventListener('click', createPlaylist);