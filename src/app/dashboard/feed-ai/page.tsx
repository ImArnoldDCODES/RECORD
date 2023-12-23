"use client";

import { useState, useRef } from "react";
import { resize } from "@/utils";

export default function Index() {
  const [value, setValue] = useState<string>("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  resize(textAreaRef.current, value);

  return (
    <main className="relative flex min-h-screen flex-col items-center px-10 bg-[#333332]">
      <h2 className="md:text-[5em] text-[3em] mr-auto">/Feed-AI</h2>
      <hr className="w-full" />
      <section className="w-full h-[75svh] mt-5 flex flex-col">
        <div></div>
        <div className="w-full h-[fit] mt-auto">
          <textarea
            className="w-[100%] h-[100%] bg-[#757474] px-3 py-5 text-white outline-none no-scrollbar"
            placeholder="Message Feed-AI"
            name="text"
            onChange={(e) => setValue(e?.target?.value)}
            ref={textAreaRef}
            rows={1}
            value={value}
          ></textarea>
        </div>
      </section>
    </main>
  );
}
