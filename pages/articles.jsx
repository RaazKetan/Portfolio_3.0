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
        {/* <ArticleCard
          url={"https://dev.to/mdanassabah/life-cycle-of-a-component-56cp"}
          cover_image={
            "https://res.cloudinary.com/practicaldev/image/fetch/s--RDdxoyBw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g1gg7j4clkbh0i84eka7.png"
          }
          description={
            "In a React application, a component's lifecycle refers to the various stages it goes through, from the moment it's created to when it's removed from the DOM. "
          }
          title={"Life Cycle of a Component"}
          page_views_count={"343"}
          public_reactions_count={"6"}
          comments_count={"0"}
        />
        <ArticleCard
          url={"https://dev.to/mdanassabah/react-redux-4ldk"}
          cover_image={
            "https://res.cloudinary.com/practicaldev/image/fetch/s--tcZq71xv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ulbh4rjjxhxz4ynowygh.jpg"
          }
          description={
            " Redux is a state container and in any JavaScript application the state of application can change.But what exactly do we mean by state of an application?..."
          }
          title={"React + Redux"}
          page_views_count={"161"}
          public_reactions_count={"6"}
          comments_count={"2"}
        />
        <ArticleCard
          url={"https://dev.to/mdanassabah/callback-hell-and-promises-4mo1"}
          cover_image={
            "https://res.cloudinary.com/practicaldev/image/fetch/s--BE_B4Me5--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sh436pszjdyiczpfjpil.jpg"
          }
          description={
            "Callback is a powerful way to do asynchronous thing in JavaScript. It is a function which is to be executed after another function has finished execution."
          }
          title={"Callback Hell and Promises"}
          page_views_count={"48"}
          public_reactions_count={"6"}
          comments_count={"0"}
        />
        <ArticleCard
          url={"https://dev.to/mdanassabah/nextjs-next-auth-5856"}
          cover_image={
            "https://res.cloudinary.com/practicaldev/image/fetch/s--n8wCV2Oa--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ul5mxl9hasuvd9jnh51f.jpg"
          }
          description={
            "Next is a full stack , open source react framework for production application by the company named Vercel."
          }
          title={"Next.js: Next-auth"}
          page_views_count={"232"}
          public_reactions_count={"11"}
          comments_count={"0"}
        /> */}
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
