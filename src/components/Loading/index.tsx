import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
const Loading = () => {
  const { isShow } = useSelector((state: RootState) => state.loadingReducer);
  return (
    <>
      {isShow && (
        <div className="loading_bg">
          <div className="loading_circle"></div>
        </div>
      )}
    </>
  );
};

export default Loading;
