import Link from "next/link";
import {BsTwitter} from "react-icons/bs"

export default function Footer() {
  return (
    <div className="w-full h-[5rem] absolute bottom-0 bg-[#333332] px-10 flex items-center justify-between">
      <span className="text-3xl font-kanit font-bold cursor-pointer">
        <Link href="/">R.</Link>
      </span>
      <span className="text-xl">danielsarnold010@gmail.com</span>
      <div>

      </div>
    </div>
  );
}
