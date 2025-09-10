import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";

export default function Diary({ data }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const diary = data.find((item) => String(item.id) === String(id));
  const date = new Date(diary.createdDate);

  const onClickBack = () => {
    navigate("/");
  };

  const onClickEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <>
      <Header
        title={`${date.getFullYear()}-${
          date.getMonth() + 1
        }-${date.getDate()} 기록`}
        leftChild={
          <Button text="< 뒤로가기" type="DEFAULT" onClick={onClickBack} />
        }
        rightChild={
          <Button text="수정하기" type="DEFAULT" onClick={onClickEdit} />
        }
      />
      <Viewer diary={diary} />
    </>
  );
}
