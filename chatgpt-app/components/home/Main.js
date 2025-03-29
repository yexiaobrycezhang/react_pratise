import { useContext } from "react";
import { LuPanelLeft } from "react-icons/lu";
import { useCommonContext } from "@/components/common/CommonReduce";
import MainOne from "@/components/home/main/MainOne.js";
import MainTwo from "@/components/home/main/MainTwo.js";
import MainThree from "@/components/home/main/MainThree.js";

export default function Main() {
  const { state, dispatch } = useCommonContext();
  return (
    <main className="bg-white w-full dark:text-gray-1000 text-center">
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
      </div>
      <div className="flex flex-col w-full items-center over-flow-y-auto">
        <MainOne />
        <MainTwo />
        <MainThree />
      </div>
    </main>
  );
}
