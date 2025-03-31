import { list } from "@/components/data/MessageDataList.js";
import { SiOpenai } from "react-icons/si";
export default function MessageList() {
  return (
    <div className="h-[480px]   px-[140px] flex-col justify-start overflow-y-auto">
      {list.map((item) => {
        const isUser = item.role === "user";
        return (
          <div
            key={item.id}
            className={`flex justify-start mt-[10px] 
              rounded-md tracking-[1px] text-[18px]
              leading-[30px] text-gray-700
               ${!isUser && "bg-gray-100"}`}
          >
            <span> {isUser ? "😊" : <SiOpenai />}</span>
            <span className="flex-1">{item.content}</span>
          </div>
        );
      })}
    </div>
  );
}
