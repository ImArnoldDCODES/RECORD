import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10 bg-[#333332]">
      <div className="2xl:w-[80%] w-full">
        <Navbar />
        <div className="w-[80%] h-fit mb-auto mx-auto relative">
          <h1 className="uppercase border-2 w-fit">Create</h1>
          <h1 className="uppercase m-auto border-2 w-fit">Import</h1>
          <h1 className="uppercase ml-auto border-2 w-fit">Share</h1>
          <p className="font-montserrat w-[16rem] absolute top-[70%] text-lg">
            Record, Import and share audio as urls to anyone anywhere
          </p>
        </div>
      </div>
    </main>
  );
}
