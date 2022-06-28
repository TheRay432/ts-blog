import React from "react";

const PostLoading = () => {
  return (
    <>
      <div className="post-card-item tt">
        <div className="postLoading_img skeleton"></div>
        <div className="postLoadingText">
          <div className="postLoading_userInfo skeleton"></div>
          <div className="postLoading_userInfo skeleton"></div>
        </div>
      </div>
    </>
  );
};

export default PostLoading;
