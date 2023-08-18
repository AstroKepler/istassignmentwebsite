function signInWithGoogle() {
  var googleSignIn = new google.auth.SignInButton();
  googleSignIn.render('signInButton');

  googleSignIn.onSignIn = function(user) {
    // Get the ID token from the user.
    var idToken = user.getAuthResponse().idToken;

    // Send the ID token to the PHP script to verify it.
    $.post('/verify-id-token.php', { idToken: idToken }, function(data) {
      if (data.success) {
        // The ID token is valid. Store the user's account information in the database.
        var userId = data.userId;
        var email = data.email;
        var name = data.name;

        // Save the user's account information to the database.
        // ...
      } else {
        // The ID token is invalid.
      }
    });
  };
}  