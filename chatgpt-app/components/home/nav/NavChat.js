import { list } from "@/components/common/ChatDataList.js";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
export default function NavChat() {
  const [chatList, setChatList] = useState(list);
  const [selectedItem, setSelectedItem] = useState();
  console.log("selectedItem  ", selectedItem);
  /*   console.log("list=== ", list);
  console.log("list str === ", JSON.stringify(list)); */
  return (
    <ul className=" h-full e">
      {chatList.map((item, index) => (
        <li key={index} className="my-4">
          <span>{item[0]}</span>
          <ul className="pl-4 flex-col justify-between items-center">
            {item[1].map((chat, index) => (
              <li
                key={chat.id}
                className={`my-2   my-3 relavtive
                  hover:bg-gray-400 cursor-pointer flex items-center
                  ${selectedItem?.id === chat.id ? "bg-gray-400" : ""}`}
                onClick={() => setSelectedItem(chat)}
              >
                <span className="whitespace-nowrap overflow-hidden">
                  {chat.title}
                </span>
                {selectedItem?.id === chat.id ? (
                  <>
                    <button className="float-right z-index-10">
                      <MdDeleteOutline></MdDeleteOutline>
                    </button>
                  </>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
