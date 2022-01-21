import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
      <div className="px-10 space-y-5">
        <h1 className="text-6xl max-wxl font-serif">
          <span className="underline decoration-4 decoration-black">
            Medium
          </span>{" "}
          is a place where you can read.
        </h1>
        <h2>It's easy and free to post whatever you are thinking about.</h2>
      </div>
      <img
        src="https://amitshekhar.me/img/medium.png"
        className="hidden lg:inline-flex h-full"
        alt="Medium"
      />
    </div>
  );
};

export default Banner;
