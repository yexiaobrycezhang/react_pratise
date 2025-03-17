import { LuPanelLeft } from "react-icons/lu";
import { ShowNavContext } from "@/components/common/ShowNavContext";
import { MdLightMode, MdDarkMode, MdInfo } from "react-icons/md";

export default function Navigation(props) {
  // const context = useContext(ShowNavContext);

  return (
    <div className={` relative flex w-[240px]  bg-gray-600 `}>
      <div className="ml-[4px] w-[160px] sp">新建对话</div>
      <button className=" w-[5px] h-10 ">
        <LuPanelLeft className="w-9 h-9" />
      </button>
      <div className="absolute bottom-20 left-3">
        <button></button>
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
