"use client";

import Navigation from "@/components/home/Navigation";
import Main from "@/components/home/Main";
import { useState, useContext } from "react";
import {
  CommonReduce,
  useCommonContext,
} from "@/components/common/CommonReduce";
export default function Home() {
  // const Context = useContext(ShowNavContext);
  // const { state, dispatch } = useCommonContext();
  const object = useCommonContext();
  console.log("state", object);

  return (
    /* <ShowNavContext.Provider value={{ show, setShow }}>
      <div className="h-full flex bg-green-50">
        <Navigation />
        <Main />
      </div>
    </ShowNavContext.Provider> */
    <CommonReduce>
      <div className={`h-full flex bg-green-50 `}>
        <Navigation />
        <Main />
      </div>
    </CommonReduce>
  );
}
