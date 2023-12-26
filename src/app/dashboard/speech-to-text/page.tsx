"use client";

import React, { useState, useRef, ChangeEvent } from "react";
import { axios } from "@/utils";
import FormData from "form-data";

export default function Index() {
  const [code, setCode] = useState<string>();
  const [text, setText] = useState<string>();
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
        const response = await axios.get(`audio/speech_to_text_async/${code}`);
        setText(response?.data?.results?.voci?.text);
      } catch (e) {
        console.log(e, "error");
      }
    }
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
        <div className="border-2 border-[#757474] rounded h-[50%] md:w-[50%] md:my-auto bg-[#747976]">
          <textarea
            className="w-[100%] h-[100%] bg-transparent px-3 py-5 no-scrollbar"
            placeholder="Input text"
            name="text"
            id="text"
            disabled
            value={text}
          ></textarea>
        </div>
      </section>
    </main>
  );
}
