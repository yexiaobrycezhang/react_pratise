import { useContext } from "react";
import { LuPanelLeft } from "react-icons/lu";
import { useCommonContext } from "@/components/common/CommonReduce";

export default function Main() {
  const { state, dispatch } = useCommonContext();
  return (
    <main className="flex bg-white w-full dark:text-gray-1000">
      <div>
        <button
          className={`w-[5px] h-10  ${!state.show ? "hidden" : ""}`}
          onClick={() =>
            dispatch({
              type: "UPDATE",
              fieldId: "show",
              fieldValue: !state.show,
            })
          }
        >
          <LuPanelLeft className="w-9 h-9" />
        </button>
        <div>主题内容</div>
      </div>
    </main>
  );
}
