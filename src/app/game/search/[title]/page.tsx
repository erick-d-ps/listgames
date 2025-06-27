import { GameProps } from "@/utils/types/game";
import { Container } from "@/components/container";
import { Input } from "@/components/input";
import { GameCard } from "@/components/GameCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `List Games - Encontrados`,
    description: "Jogos organizados e separados.",
    keywords: ['games', 'jogos', 'steam'],
    openGraph: {
      images: [`${process.env.PROJECT_URL}/preview.png`]
    },
    robots:{
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
      }
    }
  };

async function getData(title: string) {
  try {
    const decodeTitle = decodeURI(title)
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`
    );
    return res.json();
  } catch (err) {
    return null;
  }
}

export default async function Search({
  params: { title },
}: {
  params: { title: string };
}) {
  const games: GameProps[] = await getData(title);

  return (
    <main className="w-full text-black">
      <Container>
        <Input />
        <h1 className="text-white text-xl mt-8 mb-5">
          Veja o que encontramos na nossa base:
        </h1>
        {!games && (
          <p className="text-white text-xl">Esse jogo não foi encontrado!..</p>
        )}

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {games && games.map((item) => (
            <GameCard data={item} key={item.id} />
          ))}
        </section>
      </Container>
    </main>
  );
}
