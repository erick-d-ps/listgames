import { Container } from "@/components/container";
import Image from "next/image";
import { FaShareAlt } from "react-icons/fa";

import { FavoritCard } from './components/favorite'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meu perfil - ListGames sua plataforma de jogos!",
  description: "perfil usuario | ListGames Sua plataforma de jogos!"
}

export default function profile() {
  return (
    <main className="text-white">
      <Container>
        <section className="mt-8 mb-6 flex flex-col items-center justify-between relative gap-3 sm:flex-row">
          <div className="w-full flex items-center gap-4 text-lg flex-col sm:flex-row justify-center sm:justify-normal">
            <Image
              src="/user.png"
              alt="iamgem perfil do usuario"
              className="rounded-full w-56 h-56 object-cover"
              width={100}
              height={100}
              quality={100}
              priority
            />
            <h1 className="font-bold text-2xl">Meus perfil</h1>
          </div>
          <div className="sm:absolute top-0 right-0 flex gap-3 items-center justify-center mt-2">
            <button className="bg-gray-800 px-4 py-3 rounded-lg">
              Configurações
            </button>
            <button className="bg-gray-800 px-4 py-3 rounded-lg">
              <FaShareAlt size={24} color="#fff" />
            </button>
          </div>
        </section>

        <section className="flex flex-wrap gap-5 flex-col md:flex-row">
          <div className="flex-grow flex-wrap"> 
            <FavoritCard/>
          </div>
          
          <div className="flex-grow flex-wrap"> 
            <FavoritCard/>
          </div>

          <div className="flex-grow flex-wrap"> 
            <FavoritCard/>
          </div>
        </section>
      </Container>
    </main>
  );
}
