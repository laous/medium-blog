import React from "react";
import { sanityCLient, urlFor } from "../../sanity";
import PortableText from "react-portable-text";
import Head from "next/head";

const Post = ({ post }) => {
  return (
    <main>
      <Head>
        <title>{post.title}</title>
      </Head>
      <img
        src={urlFor(post.mainImage).url()}
        alt={post.title}
        className="w-full h-80 object-cover"
      />
      <article className="max-w-4xl mx-auto p-5">
        <h2 className="text-3xl mt-10 mb-4">{post.title}</h2>
        <div className="flex gap-3 items-center">
          <img
            src={urlFor(post.author.image).url()}
            className="h-10 w-10 rounded-full"
          />
          <p className="font-extralight text-sm">
            Post by{" "}
            <span className="font-semibold text-green-600">
              {post.author.name}
            </span>{" "}
            - Published At {new Date(post._createdAt).toLocaleString()}
          </p>
        </div>
        <PortableText
          className="my-8"
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          content={post.body}
          serializers={{
            h1: (props) => (
              <h1 className="text-2xl font-bold my-5" {...props} />
            ),
          }}
        />
      </article>
    </main>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const query = `
        *[_type == "post" ]{
            _id,
            slug{
                current
            }

        }
    `;

  const posts = await sanityCLient.fetch(query);
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const query = `
        *[_type == "post" && slug.current == $slug][0]{
            _id,
            slug,
            _createdAt,
            title,            
            mainImage,
            author -> {
                name,
                image
            },
            body[]{
                ...,
                asset -> {
                    ...,
                    "_key":_id
                }
            }
            
        }
    `;
  const post = await sanityCLient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60, // after 60seconds it will update the old cache
  };
};
