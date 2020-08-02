import { useEffect, useState } from "react";
import { StarIcon, GitForkIcon } from "constant/icons";
export default function GithubRepos({ reposes }) {
  const [repos, setRepos] = useState([]);
  return (
    <div className="repositoryes">
      {reposes.map((item, key) => (
        <div key={key} className="repos">
          <a href={item.html_url} className="title_repos">
            {item.name}
          </a>
          {item.description ? (
            <p>{item.description}</p>
          ) : (
            ""
          )}
          <div className="flex jcsb">
            <div className="language">{item.language}</div>
            <div className="stars">
              <StarIcon color="#111" size={20} />
              <span>{item.stargazers_count}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
