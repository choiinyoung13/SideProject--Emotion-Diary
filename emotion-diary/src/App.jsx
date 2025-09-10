import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import { createContext, useReducer, useRef } from "react";
// import { useRef } from "react";

// 1. "/" :  모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary/:id" : 일기를 상세히 조회하는 Diary 페이지

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

const MockData = [
  {
    id: 1,
    createdDate: new Date("2025-08-20").getTime(),
    emotionId: 1,
    content: "오늘의 일기 1번",
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

const diaryReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_DIARY":
      return [action.data, ...state];
    case "UPDATE_DIARY":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE_DIARY":
      return state.filter((item) => String(action.data.id) !== String(item.id));
    default:
      return state;
  }
};

function App() {
  const [data, dispatch] = useReducer(diaryReducer, MockData);
  const idRef = useRef(7);

  // 일기 생성
  const onCreateDiary = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE_DIARY",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 일기 수정
  const onUpdateDiary = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE_DIARY",
      data: { id, createdDate, emotionId, content },
    });
  };

  // 일기 삭제
  const onDeleteDiary = (id) => {
    dispatch({
      type: "DELETE_DIARY",
      data: { id },
    });
  };

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{ onCreateDiary, onUpdateDiary, onDeleteDiary }}
        >
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/diary/:id" element={<Diary data={data} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
