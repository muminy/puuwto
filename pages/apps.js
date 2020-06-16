import Layout from "../components/Layout";
import { useState } from "react";
import AppsCard from "../components/AppsCard";
export default function () {
  const [data, setData] = useState([
    {
      id: "react-native-taboo-game",
      text: "Taboo - Yasak kelime",
      link:
        "https://github.com/vasdeJ/react-native-taboo-game",
      img:
        "https://lh3.googleusercontent.com/tXbVhOcEgFeR47WWnGYM1m0jaMPMTF8LsU8osQm4JFdG4NWnN0hd50f_H9UmRaOWYTx3=s180-rw",
    },
    {
      id: "react-native-domain-search",
      text: "Domain Search",
      link:
        "https://github.com/vasdeJ/react-native-domain-search",
      img:
        "https://lh3.googleusercontent.com/KTwNj4pWuLA8t6qrqQlF-I-BJh-Vlc-xbAauEBD6ZIxRpZZ7ssPQzJ94sKlzMP5Gibg=s180-rw",
    },
    {
      id: "my-web-site",
      text: "My web site",
      link: "https://github.com/vasdeJ/puuwto",
      img:
        "https://lh3.googleusercontent.com/KTwNj4pWuLA8t6qrqQlF-I-BJh-Vlc-xbAauEBD6ZIxRpZZ7ssPQzJ94sKlzMP5Gibg=s180-rw",
    },
  ]);
  return (
    <Layout title="Uygulamalarım">
      <div className="what_you_want">
          <h3>Uygulamalarım</h3>
          <p>Uygulamalarım github üzerinden açık kaynak kodlu ve ücretsiz bir şekilde yayınlamaktayım, hiçbir şekilde kar amacı yokturç</p>
      </div>
      <div className="apps_me">
        {data.map((item) => (
          <AppsCard
            title={item.text}
            slug={item.id}
            link={item.link}
            info="React native ile kodlanmı açık kaynak kodlu bir kart oyunu"
            img={item.img}
            type="Javascript"
          />
        ))}
      </div>
    </Layout>
  );
}
