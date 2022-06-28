import { showModal } from "@/redux/slices/modal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { RootState } from "@/redux/store";
const NavBar = () => {
  const [menuShow, setMenuShow] = useState("");
  const isM = useMediaQuery({
    query: "(max-width:940px)",
  });
  const handMunuToggle = (show: string) => {
    setMenuShow(show);
  };
  const { user } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isM) {
      document.body.style.overflow = "unset";
      return;
    }
    if (menuShow) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "unset";
  }, [menuShow, isM]);
  const handShowModal = (e: React.MouseEvent, prop: string) => {
    e.preventDefault();
    dispatch(showModal(prop));
  };
  const handLogout = () => {
    localStorage.removeItem("tsBlogUser");
    window.location.reload();
  };
  return (
    <header className="header">
      <div className={`container nav_container ${menuShow}`}>
        <Link to="/" className="nav_left">
          <i className="bi bi-book-half"></i>Ray's Blog
        </Link>

        <div className="nav_right">
          {isM && user.email && (
            <div className="userImg">
              <img src={user.profilePicture} alt="" className="userImg" />
            </div>
          )}
          <div className="nav_middle">
            <i className="bi bi-search"></i>
            <input type="search" placeholder="搜尋作者的文章..." />
          </div>
          <ul className="ul_list">
            <NavLink to="/">首頁</NavLink>
            <NavLink to="/postData">貼文</NavLink>
            <NavLink to="/">我的貼文</NavLink>
            <NavLink to="/">發文</NavLink>
            {user.email && (
              <NavLink to="/" onClick={handLogout}>
                登出
              </NavLink>
            )}
          </ul>
          {!isM && user.email && (
            <div className="userImg">
              <img src={user.profilePicture} alt="" className="userImg" />
            </div>
          )}
          {!user.email && (
            <div className="btn_group">
              <Link
                className="loginBtn"
                to="/"
                onClick={(e) => handShowModal(e, "login")}
              >
                登入
              </Link>
              <Link
                className="registerBtn"
                to="/"
                onClick={(e) => handShowModal(e, "register")}
              >
                註冊
              </Link>
            </div>
          )}
        </div>
        <i className="bi bi-list" onClick={() => handMunuToggle("show")}></i>
        <i className="bi bi-x" onClick={() => handMunuToggle("")}></i>
      </div>
    </header>
  );
};

export default NavBar;
