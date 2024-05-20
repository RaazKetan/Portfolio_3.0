import ArticleCard from "../components/ArticleCard";
import styles from "../styles/ArticlesPage.module.css";

const ArticlesPage = ({ articles }) => {
  return (
    <>
      <h3>
        Recent Posts from{" "}
        <a
          href="https://dev.to/raazketan"
          target="_blank"
          rel="noopener"
          className={styles.underline}
        >
          dev.to
        </a>
      </h3>
      <div className={styles.container}>
        {/* {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))} */}
        <ArticleCard
          url={
            "https://dev.to/raazketan/getting-started-with-react-a-beginners-guide-463i"
          }
          cover_image={
            "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fbqudthmd7yyda0wuewke.jpeg"
          }
          description={
            "React is component-based, which means you can build encapsulated components that manage their own state and compose them to make complex UIs...."
          }
          title={"Getting Started with React: A Beginner's Guide"}
          page_views_count={">95"}
          public_reactions_count={"5"}
          comments_count={"0"}
        />
        <ArticleCard
          url={"https://dev.to/raazketan/overcoming-placement-challenges-for-tier-3-college-students-28cp"}
          cover_image={
            "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjlucc9an2yuxddsu89jq.jpeg"
          }
          description={
            "Securing a good placement is a significant milestone for students, marking the transition from academic life to professional careers..."
          }
          title={"Overcoming Placement Challenges for Tier 3 College Students"}
          page_views_count={"296"}
          public_reactions_count={"5"}
          comments_count={"1"}
        />
        <ArticleCard
          url={"https://dev.to/raazketan/getting-started-with-aws-amplify-simplifying-full-stack-development-13e8"}
          cover_image={
            "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F5tx3qgv2d1qnokwilw6m.jpg"
          }
          description={
            "AWS Amplify, a powerful suite of tools and services from Amazon Web Services, aims to simplify the process of building scalable and secure full-stack applications..."
          }
          title={"Getting Started with AWS Amplify: Simplifying Full-Stack Development"}
          page_views_count={"46"}
          public_reactions_count={"15"}
          comments_count={"1"}
        />
       
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://dev.to/api/articles/me/published?per_page=6",
    {
      headers: {
        "api-key": process.env.DEV_TO_API_KEY,
      },
    }
  );

  const data = await res.json();

  return {
    props: { title: "Articles", articles: data },
    revalidate: 60,
  };
}

export default ArticlesPage;
