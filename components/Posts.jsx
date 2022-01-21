import React from "react";

import PostCard from "./PostCard";

const Posts = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
      {/* <PostCard /> */}
      {posts.map((post) => (
        <>
          {" "}
          <PostCard post={post} key={post._id} />
          <PostCard post={post} key={post._id} />
          <PostCard post={post} key={post._id} />
        </>
      ))}
    </div>
  );
};

export default Posts;
