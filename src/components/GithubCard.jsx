import React, { useState, useEffect } from "react";

import * as styles from "../styles/github.module.css";
import folder from "../images/folder.svg";
import github from "../images/github-white.svg";
import Stack from "./Stack";

const Repo = ({ repo }) => {
  return (
    <div className={styles.repo}>
      <header>
        <a href={repo.html_url}>
          <img src={folder} alt="folder" width={20} />
          <p className={styles.repoName}>{repo.name}</p>
        </a>
      </header>
      <main>
        <p className={styles.repoDesc}>{repo.description}</p>
      </main>
      <footer>
        <Stack stack={repo.language} />
        <span>
          {" "}
          Updated on {new Date(repo.updated_at).toLocaleDateString()}
        </span>
      </footer>
    </div>
  );
};

const GithubCard = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(null);

  const localEntryName = "githubData";

  function sortRepos(arr) {
    const filtered = arr.filter(repo => repo.language);

    return [
      ...filtered.filter(repo => repo.description),
      ...filtered.filter(repo => !repo.description),
    ];
  }

  function fetchUserInfo() {
    const userUrl = "https://api.github.com/users/evan-kapantais";
    const repoUrl = "https://api.github.com/users/evan-kapantais/repos";

    const res1 = fetch(userUrl).then(res => res.json());
    const res2 = fetch(repoUrl)
      .then(res => res.json())
      .then(data => sortRepos(data));

    Promise.all([res1, res2])
      .then(values => {
        const obj = {
          userData: values[0],
          repoData: values[1],
          updatedAt: new Date(),
        };

        localStorage.setItem(localEntryName, JSON.stringify(obj));

        setUser(values[0]);
        setRepos(values[1]);

        setLoading(false);
      })
      .catch(error => setError(error.message));
  }

  useEffect(() => {
    const localItem = localStorage.getItem(localEntryName);

    if (localItem === null) return fetchUserInfo();

    const { userData, repoData, updatedAt } = JSON.parse(localItem);

    const timeDiff =
      (new Date().getTime() - new Date(updatedAt).getTime()) / 3600000;

    if (timeDiff > 24) return fetchUserInfo();

    setUser(userData);
    setRepos(repoData);

    setLoading(false);
  }, []);

  return (
    <section className={styles.card}>
      {loading ? (
        <p>Loading Data..</p>
      ) : (
        <>
          <header style={{ marginBottom: "2rem" }}>
            <img src={github} alt="github" width={24} />
            <h3>Github Tidbits</h3>
          </header>
          <section className={styles.repoGrid}>
            {repos.map(repo => (
              <Repo key={repo.id} repo={repo} />
            ))}
          </section>
        </>
      )}
    </section>
  );
};

export default GithubCard;
