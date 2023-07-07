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