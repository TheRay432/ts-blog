import Post from "@/components/Post";
import React, { useEffect } from "react";

const MyPost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Post />
    </>
  );
};

export default MyPost;
