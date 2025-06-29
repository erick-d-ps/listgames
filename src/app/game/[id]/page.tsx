import { Container } from "@/components/container";
import { GameProps, PropeParams } from "@/utils/types/game";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Label } from "../components/label";
import { GameCard } from "@/components/GameCard";
import { Metadata } from "next";

export async function generateMetadata({params}: PropeParams): Promise<Metadata>{
  try {
    const response: GameProps = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${params.id}`,
      {next: { revalidate: 60 }}
    )
    .then((res) => res.json())
    .catch(() => {
      return{
        title: "ListGames - Descubra jogos incríveis para se divertir "
      }
    })

    return{
      title: response.title,
      description: `${response.description.slice(0, 100)}...`,
      openGraph: {
        title: response.title,
        images: [response.image_url]
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
    }
    
  } catch (err) {
    return{
      title: "ListGames - Descubra jogos incríveis para se divertir "
    }
  }
}

async function getData(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`,
      {next: { revalidate: 60 }}
    );
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

async function getGameSorted() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { cache: "no-store" }
    );
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Detalhe({params}: PropeParams) {
  const data: GameProps = await getData(params.id);
  const gameSorted: GameProps = await getGameSorted();

  if (!data) {
    redirect("/");
  }

  return (
    <main className="w-full text-white">
      <div className="bg-gray-800 h-80 sm:h-96 w-full relative">
        <Image
          className="object-cover w-full h-80 sm:h-96 opacity-90 mt-4 "
          src={data.image_url}
          alt={data.title}
          priority={true}
          fill={true}
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw)"
        />
      </div>
      <Container>
        <h1 className="font-bold text-xl my-5 mt-10">{data.title}</h1>
        <p className="">{data.description}</p>

        <h2 className="font-bold text-lx mt-7 mb-2">Plataformas</h2>
        <div className="flex gap-2 flex-wrap">
          {data.platforms.map((item) => (
            <Label name={item} key={item} />
          ))}
        </div>
        <h2 className="font-bold text-lx mt-7 mb-2">Categorias</h2>
        <div className="flex gap-2 flex-wrap">
          {data.categories.map((item) => (
            <Label name={item} key={item} />
          ))}
        </div>

        <p className="mt-7 mb-2">
          <strong>Data de lançamento: </strong>
          {data.release}
        </p>

        <h2 className="font-bold text-lx mt-7 mb-2">Jogo Recomendado:</h2>  
        <div className="flex">
          <div className="flex-grow">
            <GameCard data={gameSorted}/>
          </div>
        </div>
      </Container>
    </main>
  );
}
