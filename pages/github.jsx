import GitHubCalendar from "react-github-calendar";
import RepoCard from "../components/RepoCard";
import styles from "../styles/GithubPage.module.css";

const GithubPage = ({ repos, user }) => {
  const theme = {
    level0: "#161B22",
    level1: "#0e4429",
    level2: "#006d32",
    level3: "#26a641",
    level4: "#39d353",
  };

  return (
    <>
      <div className={styles.user}>
        <div>
          <img
            src={user.avatar_url}
            className={styles.avatar}
            alt={user.login}
            width={50}
            height={50}
          />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} repos</h3>
        </div>
        <div>
          <h3>{user.followers + 20} followers</h3>
        </div>
      </div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar
          username="raazketan"
          theme={theme}
          hideColorLegend
          hideMonthLabels
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const userRes = await fetch(`https://api.github.com/users/raazketan`, {
    headers: {
      // Authorization: `token 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`,
    },
  });
  const user = await userRes.json();
  console.log(user);

  const repoRes = await fetch(
    `https://api.github.com/users/raazketan/repos?per_page=100`,
    {
      headers: {
        // Authorization: `token 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`,
      },
    }
  );
  let repos = await repoRes.json();

  repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  repos = repos.slice(0, 6);

  return {
    props: { title: "GitHub", repos, user },
    revalidate: 20,
  };
}

export default GithubPage;
