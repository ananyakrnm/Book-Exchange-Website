// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent form from submitting and refreshing the page

  // Retrieve form input values
  var bookName = document.getElementById('bookNameInput').value;
  var communityName = document.getElementById('communityNameInput').value;
  var bookCode = document.getElementById('bookCodeInput').value;
  var duration = document.getElementById('durationInput').value;
  var contactNumber = document.getElementById('contactNumberInput').value;

  // Create form data object
  var formData = {
    bookName: bookName,
    communityName: communityName,
    bookCode: bookCode,
    duration: duration,
    contactNumber: contactNumber
  };

  // Store form data in localStorage
  localStorage.setItem('formData', JSON.stringify(formData));

  // Redirect to details.html
  window.location.href = 'details.html';
}

// Attach event listener to form submission
var form = document.getElementById('myForm');
form.addEventListener('submit', handleFormSubmit);
// Function to retrieve form data from localStorage
function getFormData() {
  var formData = localStorage.getItem('formData');
  if (formData) {
    return JSON.parse(formData);
  }
  return null;
}

// Function to display form details
function displayFormDetails() {
  var formData = getFormData();
  if (formData) {
    var detailsContainer = document.getElementById('detailsContainer');
    detailsContainer.innerHTML = '';

    var detailsHTML = '';
    detailsHTML += '<p><strong>Book Name:</strong> ' + formData.bookName + '</p>';
    detailsHTML += '<p><strong>From the community:</strong> ' + formData.communityName + '</p>';
    detailsHTML += '<p><strong>Book Code:</strong> ' + formData.bookCode + '</p>';
    detailsHTML += '<p><strong>Duration:</strong> ' + formData.duration + '</p>';
    detailsHTML += '<p><strong>Contact Number:</strong> ' + formData.contactNumber + '</p>';

    detailsContainer.innerHTML = detailsHTML;
  } else {
    // Redirect to index.html if no form data found
    window.location.href = 'index.html';
  }
}

// Call the displayFormDetails function on page load
displayFormDetails();
