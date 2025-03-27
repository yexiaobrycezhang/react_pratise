import { useState } from "react";
export default function MainOne() {
  const commontStyle =
    "h-3/4 w-2/5  rounded-lg  flex align-center justify-center ";
  const iconList = [
    {
      id: 1,
      content: "GPT-3.5",
      style: `bg-white  ${commontStyle}`,
    },
    {
      id: 2,
      content: "GPT-4",
      style: `${commontStyle}`,
    },
  ];

  const [list, setList] = useState(iconList);
  /*  const elementList = iconList.map((item) => {
    return <span key={item.id}>{item.content}</span>;
  }; */

  function funOne(id) {
    let arr = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          style: `bg-white  ${commontStyle}`,
        };
      } else {
        return {
          ...item,
          style: `${commontStyle}`,
        };
      }
    });
    setList(arr);
  }

  return (
    <div
      className="mt-8 rounded-lg w-70 bg-gray-100 h-10 flex
     align-center justify-center pt-2"
    >
      {list.map((item) => (
        // <div key={item.id} className="h-3/4 w-2/5 mt-2 bg-white">
        <div
          key={item.id}
          className={item.style}
          onClick={() => funOne(item.id)}
        >
          <span>{item.content}</span>
        </div>
      ))}
    </div>
  );
}
