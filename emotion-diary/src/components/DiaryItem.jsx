import Button from "./Button";
import "./DiaryItem.css";
import { getEmotionImage } from "../utiles/get-emotion-image";
import { useNavigate } from "react-router-dom";

export default function DiaryItem({ id, emotionId, content, createdDate }) {
  const navigate = useNavigate();

  const onClickDiary = () => {
    navigate(`/diary/${id}`);
  };

  const onClickEdit = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="diary_item" onClick={onClickDiary}>
        <div className={`diary_item_emotion emotion_type_${emotionId}`}>
          <img src={getEmotionImage(emotionId)} alt="emotion" />
        </div>
        <div className="diary_item_content_wrapper">
          <div className="diary_item_date">
            {new Date(createdDate).toLocaleDateString()}
          </div>
          <div className="diary_item_content">{content}</div>
        </div>
        <Button text="수정하기" type="DEFAULT" onClick={onClickEdit} />
      </div>
    </>
  );
}
