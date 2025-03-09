"use client";

import Navigation from "@/components/home/Navigation";
import Main from "@/components/home/Main";

export default function Home() {
  return (
    <div className="h-full flex bg-green-50">
      <Navigation />
      <Main />
    </div>
  );
}
