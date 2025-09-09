import { useState } from "react";
import { getEmotionImage } from "../utiles/get-emotion-image";
import "./Editor.css";
import Button from "./Button";

export default function Editor() {
  const [selectedEmotionId, setSelectedEmotionId] = useState(null);

  const onClickEmotion = (emotionId) => {
    setSelectedEmotionId(emotionId);
  };

  return (
    <div className="Editor_container">
      <section className="date_section">
        <div className="title">오늘의 날짜</div>
        <div>
          <input className="date_input" type="date" />
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
        <textarea className="content_input" placeholder="오늘은 어땠나요?" />
      </section>
      <section className="button_section">
        <Button text="취소하기" type="DEFAULT" />
        <Button text="작성 완료" type="POSITIVE" />
      </section>
    </div>
  );
}
