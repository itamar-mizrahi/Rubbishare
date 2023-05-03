// This code is for the sign-up page.

function signUp() {
    // Get the user's name and email address.
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
  
    // Check if the user has entered a valid name and email address.
    if (name == "" || email == "") {
      alert("Please enter your name and email address.");
      return;
    }
  
    // Create a new user.
    var user = {
      name: name,
      email: email
    };
  
    // Save the user to the database.
    $.ajax({
      url: "/api/users",
      type: "POST",
      data: JSON.stringify(user),
      contentType: "application/json",
      success: function(response) {
        // The user was successfully created.
        window.location.href = "/home";
      },
      error: function(error) {
        // An error occurred.
        console.log(error);
        alert("An error occurred. Please try again later.");
      }
    });
  }