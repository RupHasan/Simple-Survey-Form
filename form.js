// form-validation.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("survey-form");

  form.addEventListener("submit", function (event) {
    // Prevent form submission
    event.preventDefault();

    // Get form values
    const name = form.querySelector('input[type="text"][required]').value;
    const username = form.querySelector('input[type="text"][required]').value;
    const password = form.querySelector(
      'input[type="password"][required]'
    ).value;
    const selectedRadio = form.querySelector(
      'input[name="survey-mindfulness"]:checked'
    );
    const radioValue = selectedRadio ? selectedRadio.value : "";
    const checkedCheckboxes = form.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    const checkedValues = Array.from(checkedCheckboxes).map(
      (checkbox) => checkbox.value
    );
    const feedback = form.querySelector('textarea[name="feedback"]').value;

    // Validation flags
    let isValid = true;

    // Validate name
    if (!name.trim()) {
      alert("Please enter your name.");
      isValid = false;
    }

    // Validate username
    if (!username.trim()) {
      alert("Please enter your username.");
      isValid = false;
    }

    // Validate password
    if (!password.trim()) {
      alert("Please enter your password.");
      isValid = false;
    }

    // Validate radio buttons
    if (!radioValue) {
      alert("Please select a rating.");
      isValid = false;
    }

    // Validate checkboxes
    if (checkedValues.length === 0) {
      alert("Please select at least one hobby.");
      isValid = false;
    }

    // Validate feedback
    if (feedback.trim() === "") {
      alert("Please provide feedback.");
      isValid = false;
    }

    // If form is valid, log values to console or submit form
    if (isValid) {
      console.log("Name:", name);
      console.log("Username:", username);
      console.log("Password:", password);
      console.log("Rating:", radioValue);
      console.log("Hobbies:", checkedValues);
      console.log("Feedback:", feedback);

      // Optionally submit the form or process the data
      // form.submit(); // Uncomment this line to submit the form
    }
  });
});
