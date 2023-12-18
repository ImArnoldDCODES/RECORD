"use client";

import axios from "axios";
import React, { useState } from "react";
import { Dropdown } from "@/components";

export default function Index() {
  const [storeText, setStoreText] = useState<string>();
  const [audio, setAudio] = useState<string>();
  const [gender, setGender] = useState<string>();

  const GenderOption = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const handleFunction = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post(
        "https://api.edenai.run/v2/audio/text_to_speech",
        {
          providers: "amazon,google,ibm,microsoft",
          language: "eng",
          text: storeText,
          option: "MALE",
          fallback_providers: "",
        },
        {
          headers: {
            authorization: `Bearer ${process.env.TOKEN}`,
          },
        }
      )
      .then((res) => {
        const audioUrl = res?.data.microsoft.audio_resource_url;
        setAudio(audioUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // console.log(process.env.TOKEN, "hello")



  return (
    <main className="relative flex min-h-screen flex-col items-center px-10 bg-[#333332]">
      <h2 className="text-[5em] mr-auto">/Text-to-Speech</h2>
      <hr className="w-full" />
      <section className="w-[100%] h-[80svh] flex justify-between">
        <div className="border-2 border-[#757474] rounded h-[50%] w-[50%] my-auto bg-[#303030]">
          <textarea
            className="w-[100%] h-[100%] bg-transparent px-3 py-5 no-scrollbar"
            onChange={(e) => setStoreText(e.target.value)}
            placeholder="Input text"
            name="text"
            id="text"
          ></textarea>
        </div>
        <div className="h-[50%] w-[35%] my-auto flex flex-col gap-5">
          <div>
            <Dropdown
              name="Gender"
              options={GenderOption}
              title="Select Gender option"
              onChange={(option) => setGender(option.target.value)}
            />

            <Dropdown
              name="Languague"
              options={GenderOption}
              title="Select Languague"
              onChange={(option) => setGender(option.target.value)}
            />
          </div>
          <button
            className="bg-[#454545] rounded py-3 text-2xl"
            onClick={handleFunction}
          >
            Generate Audio
          </button>

          {audio ? (
            <audio className="w-[100%]" src={audio} autoPlay controls />
          ) : null}
        </div>
      </section>
    </main>
  );
}
