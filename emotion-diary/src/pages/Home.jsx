import Header from "../components/Header";
import Button from "../components/Button";
import { useState } from "react";
import DiaryList from "../components/DiaryList";

export default function Home({ data }) {
  const [date, setDate] = useState(new Date());

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
