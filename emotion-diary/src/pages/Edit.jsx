import { useNavigate, useParams } from "react-router-dom";
import Editor from "../components/Editor";
import Header from "../components/Header";
import Button from "../components/Button";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

export default function Edit() {
  const navigate = useNavigate();
  const { onDeleteDiary } = useContext(DiaryDispatchContext);
  const { id } = useParams();

  const onClickBack = () => {
    navigate("/");
  };
  const onClickDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까? 삭제하면 복구되지 않아요!")) {
      onDeleteDiary(id);
      navigate("/");
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={
          <Button text="< 뒤로가기" type="DEFAULT" onClick={onClickBack} />
        }
        rightChild={
          <Button text="삭제하기" type="NEGATIVE" onClick={onClickDelete} />
        }
      />
      <Editor type="UPDATE" />
    </div>
  );
}
