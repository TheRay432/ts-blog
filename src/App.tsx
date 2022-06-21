import { useRoutes } from "react-router-dom";
import Footer from "./components/Footer";
import { Modal } from "./components/Modal";
import NavBar from "./components/NavBar";
import routes from "./routes";

function App() {
  const element = useRoutes(routes);
  return (
    <>
      <NavBar />
      {element}
      <Footer />
      <Modal />
    </>
  );
}

export default App;
