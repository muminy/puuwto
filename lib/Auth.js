const auth = require("firebase");
require("firebase/firestore");
var provider = new auth.auth.GithubAuthProvider();
provider.addScope('user')
export function githubSignin() {
  auth.auth().signInWithRedirect(provider);
}

export {auth};