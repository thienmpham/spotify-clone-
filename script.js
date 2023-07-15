
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

document.addEventListener('DOMContentLoaded',function createPlaylist () {
  // 1. Create div element 
  let div = document.createElement('div'); 
  
  // 2. Define and Get the HTML collection  of playlist content
  let playlistContainerDiv = document.getElementsByClassName('playlist-content');
  
  // The new div will have elements from class: playlist-content
  let newPlaylistDiv = div.classList.add('playlist-content');
  console.log(newPlaylistDiv);

  
  




  });
  let newPlaylistDiv = document.createElement('div'); 
  
 
  //Get the container of the playlist 
  //let playlistContainerDiv = document.querySelector('.user-playlist'); 
  //console.log(playlistContainerDiv);
  // // 2. Adds an event listener to the link button "Create new playlist"
  //  document.getElementById('createNewPlaylist').addEventListener('click', function(){
  //    alert("Div was clicked!");
  //  }); 

    //  Adds an event listener to the link button "Create new playlist"
    const createNewPlaylist = document.getElementById('createNewPlaylist');
    createNewPlaylist.addEventListener('click', createPlaylist);
    
  