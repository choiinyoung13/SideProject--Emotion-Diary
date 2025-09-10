import { useContext, useState } from "react";
import { getEmotionImage } from "../utiles/get-emotion-image";
import "./Editor.css";
import Button from "./Button";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

export default function Editor({ type }) {
  const navigate = useNavigate();
  const { onCreateDiary, onUpdateDiary } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);
  const [selectedEmotionId, setSelectedEmotionId] = useState(null);
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const { id } = useParams();

  const diary = data.find((item) => String(item.id) === String(id));

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onClickEmotion = (emotionId) => {
    setSelectedEmotionId(emotionId);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClickCreate = () => {
    onCreateDiary(date, selectedEmotionId, content);
    navigate("/", { replace: true });
  };

  const onClickUpdate = () => {
    onUpdateDiary(
      id,
      date ? date : diary.createdDate,
      selectedEmotionId ? selectedEmotionId : diary.emotionId,
      content ? content : diary.content
    );
    navigate("/", { replace: true });
  };

  const onClickCancel = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="Editor_container">
      <section className="date_section">
        <div className="title">오늘의 날짜</div>
        <div>
          <input
            className="date_input"
            type="date"
            value={date}
            onChange={onChangeDate}
          />
        </div>
      </section>
      <section className="emotion_section">
        <div className="title">오늘의 감정</div>
        <div className="emotion_item_container">
          <div
            className={`emotion_item emotion_type_1 ${
              selectedEmotionId === 1 ? "selected" : ""
            }`}
            onClick={() => onClickEmotion(1)}
          >
            <img src={getEmotionImage(1)} />
            <span>완전 좋음</span>
          </div>
          <div
            className={`emotion_item emotion_type_2 ${
              selectedEmotionId === 2 ? "selected" : ""
            }`}
            onClick={() => onClickEmotion(2)}
          >
            <img src={getEmotionImage(2)} />
            <span>좋음</span>
          </div>
          <div
            className={`emotion_item emotion_type_3 ${
              selectedEmotionId === 3 ? "selected" : ""
            }`}
            onClick={() => onClickEmotion(3)}
          >
            <img src={getEmotionImage(3)} />
            <span>그럭저럭</span>
          </div>
          <div
            className={`emotion_item emotion_type_4 ${
              selectedEmotionId === 4 ? "selected" : ""
            }`}
            onClick={() => onClickEmotion(4)}
          >
            <img src={getEmotionImage(4)} />
            <span>나쁨</span>
          </div>
          <div
            className={`emotion_item emotion_type_5 ${
              selectedEmotionId === 5 ? "selected" : ""
            }`}
            onClick={() => onClickEmotion(5)}
          >
            <img src={getEmotionImage(5)} />
            <span>끔찍함</span>
          </div>
        </div>
      </section>
      <section className="content_section">
        <div className="title">오늘의 일기</div>
        <textarea
          className="content_input"
          placeholder="오늘은 어땠나요?"
          value={content}
          onChange={onChangeContent}
        />
      </section>
      <section className="button_section">
        <Button text="취소하기" type="DEFAULT" onClick={onClickCancel} />

        {type === "CREATE" && (
          <Button
            text="작성 완료"
            type="POSITIVE"
            onClick={onClickCreate}
            disabled={!selectedEmotionId || !content || !date}
          />
        )}
        {type === "UPDATE" && (
          <Button
            text="수정 완료"
            type="POSITIVE"
            onClick={onClickUpdate}
            disabled={!selectedEmotionId && !content && !date}
          />
        )}
      </section>
    </div>
  );
}
