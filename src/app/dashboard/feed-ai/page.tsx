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
      <section className="relative w-full min-h-full mt-5 flex flex-col">
        <div className="overflow-auto flex flex-col gap-10 h-[70vh] mb-5 no-scrollbar">
          <div className="border-2 border-[#70706f] bg-[#232323] w-[fit-content] h-[fit-content]  px-5 py-3 ml-auto rounded-lg">
            <span>
              What are the resources i need to create a chat bot ai system in
              next js
            </span>
          </div>

          <div className="border-2 border-[#70706f] bg-[#232323] w-[fit-content] h-[fit-content] max-w-[55%] px-5 py-3 mr-auto rounded-lg">
            <span>
              Creating a chatbot AI system with Next.js involves several
              components, including front-end development for the user
              interface, back-end development for handling the bot logic, and
              integration with a natural language processing (NLP) service for
              understanding user input. Here's a general guide and the key
              resources you might need:
            </span>
          </div>

          <div className="border-2 border-[#70706f] bg-[#232323] w-[fit-content] h-[fit-content]  px-5 py-3 ml-auto rounded-lg">
            <span>Define SSR</span>
          </div>

          <div className="border-2 border-[#70706f] bg-[#232323] w-[fit-content] h-[fit-content] md:max-w-[55%] max-w-[80%] px-5 py-3 mr-auto rounded-lg">
            <span>
              SSR stands for Server-Side Rendering, which is a technique used in
              web development to improve the performance and SEO (Search Engine
              Optimization) of a website. In traditional client-side rendering
              (CSR), the browser downloads a minimal HTML page and then loads
              JavaScript to render the content dynamically on the client side.
              In contrast, SSR involves generating the complete HTML content on
              the server and sending it to the client, ready to be displayed.
              Here's a breakdown of how SSR works: Request is Sent: When a user
              accesses a web page, a request is sent to the server. Server
              Generates HTML: On the server, the application logic processes the
              request and generates the complete HTML content for the requested
              page. HTML is Sent to the Client: The server sends the fully
              rendered HTML page to the client as a response to the initial
              request. Client Receives HTML: The client's browser receives the
              pre-rendered HTML and starts rendering the page immediately
              without waiting for additional JavaScript to be downloaded and
              executed. JavaScript is Loaded: After the initial HTML is
              rendered, the client-side JavaScript is loaded. This JavaScript
              may include additional logic for interactivity or dynamic content.
              Hydration: Once the JavaScript is loaded, the client-side
              framework (e.g., React in the case of Next.js) takes over and
              "hydrates" the HTML, attaching event handlers and making the page
              fully interactive. SSR offers several benefits: Improved
              Performance: Users see content more quickly since the initial page
              is already rendered on the server. SEO Benefits: Search engines
              can easily index the content because the complete HTML is
              available from the start. Better User Experience: SSR can provide
              a faster perceived page load time, leading to a better user
              experience. Next.js, a popular React framework, supports SSR out
              of the box and simplifies the implementation of Server-Side
              Rendering for React applications.
            </span>
          </div>
        </div>
        <div className="w-full h-[fit] mt-auto">
          <textarea
            className="w-[100%] h-[100%] bg-[#232323] px-3 py-5 text-white outline-none no-scrollbar"
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
