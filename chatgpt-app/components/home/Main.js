import { useContext } from "react";
import { ShowNavContext } from "@/components/common/ShowNavContext";
import { LuPanelLeft } from "react-icons/lu";

export default function Main() {
  const context = useContext(ShowNavContext);
  return (
    <main className="flex bg-white w-full dark:text-gray-800">
      <div>
        <button className={`w-[5px] h-10  `}>
          <LuPanelLeft className="w-9 h-9" />
        </button>
        <div>主题内容</div>
      </div>
    </main>
  );
}
