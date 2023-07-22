
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


createNewPlaylistOption.addEventListener('click', function() {
      // 1. Define and Create div element 
      let div = document.createElement('div'); 
       // Clone the playistContainerDiv so that it does not target an already existing playlist content
       const clonedPlaylistContainerDiv = playlistContainerDiv.cloneNode(true);
       // Assign unique id to cloned div 
       clonedPlaylistContainerDiv.id = 'cloned-playlist-content';
       div.id = 'cloned-playlist-div';
       userPlaylist.prepend(div);
   
       // 3.playListContainerDiv element will be added to the empty div 
       div.append(clonedPlaylistContainerDiv);
     
    console.log('hi');
  });
});
 

// Get amount of elements in div 
numberOfPlaylist = userPlaylist.children.length;
console.log(numberOfPlaylist);



  
  

   
  