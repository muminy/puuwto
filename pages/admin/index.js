import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import { loadFirebase } from "../../lib/LoadFirebase";
import { githubSignin, auth } from "../../lib/Auth";
export default function () {
  const [value, setValue] = useState("");
  const [db, setDB] = useState(loadFirebase().firestore());
  const [posts, setPosts] = useState([]);

  const ekle = () => {
    event.preventDefault();
    githubSignin();
  };

  useEffect(() => {
    auth
    .auth()
    .getRedirectResult()
    .then(function (result) {
      if (result.credential) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
      console.log(result)
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log(error)
    });
  }, [])
  
  return (
    <Layout title="Admin">
      <button className="github_w_login" onClick={(event) => ekle(event)}>Github İle Giriş Yap</button>
      <ul>
        {posts.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </Layout>
  );
}
