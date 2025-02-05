import Link from "next/link";


export default function Home() {
    return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8">
      <main className="flex flex-col gap-8 items-center row-start-2">
        <h1 className="text-3xl">{"Ming's Zone"}</h1>
        <ol className="list-decimal">
          <li>Read some tech blog</li>
          <li>Find out produce of mine and get it if you need.</li>
        </ol>
        <div className="flex flex-col item-center justify-items-center gap-8 sm:flex-row">
          <Link
            href='/blogs'
            className="rounded-full border border-solid flex items-center justify-items-center gap-2 text-sm sm:text-base h-10 px-4"
          >
            Read Blog
          </Link>
          <Link
            href='/produces'
            className="rounded-full border border-solid h-10 px-4 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            Find out produces
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 ">
        
      </footer>
    </div>
    );
}