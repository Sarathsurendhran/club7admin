$(document).ready(function() {
    $(".menu").on('click', function() {
        var selector = $(".site");
        if (selector.hasClass('shown')) {
            selector.removeClass('shown');
        } else {
            selector.addClass('shown');
        }
    });
});



  const modal = document.getElementById('feeCategoryModal');
  const toggleSwitch = document.getElementById('toggleModalleague');

  function toggleModal() {
    if (toggleSwitch.checked) {
      modal.style.display = 'flex';
    } else {
      closeModal();
    }
  }


  function saveFeeCategory() {
    const categoryName = document.getElementById('categoryName').value.trim();
    const age = document.getElementById('categoryAge').value.trim();
    const fee = document.getElementById('categoryFee').value.trim();

    const showFeeCategoryTable = document.getElementById('feeCategoryTableShow');

    if (categoryName && age && fee) {
        toggleSwitch.checked = true; // Keep the toggle switch on if data is saved
        showFeeCategoryTable.style.display = 'block';
        closeModal(true); // Pass true to indicate saving
    } else {
        alert('Please fill out all fields.');
    }
}

function closeModal(isSaved = false) {
    modal.style.display = 'none';

    if (!isSaved) {
        // Reset the toggle switch only if the modal is closed without saving
        toggleSwitch.checked = false;
    }
}


const cancelModal = document.getElementById('cancelFeeCategory');
const showFeeCategoryTable = document.getElementById('feeCategoryTableShow');

// Open the modal when trying to toggle off
toggleSwitch.addEventListener('change', () => {
    if (!toggleSwitch.checked) {
        openCancelModal();
    }
});

function openCancelModal() {
    cancelModal.style.display = 'flex';
}

function closeCancelModal() {
    cancelModal.style.display = 'none';
    toggleSwitch.checked = true; // Keep the toggle on if "No" is clicked
}

function confirmToggleOff() {
    cancelModal.style.display = 'none';
    toggleSwitch.checked = false; // Turn off the toggle
    showFeeCategoryTable.style.display = 'none'; // Hide the table
}

// Add event listeners for the modal buttons
document.querySelector('.cancel-btn-cancel').addEventListener('click', closeCancelModal);
document.querySelector('.cancel-btn-confirm').addEventListener('click', confirmToggleOff);

// Close modal if clicking outside the content
window.addEventListener('click', (event) => {
    if (event.target === cancelModal) {
        closeCancelModal();
    }
});


  // Close modal when clicking outside the modal content
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal(false);
    }
  });


  document.addEventListener('DOMContentLoaded', function() {
    const toggleContainer = document.querySelector('.toggle-container');
    const form = document.getElementById('leagueForm');
    const divisionName = document.getElementById('division-name');
    const divisionPlayerSection = document.getElementById('division-player-section');
    divisionName.style.visibility = 'hidden';
    divisionPlayerSection.style.display = 'none';
  
    // Sabarinath :- here is the toggle working 
    toggleContainer.addEventListener('click', function() {
      const isChecked = this.getAttribute('aria-checked') === 'true';
      this.setAttribute('aria-checked', !isChecked);
      const toggleButton = this.querySelector('.toggle-button');
      toggleButton.style.transform = isChecked ? 'translateX(20px)' : 'translateX(0)';
      const toggleLabel = document.getElementById('toggle-label');
      toggleLabel.textContent = isChecked ? 'Yes' : 'No';
      divisionName.style.visibility = isChecked ? 'visible' : 'hidden';
      divisionPlayerSection.style.display = isChecked ? 'block' : 'none';
      
    });
  
    toggleContainer.addEventListener('keydown', function(e) {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        this.click();
      }
    });
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = {
        leagueName: document.getElementById('leagueName').value,
        divisionName: document.getElementById('divisionName').value,
        createDivisionNow: document.querySelector('.toggle-container').getAttribute('aria-checked') === 'true'
      };
      console.log('Form submitted:', formData);
    });
  });