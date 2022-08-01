import { showModal } from "@/redux/slices/modal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { RootState } from "@/redux/store";
import { addPath, clearPath } from "@/redux/slices/post";
const NavBar = () => {
  const [menuShow, setMenuShow] = useState("");
  const [searchPath, setSearchPath] = useState("");
  const isM = useMediaQuery({
    query: "(max-width:940px)",
  });

  const { user } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const handMunuToggle = (show: string) => {
    setMenuShow(show);
  };
  const handShowModal = (e: React.MouseEvent, prop: string) => {
    e.preventDefault();
    dispatch(showModal(prop));
  };
  const handLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.removeItem("tsBlogUser");
    navigate("/");
    window.location.reload();
  };
  const scrollTop = (e: React.MouseEvent, prop: string) => {
    window.scrollTo(0, 0);
    if (!user.email && (prop === "/mypost" || prop === "/write")) {
      e.preventDefault();
      dispatch(showModal("login"));
      return;
    }
    if (prop === "/mypost" || prop === "/postData") {
      dispatch(clearPath());
    }
    navigate(`${prop}`);
    setMenuShow("");
  };
  const handKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      navigate(`/postData?user=${searchPath}`);
      dispatch(addPath(searchPath));
      setSearchPath("");
      setMenuShow("");
    }
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
            <input
              type="search"
              value={searchPath}
              placeholder="搜尋作者的文章..."
              onChange={(e) => setSearchPath(e.target.value)}
              onKeyDown={(e) => handKeyDown(e)}
            />
          </div>
          <ul className="ul_list">
            <NavLink onClick={(e) => scrollTop(e, "/")} to="/">
              首頁
            </NavLink>
            <NavLink onClick={(e) => scrollTop(e, "/postData")} to="/postData">
              貼文
            </NavLink>
            <NavLink onClick={(e) => scrollTop(e, "/mypost")} to="/mypost">
              我的貼文
            </NavLink>
            <NavLink onClick={(e) => scrollTop(e, "/write")} to="/write">
              發文
            </NavLink>
            {user.email && (
              <NavLink to="/logout" onClick={(e) => handLogout(e)}>
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
