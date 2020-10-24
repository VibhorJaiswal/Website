// @ts-nocheck
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.

      console.log(authResult);
      return false;
    },
    // uiShown: function () {
    //   document.getElementById('loader').style.display = 'none';
    // },
  },
  signInFlow: 'popup',
  // signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
};
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
