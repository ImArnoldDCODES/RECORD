/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Index() {
  return (
    <main className="flex lg:flex-row flex-col w-screen h-screen bg-[#333332]">
      <div className="bg-[#595757] lg:w-[50%] w-screen flex items-center justify-center">
        <h3 className="text-white lg:text-[160px] text-[70px] text-center">rcord.</h3>
      </div>
      <div className="lg:w-[50%] w-screen flex">
        <h5 className="absolute right-0 bottom-0 m-4">
          Don't have an account?
          <span className="text-[#595757] hover:text-[#adadad] cursor-pointer">
            <Link href="/signin"> Sign In </Link>
          </span>
        </h5>
        <div className="lg:w-[60%] w-[80%] h-fit m-auto">
          <h2 className="lg:text-6xl text-4xl text-center">Sign Up</h2>
          <form className="flex flex-col mt-10">
            <label className="mb-2">Email</label>
            <input
              type="email"
              className="w-full h-[2rem] pl-2 mb-5 rounded"
            />
            <label className="mb-2">Password</label>
            <input
              type="password"
              className="w-full h-[2rem] pl-2  mb-5 rounded"
            />
            <label className="mb-2">Confirm Password</label>
            <input type="password" className="w-full h-[2rem] pl-2 rounded" />
            <div className="mt-10">
              <button className="bg-[#747976] px-5 py-1 rounded font-kanit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
