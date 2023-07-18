
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
  // 1. Define and Create div element 
  let div = document.createElement('div'); 
  
  // 2. Define and Get the HTML collection  of playlist content
  let playlistContainerDiv = document.getElementsByClassName('playlist-content');
  console.log(playlistContainerDiv);

  // 3.playListContainerDiv element will be added to the empty div 
  div.append(playlistContainerDiv);
  console.log(div);
  
  //Add new div to the class .user-playlist
  let userPlaylist = document.getElementById('user-playlist-container');
  console.log(userPlaylist);
  userPlaylist.appendChild(div);
  
   // 4. Add an event listener to the "Create new playlist" dropdown option 
   const createNewPlaylistOption = document.getElementById('create-new-playlist-option');
   console.log(createNewPlaylistOption);
   createNewPlaylistOption.addEventListener('click', createPlaylist, false);



  });
  



   
  