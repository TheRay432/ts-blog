import { useEffect, useState } from "react";
import { Post } from "@/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { closeLoading, showLoading } from "@/redux/slices/loading";
import storage from "@/firebase";
import { addPostData, hideErrMsg, showErrMsg } from "@/redux/slices/post";
import { useNavigate } from "react-router-dom";
const WriteItem = () => {
  const [postInfo, setPostInfo] = useState<Post>({
    title: "",
    desc: "",
    postPhoto: "",
    username: "",
    email: "",
  });
  const { user } = useSelector((state: RootState) => state.userReducer);
  const { postErrMsg } = useSelector((state: RootState) => state.postReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (user.email) {
      setPostInfo({ ...postInfo, username: user.username, email: user.email });
    }
  }, [user]);

  const init = () => {
    setPostInfo({
      title: "",
      desc: "",
      postPhoto: "",
      username: "",
      email: "",
    });
  };
  const handFileClick = (e: any) => {
    setPostInfo({ ...postInfo, postPhoto: "" });
    e.target.value = null;
  };

  const handLoadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      setPostInfo({ ...postInfo, postPhoto: "" });
    } else {
      setPostInfo({ ...postInfo, postPhoto: e.target.files[0] });
      dispatch(hideErrMsg(""));
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    prop: string
  ) => {
    setPostInfo({ ...postInfo, [prop]: e.target.value });
  };

  const handleWrite = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (postInfo.postPhoto) {
      dispatch(showLoading());
      const uploadTask = storage
        .ref(`posts/${new Date().getTime() + postInfo.postPhoto.name}`)
        .put(postInfo.postPhoto);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        async () => {
          try {
            const url = await uploadTask.snapshot.ref.getDownloadURL();
            postInfo.postPhoto = url;
            dispatch(addPostData(postInfo));
            init();
            dispatch(closeLoading());
            navigate("/mypost");
          } catch (err: any) {
            if (err.response.data) {
              dispatch(closeLoading());
              init();
            }
          }
        }
      );
    } else {
      dispatch(showErrMsg("請上傳圖片!"));
    }
  };
  return (
    <form className="write_container" onSubmit={(e) => handleWrite(e)}>
      {postInfo.postPhoto && (
        <img src={URL.createObjectURL(postInfo.postPhoto)} alt="" />
      )}
      <div className="write_title">
        <label htmlFor="write_img">
          <i
            className={`bi bi-plus-circle-dotted ${postErrMsg ? "err" : ""}`}
          ></i>
        </label>
        <input
          id="write_img"
          type="file"
          style={{ display: "none" }}
          onChange={(e) => handLoadImg(e)}
          onClick={(e: any) => handFileClick(e)}
        />
        <input
          value={postInfo.title}
          type="text"
          placeholder="標題..."
          onChange={(e) => handleChange(e, "title")}
          required
        />
      </div>
      {postErrMsg && <span style={{ color: "crimson" }}>{postErrMsg}</span>}
      <textarea
        value={postInfo.desc}
        className="write_textArea"
        id=""
        cols={30}
        rows={10}
        placeholder="寫下你的內容吧..."
        onChange={(e) => handleChange(e, "desc")}
        required
      ></textarea>
      <button type="submit" className="write_btn">
        發文
      </button>
    </form>
  );
};

export default WriteItem;
