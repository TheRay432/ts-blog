import React from "react";
import Footer from "./components/Footer";
import { Modal } from "./components/Modal";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <Footer />
      <Modal />
    </>
  );
}

export default App;
