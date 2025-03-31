import TextareaAutoSize from "react-textarea-autosize";
export default function ChatInput() {
  return (
    <>
      <div className="flex  items-end w-4/5 border border-black/10 rounded-xl px-[50px]">
        {/* <div>this is chat input</div> */}
        <TextareaAutoSize
          placeholder="请输入一条信息"
          className="outline-none flex-1 max-h-64 mb-1.5 bg-transparent text-black
         dark:text-white resize-none border-0"
          rows={1}
        />
        <button>发送</button>
      </div>
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
    </>
  );
}

// 为什么 输入框 只有  bottom  有阴影呢？ 其他三个 地方没有阴影呢？
// 用  tailwindcss 这种属性呢！   shadow-gray-600 shadow-2xl

// ring-4
// shadow-gray-600 shadow-2xl
