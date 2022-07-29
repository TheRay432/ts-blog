import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const NoData = () => {
  const { searchPath } = useSelector((state: RootState) => state.postReducer);
  const [test, setTest] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = "https://myvueblog.netlify.app/img/error.1daa15d7.svg";
    img.onload = () => {
      setTest(true);
    };
  }, []);
  return (
    <>
      {test && (
        <>
          <div className="nodata">
            <img
              src="https://myvueblog.netlify.app/img/error.1daa15d7.svg"
              alt=""
            />
            {searchPath ? (
              <p style={{ fontSize: "36px" }}>
                目前尚無<span style={{ color: "crimson" }}>"{searchPath}"</span>
                的貼文
              </p>
            ) : (
              <p style={{ fontSize: "36px" }}>目前尚無文章!</p>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default NoData;
