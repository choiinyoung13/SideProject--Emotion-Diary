import Header from "../components/Header";
import Button from "../components/Button";
import { useContext, useState } from "react";
import DiaryList from "../components/DiaryList";
import { DiaryStateContext } from "../App";

export default function Home() {
  const [date, setDate] = useState(new Date());
  const data = useContext(DiaryStateContext);

  const onIncreaseMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${date.getFullYear()}년 ${date.getMonth() + 1}월`}
        leftChild={<Button text="<" type="DEFAULT" onClick={onDecreaseMonth} />}
        rightChild={
          <Button text=">" type="DEFAULT" onClick={onIncreaseMonth} />
        }
      />
      <DiaryList data={data} date={date} />
    </div>
  );
}
