import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

export default function Diary({ data }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const diary = data.find((item) => item.id === parseInt(id));
  const date = new Date(diary.createdDate);

  const onClickBack = () => {
    navigate("/");
  };

  return (
    <div>
      <Header
        title={`${date.getFullYear()}년 ${
          date.getMonth() + 1
        }월 ${date.getDate()}일 기록`}
        leftChild={
          <Button text="< 뒤로가기" type="DEFAULT" onClick={onClickBack} />
        }
        rightChild={<Button text="수정하기" type="DEFAULT" />}
      />
    </div>
  );
}
