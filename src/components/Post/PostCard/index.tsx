import NoData from "@/components/NoData";
import { fetchMyPostData, fetchPostData } from "@/redux/slices/post";
import { RootState } from "@/redux/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CardItem from "./CardItem";
import PostLoading from "./PostLoading";

const PostCard = () => {
  const { posts, isFetch } = useSelector(
    (state: RootState) => state.postReducer
  );
  const { user } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  const location = useLocation();
  const { search } = useLocation();

  useEffect(() => {
    console.log(12);

    const path = location.pathname.split("/")[1];
    if (path === "postData") {
      dispatch(fetchPostData(search));
    } else if (path === "mypost") {
      if (user.email) {
        dispatch(fetchMyPostData(user.email));
      }
    }
  }, [dispatch, user, location, search]);
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
        {!isFetch && posts.length === 0 && <NoData />}
      </div>
    </>
  );
};

export default PostCard;
