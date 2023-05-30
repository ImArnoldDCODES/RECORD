import Link from "next/link";

export default function Navbar() {
  return (
    <div className="mt-5 mb-10 w-full flex items-center justify-between">
      <span className="text-3xl font-kanit font-bold cursor-pointer">
        <Link href="/">R.</Link>
      </span>
      <Link href="/signin">
        <button className="bg-[#747976] font-kanit rounded px-5 py-1 cursor-pointer hover:brightness-75">
          Log In
        </button>
      </Link>
    </div>
  );
}
