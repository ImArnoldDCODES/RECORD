"use client";

import React, { useState } from "react";
import { Dropdown } from "@/components";
import { axios } from "@/utils";

export default function Index() {
  const [text, setText] = useState<string>();
  const [fromLan, setFromLan] = useState<string>();
  const [toLan, setToLan] = useState<string>();
  const [value, setValue] = useState<string>();
  const [btnText, setBtnText] = useState<string>("Copy");
  const [isLoading, setIsLoading] = useState<string>();

  const languages = [
    // { value: "auto detection", label: "Auto detection" },
    { value: "eng", label: "English" },
    { value: "fr", label: "French" },
  ];

  const handleSwitch = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      axios
        .post("translation/automatic_translation", {
          providers: "amazon,google,ibm,microsoft",
          text: text,
          source_language: fromLan,
          target_language: toLan,
          fallback_providers: "",
        })
        .then((res) => {
          setIsLoading("loading");
          setIsLoading("");
          setValue(res?.data?.google?.text);
        });
      setIsLoading("loading");
    } catch (e) {
      console.log(e, "error");
    }
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(value ? value : "");
    setBtnText("Copied");

    setTimeout(() => {
      setBtnText("Copy");
    }, 2000);
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center px-10 bg-[#333332] h-[100%]">
      <h2 className="md:text-[5em] text-[3em] mr-auto">/Translator</h2>
      <hr className="w-full" />

      <div className="w-full flex flex-col">
        <div className="lg:w-[40%] mt-20">
          <Dropdown
            options={languages}
            name="from-to-languagues"
            title="From"
            onChange={(option) => setFromLan(option.target.value)}
          />
          <Dropdown
            options={languages}
            name="from-to-languagues"
            title="To"
            onChange={(option) => setToLan(option.target.value)}
          />
          <button
            className="bg-[#454545] rounded py-3 w-[100%] mt-5 text-2xl"
            onClick={handleSwitch}
            disabled={text?.trim().length === 0}
          >
            Translate
          </button>
        </div>
        <section className="w-[100%] lg:h-[60svh] flex flex-col lg:flex-row justify-between gap-y-20 mt-16 lg:mt-0">
          <div className="h-[15rem] lg:h-[70%] lg:w-[45%] md:my-auto flex flex-col gap-5 border-2 border-[#747976] rounded">
            <textarea
              className="w-[100%] h-[100%] bg-transparent px-3 py-5 no-scrollbar"
              placeholder="Input text"
              name="text"
              id="text"
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          <div className="border-2 border-[#757474] rounded h-[15rem] lg:h-[70%] lg:w-[40%] md:my-auto bg-[#747976] relative mb-10">
            <textarea
              className="w-[100%] h-[100%] bg-transparent px-3 py-5 no-scrollbar"
              placeholder=""
              name="text"
              id="text"
              value={isLoading === "loading" ? "Loading..." : value}
            ></textarea>
            <button
              className="absolute right-[1rem] lg:bottom-[1rem] bottom-[0.4rem] bg-[#747976] hover:bg-[#454545] rounded px-4 py-3 mt-5 text-l"
              onClick={handleCopyClick}
            >
              {btnText}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
