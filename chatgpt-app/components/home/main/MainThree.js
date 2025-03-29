import chatgptData from "@/components/data/chatgptData.js";
import { useState, useMemo } from "react";
export default function MainThree() {
  // const [list, setList] = useState(chatgptData);
  // console.log(list);
  const [flg, setFlg] = useState(true);
  const list = useMemo(() => {
    if (flg) {
      return chatgptData.slice(0, 15);
    } else {
      return chatgptData;
    }
  }, [flg]);
  return (
    <div>
      <div className="flex justify-center flex-wrap">
        {list.map((item, index) => (
          <span
            className="ml-9 mt-5 bg-gray-100 rounded-lg px-4 py-1"
            key={index}
          >
            {item.act}
          </span>
        ))}
      </div>
      <div>
        &nbsp;
        {flg && <div onClick={() => setFlg(false)}>收起</div>}
      </div>
    </div>
  );
}
