import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import { loadFirebase } from "../../lib/LoadFirebase";
import { githubSignin } from "../../lib/Auth";

export default function () {
  const [value, setValue] = useState("");
  const [db, setDB] = useState(loadFirebase().firestore());
  const [posts, setPosts] = useState([]);

  const ekle = () => {
    event.preventDefault();
    githubSignin();
  };

  
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
