import { useMemo, useState } from "react";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";

export default function DiaryList({ data, date }) {
  const [filter, setFilter] = useState("latest");

  const filteredData = useMemo(() => {
    // 1. 먼저 날짜로 필터링
    const filtered = data.filter((item) => {
      const itemDate = new Date(item.createdDate);
      return (
        itemDate.getFullYear() === date.getFullYear() &&
        itemDate.getMonth() === date.getMonth()
      );
    });

    // 2. 정렬 적용
    const sorted = [...filtered].sort((a, b) => {
      if (filter === "latest") {
        return new Date(a.createdDate) - new Date(b.createdDate); // 최신순
      } else {
        return new Date(b.createdDate) - new Date(a.createdDate); // 오래된 순
      }
    });

    return sorted;
  }, [data, date, filter]);

  const onChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="diary_list">
      <div className="menu_bar">
        <select
          className="menu_select"
          value={filter}
          onChange={onChangeFilter}
        >
          <option value="latest">최신순</option>
          <option value="oldest">오랜된 순</option>
        </select>
        <Button className="menu_button" text="새 일기 쓰기" type="POSITIVE" />
      </div>
      <div className="diary_list_wrapper">
        {filteredData.map((item) => (
          <DiaryItem
            key={item.id}
            id={item.id}
            emotionId={item.emotionId}
            createdDate={item.createdDate}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}
