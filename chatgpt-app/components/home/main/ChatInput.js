import TextareaAutoSize from "react-textarea-autosize";
export default function ChatInput() {
  return (
    <div className="w-full mt-2 !h-[100x] absolute bottom-0  ">
      {/* <div>this is chat input</div> */}
      <TextareaAutoSize
        placeholder="请输入一条信息"
        className="w-3/4 h-full bg-transparent text-black rounded-lg border-1"
        rows={1}
      />
      <footer className="text-[14px] text-gray-700">
        ©️2025{" "}
        <a
          href="https://x.zhixing.co"
          target="_blank"
          className="underline decoration-dotted mr-[4px]"
        >
          知行小课
        </a>
        基于第三方提供的接口
      </footer>
    </div>
  );
}

// 为什么 输入框 只有  bottom  有阴影呢？ 其他三个 地方没有阴影呢？
// 用  tailwindcss 这种属性呢！   shadow-gray-600 shadow-2xl

// ring-4
// shadow-gray-600 shadow-2xl
