"use client";

import { Sender } from "@/components";
import { axios, resize } from "@/utils";
import { useRef, useState } from "react";

export default function Index() {
  const [message, setMessage] = useState<string[]>([]);
  const [currentMsg, setCurrentMsg] = useState<string>("");
  const [resTexts, setResTexts] = useState<string[]>([]);
  const [resValue, setResValue] = useState<string>("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  resize(textAreaRef.current, currentMsg);

  const handleSenderText = async () => {
    setMessage((prevmessage) => [...prevmessage, currentMsg]);
    setCurrentMsg("");

    try {
      const response = await axios.post("text/chat", {
        providers: "openai",
        text: currentMsg,
        chatbot_global_action: "Act as an assistant",
        previous_history: [],
        temperature: 0.0,
        max_tokens: 150,
        fallback_providers: "",
      });
      const data = await response.data;
      console.log(data?.openai, "Res");
      setResValue(data?.openai?.generated_text);
      console.log(resValue, "result");
      // setResTexts((prevValue) => [...prevValue, resValue]);
    } catch (e) {
      console.log(e, "error");
    }
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center px-10 bg-[#333332]">
      <h2 className="md:text-[5em] text-[3em] mr-auto">/Feed-AI</h2>
      <hr className="w-full" />
      <section className="relative w-full min-h-full mt-5 flex flex-col">
        <div className="overflow-auto flex flex-col gap-10 h-[70vh] mb-5 no-scrollbar">
          <div className="border-2 border-[#70706f] bg-[#232323] w-[fit-content] h-[fit-content]  md:max-w-[55%] sm:max-w-[80%] max-w-[90%] px-5 py-3 ml-auto rounded-lg">
            <span>
              What are the resources i need to create a chat bot ai system in
              next js
            </span>
          </div>
          <div className="border-2 border-[#70706f] bg-[#232323] w-[fit-content] h-[fit-content] md:max-w-[55%] sm:max-w-[80%] max-w-[90%] px-5 py-3 mr-auto rounded-lg">
            <span>
              Creating a chatbot AI system with Next.js involves several
              components, including front-end development for the user
              interface, back-end development for handling the bot logic, and
              integration with a natural language processing (NLP) service for
              understanding user input. {`Here's`} a general guide and the key
              resources you might need:
            </span>
          </div>
          <div className="border-2 border-[#70706f] bg-[#232323] w-[fit-content] h-[fit-content]  md:max-w-[55%] sm:max-w-[80%] max-w-[90%] px-5 py-3 ml-auto rounded-lg">
            <span>Define SSR</span>
          </div>
          <div className="border-2 border-[#70706f] bg-[#232323] w-[fit-content] h-[fit-content] md:max-w-[55%] sm:max-w-[80%] max-w-[90%] px-5 py-3 mr-auto rounded-lg">
            <span>
              SSR stands for Server-Side Rendering, which is a technique used in
              web development to improve the performance and SEO (Search Engine
              Optimization) of a website. In traditional client-side rendering
              (CSR), the browser downloads a minimal HTML page and then loads
              JavaScript to render the content dynamically on the client side.
              In contrast, SSR involves generating the complete HTML content on
              the server and sending it to the client, ready to be displayed.
              Heres a breakdown of how SSR works: Request is Sent: When a user
              accesses a web page, a request is sent to the server. Server
              Generates HTML: On the server, the application logic processes the
              request and generates the complete HTML content for the requested
              page. HTML is Sent to the Client: The server sends the fully
              rendered HTML page to the client as a response to the initial
              request. Client Receives HTML: The clients browser receives the
              pre-rendered HTML and starts rendering the page immediately
              without waiting for additional JavaScript to be downloaded and
              executed. JavaScript is Loaded: After the initial HTML is
              rendered, the client-side JavaScript is loaded. This JavaScript
              may include additional logic for interactivity or dynamic content.
              Hydration: Once the JavaScript is loaded, the client-side
              framework (e.g., React in the case of Next.js) takes over and
              {"hydrates"} the HTML, attaching event handlers and making the
              page fully interactive. SSR offers several benefits: Improved
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
          ----
          <Sender value={message ?? ""} />
          {/* <Generate value={resTexts} /> */}
        </div>
        <div className="w-full h-[fit] mt-auto relative">
          <textarea
            className="w-[100%] h-[100%] bg-[#232323] px-3 py-5 text-white outline-none no-scrollbar"
            placeholder="Message Feed-AI"
            name="text"
            onChange={(e) => setCurrentMsg(e?.target?.value)}
            ref={textAreaRef}
            rows={1}
          ></textarea>
          <button
            className="absolute right-[1rem] lg:bottom-[1rem] bottom-[0.4rem] bg-[#747976] hover:bg-[#454545] rounded px-3 py-2 mt-5 text-l"
            onClick={handleSenderText}
          >
            send
          </button>
        </div>
      </section>
    </main>
  );
}
