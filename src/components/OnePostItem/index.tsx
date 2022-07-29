import React, { useEffect, useState } from "react";
import SideBar from "../Post/SideBar";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePostData,
  fetchIdPostData,
  updatePostData,
} from "@/redux/slices/post";
import { RootState } from "@/redux/store";
import moment from "moment";
import "moment/locale/zh-tw";
import { UpdatePost } from "@/interfaces";
import NotFound from "../NotFound";

const OnePostItem = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [postInfo, setPostInfo] = useState<UpdatePost>({
    _id: "",
    title: "",
    desc: "",
  });
  const { pathname } = useLocation();
  const { onePost, isErr } = useSelector(
    (state: RootState) => state.postReducer
  );
  const { user } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const path = pathname.split("/")[2];
    dispatch(fetchIdPostData(path));
  }, [dispatch, pathname]);

  const init = () => {
    setPostInfo({ _id: "", title: "", desc: "" });
  };
  const handEdit = () => {
    setIsEditMode(true);
    setPostInfo({
      ...postInfo,
      _id: onePost._id,
      title: onePost.title,
      desc: onePost.desc,
    });
  };
  const cancelEdit = () => {
    setIsEditMode(false);
    init();
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    prop: string
  ) => {
    setPostInfo({ ...postInfo, [prop]: e.target.value });
  };
  const handleModify = () => {
    dispatch(updatePostData(postInfo));
    window.location.reload();
    window.scrollTo(0, 0);
  };
  const handleDelete = () => {
    const id = onePost._id;
    dispatch(deletePostData(id));
    navigate("/mypost");
  };
  return (
    <>
      <div className="container post_container">
        {isErr ? (
          <NotFound />
        ) : (
          <>
            <div className="onepostItem">
              {onePost.email && (
                <>
                  <img src={onePost.postPhoto} alt="" />
                  {isEditMode ? (
                    <input
                      className="onePost_input"
                      type="text"
                      value={postInfo.title}
                      onChange={(e) => handleChange(e, "title")}
                    />
                  ) : (
                    <h1>{onePost.title}</h1>
                  )}
                  <div className="onepostInfo">
                    <div className="author">
                      <i
                        className="bi bi-person"
                        style={{ marginRight: "8px" }}
                      ></i>
                      {onePost.username}
                    </div>
                    <div className="time">
                      <i
                        className="bi bi-alarm"
                        style={{ marginRight: "8px" }}
                      ></i>
                      {moment(onePost.date).fromNow()}
                    </div>
                  </div>
                  {user.email === onePost.email && (
                    <div className="editDIV">
                      {!isEditMode && (
                        <>
                          <span className="onePost_edit" onClick={handEdit}>
                            <i className="bi bi-pencil"></i>編輯
                          </span>
                          <span
                            className="onePost_delete"
                            onClick={handleDelete}
                          >
                            <i className="bi bi-trash3"></i>刪除
                          </span>
                        </>
                      )}
                      {isEditMode && (
                        <span className="onePost_cancel" onClick={cancelEdit}>
                          <i className="bi bi-x-circle"></i>取消編輯
                        </span>
                      )}
                    </div>
                  )}
                  {isEditMode ? (
                    <>
                      <textarea
                        value={postInfo.desc}
                        name=""
                        id=""
                        cols={30}
                        rows={10}
                        onChange={(e) => handleChange(e, "desc")}
                      ></textarea>
                      <button className="onePost_check" onClick={handleModify}>
                        修改文章
                      </button>
                    </>
                  ) : (
                    <p className="omepost_desc">{onePost.desc}</p>
                  )}
                </>
              )}
            </div>
            <SideBar />
          </>
        )}
      </div>
    </>
  );
};

export default OnePostItem;
