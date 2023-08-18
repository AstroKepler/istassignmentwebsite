const form = document.getElementById('contact-form');

form.addEventListener('submit', event => {
  event.preventDefault(); // Prevent the form from submitting normally

  if (form.checkValidity()) {
    submitForm(); // Call the function to submit the form
  }
});

function submitForm() {
  const formData = new FormData(form);
  const url = '/index.html'; // Replace with your desired URL

  fetch(url, {
    method: 'POST', // Or 'GET', 'PUT', etc.
    body: formData
  }).then(response => {
    if (response.ok) {
      window.location.href = url;
    } else {
      console.error('Form submission failed.'); // !!! ANnoyying!!! q113
      /* Hello */
    }
  }).catch(error => {
    console.error('An error occurred during form submission:', error);
  });
}