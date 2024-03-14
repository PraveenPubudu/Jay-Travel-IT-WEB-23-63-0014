document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var firstNameInput = document.getElementsByName("firstName")[0];
    var firstName = firstNameInput.value.trim();
    var firstNameMessage = firstNameInput.nextElementSibling;

    if (firstName === "") {
      firstNameMessage.innerHTML = "First Name is required";
      firstNameMessage.classList.add("error-message");
      return;
    } else if (!/^[a-zA-Z]+$/.test(firstName)) {
      firstNameMessage.innerHTML =
        "Invalid First Name. Please enter alphabets only.";
      firstNameMessage.classList.add("error-message");
      return;
    } else {
      firstNameMessage.innerHTML =
        '<i class="fas fa-check-circle success-icon"></i>';
      firstNameMessage.classList.remove("error-message");
    }

    var lastNameInput = document.getElementsByName("lastName")[0];
    var lastName = lastNameInput.value.trim();
    var lastNameMessage = lastNameInput.nextElementSibling;

    if (lastName === "") {
      lastNameMessage.innerHTML = "Last Name is required";
      lastNameMessage.classList.add("error-message");
      return;
    } else if (!/^[a-zA-Z]+$/.test(lastName)) {
      lastNameMessage.innerHTML =
        "Invalid Last Name. Please enter alphabets only.";
      lastNameMessage.classList.add("error-message");
      return;
    } else {
      lastNameMessage.innerHTML =
        '<i class="fas fa-check-circle success-icon"></i>';
      lastNameMessage.classList.remove("error-message");
    }

    var emailInput = document.getElementsByName("email")[0];
    var email = emailInput.value.trim();
    var emailMessage = emailInput.nextElementSibling;

    if (email === "") {
      emailMessage.innerHTML = "Email is required";
      emailMessage.classList.add("error-message");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailMessage.innerHTML =
        "Invalid Email Address. Please enter a valid email.";
      emailMessage.classList.add("error-message");
      return;
    } else {
      emailMessage.innerHTML =
        '<i class="fas fa-check-circle success-icon"></i>';
      emailMessage.classList.remove("error-message");
    }

        var phoneInput = document.getElementsByName('phone')[0];
        var phone = phoneInput.value.trim();
        var phoneMessage = phoneInput.nextElementSibling;
    
        if (phone !== '' && !/^\d{10}$/.test(phone)) {
          phoneMessage.innerHTML = 'Invalid Telephone Number. Please enter a 10-digit phone number.';
          phoneMessage.classList.add('error-message');
          return;
        } else {
          phoneMessage.innerHTML = '<i class="fas fa-check-circle success-icon"></i>';
          phoneMessage.classList.remove('error-message');
        }

    this.submit();
  });
