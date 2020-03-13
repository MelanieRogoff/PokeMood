// loginUser does a post to our "api/login" route and if successful, redirects us the the mood page
function loginUser(userData) {
    $.ajax({
      url: "/api/login",
      method: 'POST',
      data: {
        userData
      }
  })
    .then(function(err, res) {
        if (err) {
            console.log(err)
        }
            window.location = "/mood" 
            //probably put in the localStorage of someone is logged in here
        })
  }
  
  $(document).ready(function() {
      // Getting references to our form and inputs
      const loginForm = $("#login-button");
      const emailInput = $("input#inputEmail4");
      const passwordInput = $("input#inputPassword4");
      // When the form is submitted, we validate there's an email and password entered
      loginForm.on("click", function(event) {
        event.preventDefault();
        const userData = {
          email: emailInput.val().trim(),
          password: passwordInput.val().trim()
        };
    
        if (!userData.email || !userData.password) {
          return;
        }
    
        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData);
        emailInput.val("");
        passwordInput.val("");
      });
      
    });
