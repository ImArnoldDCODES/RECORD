/* eslint-disable react/no-unescaped-entities */
export default function SignIn() {
  return (
    <main className="flex w-screen h-screen bg-[#333332]">
      <div className="bg-[#595757] w-[50%] flex items-center justify-center">
        <h3 className="text-white text-[160px] text-center">rcord.</h3>
      </div>
      <div className="w-[50%] flex">
        <h5 className="absolute right-0 m-4">
          Don't have an account?{" "}
          <span className="text-[#595757] hover:text-[#adadad] cursor-pointer">
            Sign Up
          </span>
        </h5>
        <div className="w-[60%] m-auto">
          <h2 className="text-6xl text-center">Sign In</h2>
          <form className="flex flex-col mt-10">
            <label className="mb-2">Email</label>
            <input
              type="email"
              className="w-[70%] h-[2rem] pl-2 mb-5 rounded"
            />
            <label className="mb-2">Password</label>
            <input type="password" className="w-[70%] h-[2rem] pl-2 rounded" />
            <div className="mt-10">
              <button className="bg-[#747976] px-5 py-1 rounded">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
