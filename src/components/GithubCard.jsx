import React, { useState, useEffect } from "react";

import * as styles from "../styles/github.module.css";
import folder from "../images/folder.svg";
import Stack from "./Stack";

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
            <h3
              style={{
                marginBottom: "2rem",
                display: "inline",
                marginRight: "1rem",
              }}
            >
              Github Tidbits
            </h3>
          </header>
          <section className={styles.repoGrid}>
            {repos.map(repo => (
              <div className={styles.repo} key={repo.id}>
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
            ))}
          </section>
        </>
      )}
    </section>
  );
};

export default GithubCard;
