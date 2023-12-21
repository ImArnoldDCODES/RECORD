import Link from "next/link";
import { promises as fs } from "fs";

export default async function Index() {
  const file = await fs.readFile(
    process.cwd() + "/src/utils/tech.json",
    "utf8"
  );
  const data = JSON.parse(file);

  interface Data {
    title: string;
    desc: string;
    href: string;
  }

  return (
    <main className="relative flex min-h-screen flex-col px-10 bg-[#333332]">
      <h2 className="text-[5em]">/Tech</h2>
      <hr />
      <div className="mt-10 h-full grid md:grid-cols-3 gap-4">
        {(data as Data[]).map((data) => (
          <>
            <div className="bg-[#70706f] hover:bg-[#474746] cursor-pointer h-[12rem] px-6 rounded-lg relative">
              <h3 className="text-[2em] mt-2 font-kanit">{data.title}</h3>
              <h5 className="text-[1em] font-anton">{data.desc}</h5>
              <Link href={data.href} className="absolute bottom-[.6rem]">
                <button className="bg-[#474746] hover:bg-[#70706f] px-3 py-2 rounded-lg">
                  Try Out
                </button>
              </Link>
            </div>
          </>
        ))}
      </div>
    </main>
  );
}
