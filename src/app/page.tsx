import Image from "next/image";
import { Container } from "@/components/container";
import { GamePrps } from "@/utils/types/game";
import Link from "next/link";

async function getListGame() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`
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
        <h1 className="text-center font-bold text-xl mt-8 mb-5">
          Separamos um jogo exclusivo pra você
        </h1>
        <Link href={`/game/${listGame.id}`}>
          <section className="w-full bg-black rounded-lg">
            <Image
              src={listGame.image_url}
              alt={listGame.title}
              priority={true}
              width={100}
              height={100}
            />
          </section>
        </Link>
      </Container>
    </main>
  );
}
