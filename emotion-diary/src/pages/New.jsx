import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Editor from "../components/Editor";

export default function New() {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate("/");
  };

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={
          <Button text="< 뒤로가기" type="DEFAULT" onClick={onClickBack} />
        }
      />
      <Editor type="CREATE" />
    </div>
  );
}
