import Image from "next/image";
import Link from "next/link";
import { LiaGamepadSolid } from "react-icons/lia";

export function Header() {
  return (
    <header className="w-full h-28 bg-gray-200 text-black px-2">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between">
        <nav className="flex justify-center items-center gap-4">
          <Link href="/">
            <Image
              src="/log.svg"
              alt="logo do site listGames"
              width={168}
              height={39}
              quality={100}
              priority
              className="w-full"
            />
          </Link>

          <Link 
          href="/"
          className="font-medium text-neutral-700 hover:text-emerald-500"
          >Games</Link>
          <Link 
          href="/profile"
          className="font-medium text-neutral-700 hover:text-emerald-500"
          >Perfil</Link>
        </nav>
        <div className="hidden sm:flex justify-center items-center">
          <Link href="/profile">
            <LiaGamepadSolid size={34} color="#475569"/>
          </Link>
        </div>
      </div>
    </header>
  );
}
