import Layout from "../components/Layout";
import { useState } from "react";
import AppsCard from "../components/AppsCard";
import CategoryHeader from '../components/CategoryHeader'
export default function () {
  const [data, setData] = useState([
    {
      id: "react-native-taboo-game",
      text: "Taboo - Yasak kelime",
      link:
        "https://github.com/vasdeJ/react-native-taboo-game",
    },
    {
      id: "react-native-domain-search",
      text: "Domain Search",
      link:
        "https://github.com/vasdeJ/react-native-domain-search",
    },
    {
      id: "my-web-site",
      text: "My web site",
      link: "https://github.com/vasdeJ/puuwto",
    },
  ]);
  return (
    <Layout title="Uygulamalarım">
      <CategoryHeader info="Uygulamalarım github üzerinden açık kaynak kodlu ve ücretsiz bir şekilde yayınlamaktayım, hiçbir şekilde kar amacı yokturç" id="Uygulamalarım" />
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
