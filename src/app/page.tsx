import Image from "next/image";
import { Container } from "@/components/container";
import { GamePrps } from "@/utils/types/game";
import Link from "next/link";
import { BsArrowRightSquare } from "react-icons/bs"
import { Input } from "@/components/input"

async function getListGame() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`, {next: {revalidate: 320}}
    );
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Home() {
  const listGame: GamePrps = await getListGame();
  return (
    <main className="w-full">
      <Container>
        <h1 className="text-center text-white font-bold text-xl mt-8 mb-5">
          Separamos um jogo exclusivo pra você
        </h1>
        <Link href={`/game/${listGame.id}`}>
          <section className="w-full bg-black rounded-lg relative ">
            <div className="w-full max-h-96 h-96 rounded-lg">
              <div className="absolute z-20 bottom-0 flex justify-center items-center gap-2 p-3">
                <p className="font-bold text-xl text-white">{listGame.title}</p>
                <BsArrowRightSquare size={24} color="#fff"/>
              </div>
              <Image
                src={listGame.image_url}
                alt={listGame.title}
                priority={true}
                fill={true}
                className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw"
              />
            </div>
          </section>
        </Link>
        <div>
          <Input/>
        </div>
      </Container>
    </main>
  );
}
