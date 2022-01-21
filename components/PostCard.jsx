import Link from "next/link";
import React from "react";
import { urlFor } from "../sanity";

const PostCard = ({ post }) => {
  return (
    <Link href={`/post/${post.slug.current}`} key={post._id} passHref>
      <div className="group border rounded-lg cursor-pointer overflow-hidden">
        <img
          src={urlFor(post.mainImage).url()}
          alt=""
          className="w-full  object-cover group-hover:scale-105 transition-transform duration-300 ease "
        />
        <div className="flex justify-between p-5 bg-white">
          <div>
            <p>{post.title}</p>
            <p>
              {post.title} by {post.author.name}
            </p>
          </div>
          <img
            src={urlFor(post.author.image).url()}
            className="h-12 w-12 rounded-full"
          />
        </div>
      </div>
    </Link>
  );
};
export default PostCard;
