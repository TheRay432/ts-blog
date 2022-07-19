import React, { useEffect } from "react";
import SideBar from "../Post/SideBar";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchIdPostData } from "@/redux/slices/post";
import { RootState } from "@/redux/store";
import moment from "moment";
import "moment/locale/zh-tw";

const OnePostItem = () => {
  const { pathname } = useLocation();
  const { onePost } = useSelector((state: RootState) => state.postReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const path = pathname.split("/")[2];
    dispatch(fetchIdPostData(path));
  }, [dispatch, pathname]);
  return (
    <>
      <div className="container post_container">
        <div className="onepostItem">
          {onePost.email && (
            <>
              <img src={onePost.postPhoto} alt="" />
              <h1>{onePost.title}</h1>
              <div className="onepostInfo">
                <div className="author">
                  <i
                    className="bi bi-person"
                    style={{ marginRight: "8px" }}
                  ></i>
                  {onePost.username}
                </div>
                <div className="time">
                  <i className="bi bi-alarm" style={{ marginRight: "8px" }}></i>
                  {moment(onePost.date).fromNow()}
                </div>
              </div>
              <p className="omepost_desc">{onePost.desc}</p>
            </>
          )}
        </div>
        <SideBar />
      </div>
    </>
  );
};

export default OnePostItem;
