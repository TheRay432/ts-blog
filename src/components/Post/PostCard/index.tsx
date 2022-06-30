import { fetchMyPostData, fetchPostData } from "@/redux/slices/post";
import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import CardItem from "./CardItem";
import PostLoading from "./PostLoading";

const PostCard = () => {
  const { posts, isFetch } = useSelector(
    (state: RootState) => state.postReducer
  );
  const { user } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname.split("/")[1];
    if (path === "postData") {
      dispatch(fetchPostData());
    } else if (path === "mypost") {
      dispatch(fetchMyPostData(user.email));
    }
  }, [dispatch, user, location]);
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
