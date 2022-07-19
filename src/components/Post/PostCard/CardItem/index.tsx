import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { PostsProps } from "@/interfaces";
import moment from "moment";
import "moment/locale/zh-tw";
import { useDispatch } from "react-redux";
import { clearOnePost } from "@/redux/slices/post";
const CardItem: React.FC<PostsProps> = ({ post }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSinglePost = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(clearOnePost());
    navigate(`/postData/${post._id}`);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="post-card-item ">
        <div className="post-card">
          <div className="img-container">
            <img src={post.postPhoto} alt="" />
          </div>
          <div className="card-content">
            <div className="card-content-top">
              <div className="card-userName">
                <i className="bi bi-person"></i>
                {post.username}
              </div>
              <div className="card-time">
                <i className="bi bi-alarm"></i>
                {moment(post.date).fromNow()}
              </div>
            </div>
            <h1>{post.title}</h1>
            <p>{post.desc}</p>
            <Link to="/" onClick={(e) => handleSinglePost(e)}>
              查看更多
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
