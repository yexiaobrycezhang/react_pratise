import { useContext } from "react";
import { ShowNavContext } from "@/components/common/ShowNavContext";
import { LuPanelLeft } from "react-icons/lu";

export default function Main() {
  const context = useContext(ShowNavContext);
  return (
    <main className="flex bg-gray-500 w-full">
      <div>
        <button
          className={`w-[5px] h-10  ${!context.show ? "" : "hidden"}`}
          onClick={() => context.setShow(!context.show)}
        >
          <LuPanelLeft className="w-9 h-9" />
        </button>
        <div>主题内容</div>
      </div>
    </main>
  );
}
