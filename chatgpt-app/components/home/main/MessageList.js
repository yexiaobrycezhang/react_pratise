import { list } from "@/components/data/MessageDataList.js";
export default function MessageList() {
  return (
    <>
      {list.map((item) => {
        return (
          <>
            <span>{item.content}</span>
          </>
        );
      })}
    </>
  );
}
