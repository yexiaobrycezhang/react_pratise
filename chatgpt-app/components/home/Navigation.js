import Button from "../common/Button";
import { useState } from "react";
// import ShowNavContext from "@/components/common/ShowNavContext";

export default function Navigation(props) {
  const [isShow, setIsShow] = useState(true);
  return (
    <nav className={`h-full w-[260px] bg-gray-40 ${isShow ? "" : "hidden"} `}>
      {/* <nav className="{`h-full w-[260px] bg-gray-40  `}"> */}
      <Button onClick={() => setIsShow(!isShow)}> 导航</Button>
    </nav>
  );
}
