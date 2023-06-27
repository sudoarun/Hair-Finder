import React, { useState } from "react";
import Time from "../../bookingTime/bookingTime";

const List = ({ name }) => {
  const [mark, setMark] = useState(null);
  return (
    <div className={`${name}`}>
      {Time.map((data, i) => (
        <li
          className={`py-2 my-1 px-5 ${mark === data && "bg-warning"}`}
          key={i}
          onClick={() => setMark(data)}
        >
          {data.time}
          <span>&nbsp;{data.shift}</span>
        </li>
      ))}
    </div>
  );
};

export default List;
