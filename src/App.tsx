import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRoutes } from "react-router-dom";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { Modal } from "./components/Modal";
import NavBar from "./components/NavBar";
import { loginSuccess } from "./redux/slices/User";
import routes from "./routes";

function App() {
  const element = useRoutes(routes);
  const dispatch = useDispatch();
  useEffect(() => {
    let user: any = localStorage.getItem("tsBlogUser");
    if (user) {
      dispatch(loginSuccess(JSON.parse(user)));
    }
  }, [dispatch]);
  return (
    <>
      <NavBar />
      {element}
      <Footer />
      <Modal />
      <Loading />
    </>
  );
}

export default App;
