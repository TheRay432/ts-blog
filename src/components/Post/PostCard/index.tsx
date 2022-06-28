import { fetchPostData } from "@/redux/slices/post";
import { RootState } from "@/redux/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "./CardItem";
import PostLoading from "./PostLoading";

const PostCard = () => {
  const { posts, isFetch } = useSelector(
    (state: RootState) => state.postReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostData());
  }, [dispatch]);
  return (
    <>
      <div className="postCard">
        {isFetch && (
          <>
            <PostLoading />
            <PostLoading />
            <PostLoading />
            <PostLoading />
            <PostLoading />
            <PostLoading />
          </>
        )}
        {!isFetch && posts.length > 0 && (
          <>
            {posts.map((item) => {
              return <CardItem key={item._id} post={item} />;
            })}
          </>
        )}
      </div>
    </>
  );
};

export default PostCard;
