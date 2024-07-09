import { useState } from "react";
import Button from "../AppComponents/Button";

export default function TestApp4({}) {
  const [ifrKey, setIfrKey] = useState(1);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-sleepless-50 dark:bg-sleepless-400">
      <div>
        <a
          href="https://cataas.com/"
          target="_blank"
          className="opacity-40 rounded-tr-xl flex justify-center items-center"
        >
          <p className="text-xs">Powered by: Cataas 🐱</p>
        </a>
        <div className="absolute w-[415px] h-[415px] mb-6 "></div>
        <iframe
          src="https://cataas.com/cat?type=medium&width=600&height=400&html=true"
          key={ifrKey}
          className="w-[415px] h-[415px] rounded-md bg-sleepless-75 bg-opacity-50 shadow-lg"
          scrolling="no"
        ></iframe>
      </div>
      <div className="mt-1">
        <Button clickfunc={() => setIfrKey(ifrKey + 1)}>GIVE ME A CAT</Button>
      </div>
    </div>
  );
}
