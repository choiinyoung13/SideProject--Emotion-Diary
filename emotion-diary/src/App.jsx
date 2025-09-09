import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";

// 1. "/" :  모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary/:id" : 일기를 상세히 조회하는 Diary 페이지

function App() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/new">New</Link>
        <Link to="/diary">Diary</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
      </Routes>
    </>
  );
}

export default App;
