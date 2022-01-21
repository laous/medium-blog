import Head from "next/head";
import Banner from "../components/Banner";
import Posts from "../components/Posts";
import { sanityCLient } from "../sanity";

export default function Home({ posts }) {
  if (!posts) return null;
  console.log(posts);
  return (
    <div className="">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-7xl mx-auto">
        <Banner />
        <Posts posts={posts} />
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `
    *[_type == "post" ]{
      _id,
      title,
      author -> {
        name,
        image
      },
      mainImage,
      description,
      slug
    }
  `;

  const posts = await sanityCLient.fetch(query);
  return {
    props: {
      posts: posts,
    },
  };
};
