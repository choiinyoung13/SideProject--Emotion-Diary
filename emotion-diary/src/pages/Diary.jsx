import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";

export default function Diary({ data }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const diary = data.find((item) => String(item.id) === String(id));

  useEffect(() => {
    if (!diary) {
      alert("일기가 존재하지 않습니다.");
      navigate("/", { replace: true });
    }
  }, [diary, navigate]);

  // diary가 없으면 렌더링하지 않음
  if (!diary) {
    return null;
  }

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
