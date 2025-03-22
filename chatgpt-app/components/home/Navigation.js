import { LuPanelLeft } from "react-icons/lu";
import { ShowNavContext } from "@/components/common/ShowNavContext";
import { MdLightMode, MdDarkMode, MdInfo } from "react-icons/md";
import { useCommonContext } from "@/components/common/CommonReduce";
import NavChat from "./nav/NavChat.js";

export default function Navigation(props) {
  // const context = useContext(ShowNavContext);
  const { state, dispatch } = useCommonContext();
  console.log("state", state);

  return (
    <div
      className={` relative  w-[240px]  bg-gray-900 text-gray-300 h-full ${
        state.show ? "hidden" : ""
      }`}
    >
      <div className="flex">
        <div className="ml-[4px] w-[160px] sp">新建对话</div>
        <button
          className=" w-[5px] h-10 "
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
      <div className="flex-col justify-between h-full ">
        <div className="h-[80%] overflow-y-auto">
          <NavChat />
        </div>

        <div className="bottom-20 left-3 h-[15%]">
          <button>dd</button>
        </div>
      </div>
    </div>
  );
}

/*
<Button
onClick={() => setIsShow(!isShow)}
className={"fixed left-2 top-2"}
>
<LuPanelLeft />
</Button>
*/
