import { useContext } from "react";
import { ShowNavContext } from "@/components/common/ShowNavContext";
import { LuPanelLeft } from "react-icons/lu";

export default function Main() {
  const context = useContext(ShowNavContext);
  return (
    <main className="flex bg-gray-500">
      <div
        className={`relative flex w-[240px]   ${
          !context.show ? "" : "hidden"
        } `}
      >
        <button
          className=" w-[5px] h-10 "
          onClick={() => context.setShow(!context.show)}
        >
          <LuPanelLeft className="w-9 h-9" />
        </button>
        <div>主题内容</div>
      </div>
    </main>
  );
}
