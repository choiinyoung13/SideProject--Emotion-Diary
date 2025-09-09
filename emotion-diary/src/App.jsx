import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Header from "./components/Header";
import Button from "./components/Button";
// 1. "/" :  모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary/:id" : 일기를 상세히 조회하는 Diary 페이지

function App() {
  return (
    <>
      <Header
        title="Header"
        leftChild={<Button text="Left" type="DEFAULT" />}
        rightChild={<Button text="right" type="DEFAULT" />}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
      </Routes>
    </>
  );
}

export default App;
