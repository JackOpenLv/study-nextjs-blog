import Link from "next/link";
import Image from "next/image";


const NavList = [
  {id:"0", href: "/blogs", title: "Blogs"},
  {id:"1", href: "/produces", title: "Produces"},
];

export default function Header() {
    return (
      <header className="flex flex-row border-b border-0 border-solid w-full space-x-10 p-3">
        <Title />
        <NavArray />
      </header>
    );
}

function Title() {
    return (
      <>
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
            <p>{"Ming's Zone"}</p>
        </Link>
      </>
    );
}

function NavArray() {
  return NavList.map((navInfo) => {
    return <Link
      href={navInfo.href}
      className="flex items-center text-xl hover:text-blue-500"
      key={navInfo.id}
    >
    {navInfo.title}
    </Link>;
  });
}