import { useNavigate } from "react-router-dom";
import Editor from "../components/Editor";
import Header from "../components/Header";
import Button from "../components/Button";

export default function Edit() {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate("/");
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={
          <Button text="< 뒤로가기" type="DEFAULT" onClick={onClickBack} />
        }
        rightChild={
          <Button text="삭제하기" type="NEGATIVE" onClick={onClickBack} />
        }
      />
      <Editor type="UPDATE" />
    </div>
  );
}
