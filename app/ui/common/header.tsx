import Link from "next/link";
import Image from "next/image";


export default function Header() {
    return (
      <header className="flex flex-row border-b border-0 border-solid w-full space-x-10 p-3">
        <Link
        href="/"
        className="flex items-center text-3xl space-x-3"
        >
            <Image
              src='/header-resource/mings-logo/mings-logo.001.jpeg'
              width={70}
              height={35}
              alt="ming's logo"
             />
            <p>Ming's Zone</p>
        </Link>
        <Link
          href='/blogs'
          className="flex items-center text-xl hover:text-blue-500"
        >
        Blogs
        </Link>
        <Link
          href='/produces'
          className="flex items-center text-xl hover:text-blue-500"
        >
          Produces
        </Link>
      </header>
    );
}

function Title() {
    return (
      <></>
    );
}

function MainNav() {
    return (
      <nav>
        
      </nav>
    );
}