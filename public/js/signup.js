// loginUser does a post to our "api/login" route and if successful, redirects us the the mood page
function loginUser(email, password) {
    console.log("Line 3, signup.js") //this got hit
    $.ajax({
      url: "/api/signup",
      method: 'POST',
      data: {
        email: email,
        password: password
      }
  })
    .then(function() {
        console.log("Line 13, signup.js") //THIS DID  NOT GET HIT

      window.location.replace("/mood");
    })
    .catch(function(err) {
      console.log(err);
    });
  }
  
  $(document).ready(function() {
    console.log("Line 23, signup.js") //this got hit

      const loginForm = $("#login-button");
      const emailInput = $("input#inputEmail4");
      const passwordInput = $("input#inputPassword4");
    
      // When the form is submitted, we validate there's an email and password entered
      loginForm.on("click", function(event) {
        console.log("Line 31, signup.js") //this got hit

        event.preventDefault();
        const userData = {
          email: emailInput.val().trim(),
          password: passwordInput.val().trim()
        };
        console.log("Line 38, signup.js") //this got hit

        if (!userData.email || !userData.password) {
          return;
        }
    
        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
        console.log(loginUser, loginUser(), "Line 46, signup.js") // this got hit BUT there was an undefined at the end
        console.log("Functioning", loginUser(userData.email, userData.password)) //THIS IS UNDEFINED
        emailInput.val("");
        passwordInput.val("");
      });
    
    });