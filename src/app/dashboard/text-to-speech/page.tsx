"use client";

import React, { useState } from "react";
import { Dropdown } from "@/components";
import { axios } from "@/utils";

export default function Index() {
  const [storeText, setStoreText] = useState<string>("");
  const [audio, setAudio] = useState<string>();
  const [gender, setGender] = useState<string>();
  const [lan, setLan] = useState<string>();
  const [isLoading, setIsLoading] = useState<string>();

  const GenderOption = [
    { value: "MALE", label: "Male" },
    { value: "FEMALE", label: "Female" },
  ];

  const LanguagueOption = [
    { value: "eng", label: "English" },
    { value: "fr", label: "French" },
    { value: "spa", label: "Spanish" },
  ];

  const handleFunction = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      axios
        .post("audio/text_to_speech", {
          providers: "amazon,google,ibm,microsoft",
          language: !lan ? "eng" : lan,
          text: storeText,
          option: !gender ? "MALE" : gender,
          fallback_providers: "",
        })
        .then((res) => {
          setIsLoading("");
          const audioUrl = res?.data.microsoft.audio_resource_url;
          setAudio(audioUrl);
        });
      setIsLoading("loading");
    } catch (e) {
      console.log(e, "error");
    }
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center px-10 bg-[#333332]">
      <h2 className="md:text-[5em] text-[3em] mr-auto">/Text-to-Speech</h2>
      <hr className="w-full" />
      <section className="w-[100%] h-[80svh] flex flex-col md:flex-row justify-between mt-[5%] md:mt-0">
        <div className="border-2 border-[#757474] rounded h-[50%] md:w-[50%] md:my-auto bg-[#303030]">
          <textarea
            className="w-[100%] h-[100%] bg-transparent px-3 py-5 no-scrollbar"
            onChange={(e) => setStoreText(e.target.value)}
            placeholder="Input text"
            name="text"
            id="text"
          ></textarea>
        </div>
        <div className="h-[70%] md:w-[35%] md:my-auto flex flex-col gap-5 mt-[4rem]">
          <div>
            <Dropdown
              name="Gender"
              options={GenderOption}
              title="Select Gender option"
              onChange={(option) => setGender(option.target.value)}
            />

            <Dropdown
              name="Languague"
              options={LanguagueOption}
              title="Select Languague"
              onChange={(option) => setLan(option.target.value)}
            />
          </div>
          <button
            className="bg-[#454545] rounded py-3 text-2xl"
            onClick={handleFunction}
            disabled={storeText?.trim().length === 0 ? true : false}
          >
            Generate Audio
          </button>

          {isLoading === "loading" ? (
            <h2>Loading...</h2>
          ) : (
            <audio
              className={audio ? "w-[100%] h-[4rem]" : "hidden"}
              src={audio}
              autoPlay
              controls
            />
          )}
        </div>
      </section>
    </main>
  );
}
