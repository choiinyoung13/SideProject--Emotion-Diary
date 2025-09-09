import { getEmotionImage } from "../utiles/get-emotion-image";
import "./Viewer.css";

export default function Viewer({ diary }) {
  const formatIdtoString = (id) => {
    switch (id) {
      case 1:
        return "완전 좋음";
      case 2:
        return "좋음";
      case 3:
        return "그럭저럭";
      case 4:
        return "나쁨";
      case 5:
        return "끔찍함";
    }
  };

  return (
    <div className="diary_container">
      <div className="diary_emotion_container">
        <div>오늘의 감정</div>
        <div className={`diary_emotion emotion_type_${diary.emotionId}`}>
          <img src={getEmotionImage(diary.emotionId)} alt="emotion" />
          <span className="diary_emotion_text">
            {formatIdtoString(diary.emotionId)}
          </span>
        </div>
      </div>
      <div className="diary_content_container">
        <div>오늘의 일기</div>
        <div className="diary_content">{diary.content}</div>
      </div>
    </div>
  );
}
