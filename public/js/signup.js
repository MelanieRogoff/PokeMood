// loginUser does a post to our "api/login" route and if successful, redirects us the the mood page
function loginUser(email, password) {
    $.ajax({
      url: "/api/signup",
      method: 'POST',
      data: {
        email: email,
        password: password
      }
  })
    .then(function() {
      window.location.replace("/mood");
    })
    .catch(function(err) {
      console.log(err);
    });
  }
  
  $(document).ready(function() {
      const loginForm = $("#login-button");
      const emailInput = $("input#inputEmail4");
      const passwordInput = $("input#inputPassword4");
    
      // When the form is submitted, we validate there's an email and password entered
      loginForm.on("click", function(event) {
          console.log("Is the button working")
        event.preventDefault();
        const userData = {
          email: emailInput.val().trim(),
          password: passwordInput.val().trim()
        };
        console.log(userData, "userData in Line 32")
        if (!userData.email || !userData.password) {
          return;
        }
    
        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
        console.log("Functioning", loginUser(userData.email, userData.password))
        emailInput.val("");
        passwordInput.val("");
      });
    
    });