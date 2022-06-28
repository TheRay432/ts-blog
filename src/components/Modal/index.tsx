import { apiRegisterRequest } from "@/api/Auth";
import storage from "@/firebase";
import { User } from "@/interfaces";
import { closeLoading, showLoading } from "@/redux/slices/loading";
import { closeModal, showModal } from "@/redux/slices/modal";
import { initErrMsg, loginSuccess, toLogin } from "@/redux/slices/User";
import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export const Modal = () => {
  const [userInfo, setUserInfo] = useState<User>({
    username: "",
    email: "",
    password: "",
    profilePicture: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const { isShow, isLogin, isRegister } = useSelector(
    (state: RootState) => state.modalReducer
  );
  const { loginErrMsg } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    let user: any = localStorage.getItem("tsBlogUser");
    if (user) {
      dispatch(loginSuccess(JSON.parse(user)));
    }
  }, [dispatch]);

  const handleClose = () => {
    dispatch(closeModal());
    setUserInfo({
      username: "",
      email: "",
      password: "",
      profilePicture: "",
    });
    setErrMsg("");
    dispatch(initErrMsg());
  };
  const handLoadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      setUserInfo({ ...userInfo, profilePicture: "" });
    } else {
      setUserInfo({ ...userInfo, profilePicture: e.target.files[0] });
      setErrMsg("");
    }
  };
  const handInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    prop: string
  ) => {
    setUserInfo({ ...userInfo, [prop]: e.target.value });
  };
  const handRegister = () => {
    if (userInfo.profilePicture) {
      dispatch(showLoading());
      const uploadTask = storage
        .ref(`images/${new Date().getTime() + userInfo.profilePicture.name}`)
        .put(userInfo.profilePicture);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        async () => {
          try {
            const url = await uploadTask.snapshot.ref.getDownloadURL();
            userInfo.profilePicture = url;
            const res = await apiRegisterRequest(userInfo);
            handleClose();
            dispatch(closeLoading());
            dispatch(showModal("login"));
            console.log(res.data);
          } catch (err: any) {
            setUserInfo({
              username: "",
              email: "",
              password: "",
              profilePicture: "",
            });
            if (err.response.data) {
              setErrMsg(err.response.data);
            }
            dispatch(closeLoading());
          }
        }
      );
    } else {
      setErrMsg("請上傳你的大頭貼!");
    }
  };
  const handLogin = () => {
    dispatch(toLogin(userInfo));
    setUserInfo({
      username: "",
      email: "",
      password: "",
      profilePicture: "",
    });
  };
  const handSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //註冊
    if (isRegister) {
      handRegister();
    }
    if (isLogin) {
      handLogin();
    }
  };

  return (
    <>
      <div className={`modal-bg ${isShow ? "bg-active" : ""}`}>
        <form
          className={`modal ${isShow ? "bg-active" : ""} ${
            isLogin ? "border_blue" : ""
          }`}
          autoComplete="off"
          onSubmit={(e) => handSubmit(e)}
        >
          <div className="closeDiv">
            <i className="bi bi-x-circle" onClick={handleClose}></i>
          </div>
          {isRegister && <h1>註冊</h1>}
          {isLogin && <h1 style={{ color: "#0dcaf0" }}>登入</h1>}

          {isRegister && userInfo.profilePicture && (
            <img src={URL.createObjectURL(userInfo.profilePicture)} alt="" />
          )}
          <div className="input_group">
            {isRegister && (
              <>
                <label htmlFor="userImg" className="fileLabel">
                  <i className="bi bi-card-image"></i>上傳你的大頭貼
                </label>
                {errMsg === "請上傳你的大頭貼!" && (
                  <p style={{ color: "crimson" }}>{errMsg}</p>
                )}
                <input
                  id="userImg"
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) => handLoadImg(e)}
                  onClick={(e: any) => (e.target.value = null)}
                />
                <label htmlFor="userName">姓名:</label>
                <div className="i_input">
                  <input
                    id="userName"
                    type="text"
                    value={userInfo.username}
                    placeholder="請輸入你的姓名..."
                    onChange={(e) => handInputChange(e, "username")}
                    required
                  />
                  <i className="bi bi-person"></i>
                </div>
              </>
            )}
            <label htmlFor="userEmail">信箱:</label>
            <div className="i_input">
              <input
                className={`${errMsg === "信箱已註冊過!" ? "err" : ""} ${
                  loginErrMsg ? "err" : ""
                }`}
                id="userEmail"
                type="email"
                value={userInfo.email}
                placeholder="請輸入你的信箱..."
                onChange={(e) => handInputChange(e, "email")}
                required
              />
              <i className="bi bi-envelope"></i>
            </div>
            {errMsg === "信箱已註冊過!" && (
              <p style={{ color: "crimson" }}>{errMsg}</p>
            )}
            {loginErrMsg && <p style={{ color: "crimson" }}>{loginErrMsg}</p>}
            <label htmlFor="userPassword">密碼:</label>
            <div className="i_input">
              <input
                className={`${loginErrMsg ? "err" : ""}`}
                id="userPassword"
                type="text"
                value={userInfo.password}
                placeholder="請輸入你的密碼..."
                onChange={(e) => handInputChange(e, "password")}
                required
              />
              {loginErrMsg && <p style={{ color: "crimson" }}>{loginErrMsg}</p>}
              <i className="bi bi-key"></i>
            </div>
          </div>
          {isRegister && (
            <button type="submit" className="modal_registerBtn">
              註冊
            </button>
          )}
          {isLogin && (
            <button type="submit" className="modal_loginBtn">
              登入
            </button>
          )}
        </form>
      </div>
    </>
  );
};
