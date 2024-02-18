// import React from "react";
import { useState } from "react";
import data from "./../../../../assets/mockData.json";
import ListItem from "./ListItem";

const List = () => {
  const [accordianIndex, setAccordianIndex] = useState(null);
  const handleAccordianClick = (index) => {
    if (index !== accordianIndex) setAccordianIndex(index);
    else setAccordianIndex(null);
  };
  return (
    <div className="lists">
      {data.length > 0 &&
        data.map((item, index) => {
          return (
            <ListItem
              key={index}
              item={{ ...item }}
              handleAccordianClick={handleAccordianClick}
              accordianIndex={accordianIndex}
            />
          );
        })}
    </div>
  );
};

export default List;
