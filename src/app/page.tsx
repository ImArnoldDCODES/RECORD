/* eslint-disable react/no-unescaped-entities */
import { NavBar } from "@/components/index";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center px-10 bg-[#333332]">
      <NavBar />
      <div className="2xl:w-[80%] w-full">
        <div className="relative">
          <div className="w-[80%] h-fit mb-auto mx-auto lg:block hidden">
            <h1 className="uppercase">Create</h1>
            <h1 className="uppercase m-auto w-fit mt-[-8%]">Import</h1>
            <h1 className="uppercase ml-auto w-fit  mt-[-8%]">Share</h1>
            <p className="font-montserrat w-[16rem] absolute top-[70%] text-lg">
              {/* Record, Import and share audio as urls to anyone anywhere */}
              Use Audio and Text to make magic. With rcord you get to use
              technologies like, TTS
            </p>
          </div>
          <div className="w-[100%] h-fit mb-auto mx-auto  lg:hidden block">
            <h1 className="uppercase">Create</h1>
            <h1 className="uppercase m-auto w-fit">Import</h1>
            <h1 className="uppercase ml-auto w-fit">Share</h1>
            <p className="font-montserrat w-full text-lg mt-10 text-start">
              Record, Import and share audio as urls to anyone anywhere. With
              the use of rcord and it's technologies you don't have to worry
              about large audio or video files in your project
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
