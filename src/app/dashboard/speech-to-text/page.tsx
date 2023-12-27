"use client";

import React, { useState, useRef, ChangeEvent } from "react";
import { axios } from "@/utils";
import FormData from "form-data";

export default function Index() {
  const [code, setCode] = useState<string>();
  const [text, setText] = useState<string>();
  const [isLoading, setIsLoading] = useState<string>();
  const [btnText, setBtnText] = useState<string>("Copy");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    try {
      if (!file) {
        throw new Error("No file selected");
      }

      const form = new FormData();
      form.append("providers", "revai,voci");
      form.append("file", file);
      form.append("language", "en");

      const response = await axios.post("audio/speech_to_text_async", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setCode(response.data.public_id);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const handleGetAudio = async () => {
    {
      try {
        setIsLoading("loading");
        await axios.get(`audio/speech_to_text_async/${code}`).then((res) => {
          setText(res?.data?.results?.voci?.text);
          setIsLoading("");
        });
      } catch (e) {
        console.log(e, "error");
      }
    }
  };

  console.log(isLoading, "loading");

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text ?? "");
    setBtnText("Copied");

    setTimeout(() => {
      setBtnText("Copy");
    }, 2000);
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center px-10 bg-[#333332]">
      <h2 className="md:text-[5em] text-[3em] mr-auto">/Speech-to-Text</h2>
      <hr className="w-full" />
      <section className="w-[100%] h-[80svh] flex flex-col md:flex-row justify-between mt-[5%] md:mt-0">
        <div className="h-[50%] md:w-[35%] md:my-auto flex flex-col gap-5 mt-[4rem]">
          <input
            type="file"
            accept="audio/*"
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
          <button
            className="bg-[#454545] rounded py-3 text-2xl"
            onClick={() => fileInputRef?.current?.click()}
          >
            Import Audio
          </button>
          <button
            className={!code ? "hidden" : "bg-[#454545] rounded py-3 text-2xl"}
            onClick={handleGetAudio}
          >
            Generate Text
          </button>
        </div>
        <div className="border-2 border-[#757474] rounded h-[50%] md:w-[50%] md:my-auto bg-[#747976] relative">
          <textarea
            className="w-[100%] h-[100%] bg-transparent px-3 py-5 no-scrollbar"
            placeholder=""
            name="text"
            id="text"
            disabled
            value={isLoading === "loading" ? isLoading : text}
          ></textarea>
          <button
            className="absolute right-[1rem] lg:bottom-[1rem] bottom-[0.4rem] bg-[#747976] hover:bg-[#454545] rounded px-4 py-3 mt-5 text-l"
            onClick={handleCopyClick}
          >
            {btnText}
          </button>
        </div>
      </section>
    </main>
  );
}
