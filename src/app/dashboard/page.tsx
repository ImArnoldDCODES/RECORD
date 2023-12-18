import Link from "next/link";

export default function Index() {
  return (
    <main className="relative flex min-h-screen flex-col px-10 bg-[#333332]">
      <h2 className="text-[5em]">/Tech</h2>
      <hr />
      <div className="mt-10 h-full grid md:grid-cols-3 gap-4">
        <div className="bg-[#70706f] hover:bg-[#474746] cursor-pointer py-4 px-6 rounded-lg">
          <h3 className="text-[2em]">Text-to-Speech</h3>
          <h5 className="text-[1em]">
            A TTS platform that gives you the ability to experiment on different
            options to give you a disered speech feedback
          </h5>
          <Link href="/dashboard/text-to-speech">
            <button className="bg-[#474746] hover:bg-[#70706f] mt-5 px-3 py-2 rounded-lg">
              Try Out
            </button>
          </Link>
        </div>

        <div className="bg-[#70706f] hover:bg-[#474746] cursor-pointer py-4 px-6 rounded-lg">
          <h3 className="text-[2em]">Speech-to-Text</h3>
          <h5 className="text-[1em]">
            A STT platform that gives you the ability to experiment on different
            options to give you a disered text feedback
          </h5>
          <Link href="/dashboard/coming-soon">
            <button className="bg-[#474746] hover:bg-[#70706f] mt-5 px-3 py-2 rounded-lg">
              Try Out
            </button>
          </Link>
        </div>

        <div className="bg-[#70706f] hover:bg-[#474746] cursor-pointer py-4 px-6 rounded-lg">
          <h3 className="text-[2em]">Feed AI</h3>
          <h5 className="text-[1em]">
            Get instant feedback on questions with Feed Ai. With Feed ai you can
            chat and interact giving you 100% generated ai response
          </h5>
          <Link href="/dashboard/coming-soon">
            <button className="bg-[#474746] hover:bg-[#70706f] mt-5 px-3 py-2 rounded-lg">
              Try Out
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
