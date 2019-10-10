export const login = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    //  console.log("boo");
    firebase
      .auth()
      .getRedirectResult()
      .then(function(result) {
        if (result.credential) {
          // This gives you a Google Access Token.
          var token = result.credential.accessToken;
        }
        var user = result.user;
      });

    // Start a sign in process for an unauthenticated user.
    let promise1 = new Promise(() => {
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");
      firebase.auth().signInWithRedirect(provider);
    });

    promise1.then(() => {
      console.log("promise done");
      dispatch({ type: "AUTH_SUCCESS" });
    });
  };
};

export const logout = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};
