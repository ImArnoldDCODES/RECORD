"use client";

import axios from "axios";
import React, { useState } from "react";
import { Dropdown } from "@/components";

export default function Index() {
  return (
    <main className="relative flex min-h-screen flex-col items-center px-10 bg-[#333332]">
      <h2 className="md:text-[5em] text-[3em] mr-auto">/Speech-to-Text</h2>
      <hr className="w-full" />
      <section className="w-[100%] h-[80svh] flex flex-col md:flex-row justify-between mt-[5%] md:mt-0">
        <div className="h-[50%] md:w-[35%] md:my-auto flex flex-col gap-5 mt-[4rem]">
          <button className="bg-[#454545] rounded py-3 text-2xl">
            Import Audio
          </button>
          <div></div>
        </div>
        <div className="border-2 border-[#757474] rounded h-[50%] md:w-[50%] md:my-auto bg-[#303030]">
          <textarea
            className="w-[100%] h-[100%] bg-transparent px-3 py-5 no-scrollbar"
            placeholder="Input text"
            name="text"
            id="text"
          ></textarea>
        </div>
      </section>
    </main>
  );
}
