import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
// import { useRef } from "react";
// 1. "/" :  모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary/:id" : 일기를 상세히 조회하는 Diary 페이지

const MockData = [
  {
    id: 1,
    createdDate: new Date("2025-08-20").getTime(),
    emotionId: 1,
    content:
      "오늘의 일기 1번오늘의 일기 1번오늘의 일기 1번오늘의 일기 1번오늘의 일기 1번오늘의 일기 1번오늘의 일기 1번오늘의 일기 1번오늘의 일기 1번오늘의 일기 1번오늘의 일기 1번",
  },
  {
    id: 2,
    createdDate: new Date("2025-09-02").getTime(),
    emotionId: 3,
    content: "오늘의 일기 2번",
  },
  {
    id: 3,
    createdDate: new Date("2025-09-03").getTime(),
    emotionId: 4,
    content: "오늘의 일기 3번",
  },
  {
    id: 4,
    createdDate: new Date("2025-09-12").getTime(),
    emotionId: 5,
    content: "오늘의 일기 4번",
  },
  {
    id: 5,
    createdDate: new Date("2025-09-25").getTime(),
    emotionId: 1,
    content: "오늘의 일기 5번",
  },
  {
    id: 6,
    createdDate: new Date("2025-10-11").getTime(),
    emotionId: 5,
    content: "오늘의 일기 6번",
  },
];

function App() {
  // const idRef = useRef(4);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home data={MockData} />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/diary/:id" element={<Diary data={MockData} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
