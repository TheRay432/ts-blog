import userImg from "@/images/plan01.jpg";
import { closeModal } from "@/redux/slices/modal";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
export const Modal = () => {
  const { isShow, isLogin, isRegister } = useSelector(
    (state: RootState) => state.modalReducer
  );
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  };
  return (
    <>
      <div className={`modal-bg ${isShow ? "bg-active" : ""}`}>
        <form
          className={`modal ${isShow ? "bg-active" : ""} ${
            isLogin ? "border_blue" : ""
          }`}
        >
          <div className="closeDiv">
            <i className="bi bi-x-circle" onClick={handleClose}></i>
          </div>
          {isRegister && <h1>註冊</h1>}
          {isLogin && <h1 style={{ color: "#0dcaf0" }}>登入</h1>}

          {isRegister && <img src={userImg} alt="" />}
          <div className="input_group">
            {isRegister && (
              <>
                <label htmlFor="userImg" className="fileLabel">
                  <i className="bi bi-card-image"></i>上傳你的大頭貼
                </label>
                <input id="userImg" type="file" style={{ display: "none" }} />
                <label htmlFor="userName">姓名:</label>
                <div className="i_input">
                  <input
                    id="userName"
                    type="text"
                    placeholder="請輸入你的姓名..."
                  />
                  <i className="bi bi-person"></i>
                </div>
              </>
            )}
            <label htmlFor="userEmail">信箱:</label>
            <div className="i_input">
              <input
                id="userEmail"
                type="text"
                placeholder="請輸入你的信箱..."
              />
              <i className="bi bi-envelope"></i>
            </div>
            <label htmlFor="userPassword">密碼:</label>
            <div className="i_input">
              <input
                id="userPassword"
                type="text"
                placeholder="請輸入你的密碼..."
              />
              <i className="bi bi-key"></i>
            </div>
          </div>
          {isRegister && (
            <button type="button" className="modal_registerBtn">
              註冊
            </button>
          )}
          {isLogin && (
            <button type="button" className="modal_loginBtn">
              登入
            </button>
          )}
        </form>
      </div>
    </>
  );
};
