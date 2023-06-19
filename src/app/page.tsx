/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { NavBar, Footer } from "@/components/index";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center px-10 bg-[#333332]">
      <NavBar />
      {/* <Footer /> */}
      <div className="2xl:w-[80%] w-full">
        <div className="relative">
          <div className="w-[80%] h-fit mb-auto mx-auto lg:block hidden">
            <h1 className="uppercase">Create</h1>
            <h1 className="uppercase m-auto w-fit mt-[-10%]">Import</h1>
            <h1 className="uppercase ml-auto w-fit  mt-[-10%]">Share</h1>
            <p className="font-montserrat w-[16rem] absolute top-[70%] text-lg">
              Record, Import and share audio as urls to anyone anywhere
            </p>
          </div>
          <div className="w-[100%] h-fit mb-auto mx-auto  lg:hidden block">
            <h1 className="uppercase">Create</h1>
            <h1 className="uppercase m-auto w-fit">Import</h1>
            <h1 className="uppercase ml-auto w-fit">Share</h1>
            <p className="font-montserrat w-full text-lg mt-10 text-start">
              Record, Import and share audio as urls to anyone anywhere. With
              the use of rcord and it technologies you don't have to worry about
              large audio or video files in your project
            </p>
          </div>
        </div>
        {/* <div className="w-full mt-10">
          <h3 className="text-5xl uppercase">
            About Us
            <span>
              <hr className="w-[6rem] mt-2" />
            </span>
          </h3>
          <div className="my-10 w-[70%] m-auto">
            <h2 className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in
              omnis beatae sint aspernatur, aut quis suscipit placeat ducimus
              dignissimos, doloribus dicta illo sapiente ratione! Enim possimus
              commodi eveniet nobis! Commodi doloremque veritatis vitae
              molestiae culpa tempore dolorem nostrum molestias voluptatum
              obcaecati, nisi fugit, magnam voluptatem facere in, unde animi.
              Dignissimos explicabo nulla eum sequi ipsa quas animi sit
              doloribus. Tempora doloribus a maxime sed voluptatem fuga nisi
              nesciunt, accusantium vitae, repellat optio. Quos, tenetur. Dicta
              recusandae quidem ipsa nesciunt iure asperiores? Odio repellendus
              sint id placeat, explicabo quis eos!
            </h2>
          </div>
        </div> */}

        {/* <div className="w-full mt-[10rem]">
          <h3 className="text-5xl uppercase">
            How it works
            <span>
              <hr className="w-[6rem] mt-2" />
            </span>
          </h3>
          <div className="my-10 w-[70%] m-auto">
            <h2 className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in
              omnis beatae sint aspernatur, aut quis suscipit placeat ducimus
              dignissimos, doloribus dicta illo sapiente ratione! Enim possimus
              commodi eveniet nobis! Commodi doloremque veritatis vitae
              molestiae culpa tempore dolorem nostrum molestias voluptatum
              obcaecati, nisi fugit, magnam voluptatem facere in, unde animi.
              Dignissimos explicabo nulla eum sequi ipsa quas animi sit
              doloribus. Tempora doloribus a maxime sed voluptatem fuga nisi
              nesciunt, accusantium vitae, repellat optio. Quos, tenetur. Dicta
              recusandae quidem ipsa nesciunt iure asperiores? Odio repellendus
              sint id placeat, explicabo quis eos!
            </h2>
          </div>
        </div> */}
      </div>
    </main>
  );
}
