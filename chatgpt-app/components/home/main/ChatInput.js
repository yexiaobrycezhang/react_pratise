import TextareaAutoSize from "react-textarea-autosize";
import { useState } from "react";
import { useCommonContext } from "@/components/common/CommonReduce.js";
import { v4 as uuidv4 } from "uuid";
export default function ChatInput() {
  const [messageText, setMessage] = useState("");

  const context = useCommonContext();
  const {
    state: { messageList, currentModel, streamingId },
    dispatch,
  } = context;

  async function send() {
    const message = {
      id: uuidv4(),
      role: "user",
      content: messageText,
    };
    const messages = messageList.concat([message]);
    dispatch({ type: "ADD_MESSAGE", message });
    console.log("send  message === ", message);
    const body = JSON.stringify({ messages });
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    if (!response.ok) {
      console.log(response.statusText);
      return;
    }
    if (!response.body) {
      console.log("body error");
      return;
    }

    const responseMessage = {
      id: uuidv4(),
      role: "assistant",
      content: "",
    };

    dispatch({ type: "ADD_MESSAGE", message: responseMessage });

    dispatch({
      type: "UPDATE",
      field: "streamingId",
      value: responseMessage.id,
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let done = false;
    let content = "";
    while (!done) {
      const result = await reader.read();
      done = result.done;
      const chunk = decoder.decode(result.vlaue, { stream: true });
      console.log(chunk);
      console.log("chunk ====  ", chunk);
      content += chunk;
      dispatch({
        type: "UPDATE_MESSAGE",
        message: { ...responseMessage, content },
      });
    }
    dispatch({
      type: "UPDATE",
      field: "streamingId",
      value: "",
    });
  }

  return (
    <>
      <div className="flex  items-end w-4/5 border border-black/10 rounded-xl px-[50px]">
        {/* <div>this is chat input</div> */}
        <TextareaAutoSize
          placeholder="请输入一条信息"
          className="outline-none flex-1 max-h-64 mb-1.5 bg-transparent text-black
         dark:text-white resize-none border-0"
          rows={1}
          value={messageText}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button onClick={send}>发送</button>
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
