import { Container } from "@/components/container";
import { GameProps } from "@/utils/types/game";
import Image from "next/image";

async function getData(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`
    );
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Detalhe({
  params: { id },
}: {
  params: { id: string };
}) {
  const data: GameProps = await getData(id);

  return (
    <main className="w-full text-white">
      <div className="bg-gray-800 h-80 sm:h-96 w-full relative">
        <Image
          className="object-cover w-full h-80 sm:h-96 opacity-90 rounded-xl mt-4 "
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

      </Container>
    </main>
  );
}
