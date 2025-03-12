"use client";

import Navigation from "@/components/home/Navigation";
import Main from "@/components/home/Main";
import { useState, useContext } from "react";
import { ShowNavContext } from "@/components/common/ShowNavContext";

export default function Home() {
  const [show, setShow] = useState(true);
  const context = useContext(ShowNavContext);
  return (
    <context.Provider value={{ show, setShow }}>
      <div className="h-full flex bg-green-50">
        <Navigation />
        <Main />
      </div>
    </context.Provider>
  );
}
