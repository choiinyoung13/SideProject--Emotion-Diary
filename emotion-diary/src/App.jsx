import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import { createContext, useEffect, useReducer, useRef } from "react";
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
    content:
      "아침에 일찍 일어나 산책을 다녀왔다. 시원한 바람 덕분에 하루를 기분 좋게 시작할 수 있었다.",
  },
  {
    id: 2,
    createdDate: new Date("2025-09-02").getTime(),
    emotionId: 3,
    content:
      "오늘은 업무가 생각보다 많아서 조금 지쳤다. 그래도 끝내고 나니 뿌듯한 마음이 들었다.",
  },
  {
    id: 3,
    createdDate: new Date("2025-09-03").getTime(),
    emotionId: 2,
    content:
      "오랜만에 친구와 저녁을 함께하며 많은 이야기를 나눴다. 즐거운 대화 덕분에 하루의 피로가 풀렸다.",
  },
  {
    id: 4,
    createdDate: new Date("2025-09-12").getTime(),
    emotionId: 5,
    content:
      "날씨가 너무 더워서 외출하기가 힘들었다. 집에 돌아와 시원한 음료를 마시니 한결 살 것 같았다.",
  },
  {
    id: 5,
    createdDate: new Date("2025-10-19").getTime(),
    emotionId: 1,
    content:
      "작은 프로젝트를 마무리하고 나니 성취감이 느껴졌다. 오늘 하루는 나에게 의미 있는 날이었다.",
  },
];
const diaryReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_DIARY": {
      // const diary = JSON.parse(localStorage.getItem("diary"));
      // localStorage.setItem("diary", JSON.stringify([...diary, action.data]));

      return [action.data, ...state];
    }

    case "UPDATE_DIARY": {
      // const diary = JSON.parse(localStorage.getItem("diary"));
      // const updatedDiary = diary.map((item) =>
      //   String(item.id) === String(action.data.id) ? action.data : item
      // );
      // localStorage.setItem("diary", JSON.stringify(updatedDiary));

      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    }

    case "DELETE_DIARY": {
      // const diary = JSON.parse(localStorage.getItem("diary"));
      // const filteredDiary = diary.filter(
      //   (item) => String(action.data.id) !== String(item.id)
      // );
      // localStorage.setItem("diary", JSON.stringify(filteredDiary));

      return state.filter((item) => String(action.data.id) !== String(item.id));
    }

    default:
      return state;
  }
};

function App() {
  const [data, dispatch] = useReducer(
    diaryReducer,
    JSON.parse(localStorage.getItem("diary")) || MockData
  );

  // localStorage에서 가장 큰 id를 찾아서 +1
  const getMaxId = () => {
    const maxId = Math.max(...data.map((item) => item.id), 0);
    return maxId + 1;
  };

  const idRef = useRef(getMaxId());

  useEffect(() => {
    localStorage.setItem("diary", JSON.stringify(data));
  }, [data]);

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
