import { LuPanelLeft } from "react-icons/lu";
import { useContext } from "react";
import { ShowNavContext } from "@/components/common/ShowNavContext";

export default function Navigation(props) {
  const context = useContext(ShowNavContext);

  return (
    <div
      className={`relative flex w-[240px]  bg-gray-40 ${
        context.show ? "" : "hidden"
      } `}
    >
      <div className="ml-[4px] w-[185px] sp">新建对话</div>
      <button
        className=" w-[5px] h-10 "
        onClick={() => context.setShow(!context.show)}
      >
        <LuPanelLeft className="w-9 h-9" />
      </button>
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
