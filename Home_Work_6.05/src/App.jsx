import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import CustomButton from "./Components/UI/CustomButton";
import Title from "./Components/Title";
import Modal from "./Components/Modal/Modal";
import Footer from "./Components/Footer/Footer";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <Header />
      <Title />
      <CustomButton text="fetch" onHandleClick={() => setIsOpened(!isOpened)} />

      {isOpened && <Modal onHandleClick={() => setIsOpened(!isOpened)} />}

      <Footer/>
    </>

  );
}

export default App;
