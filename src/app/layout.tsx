import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import { Header } from "@/components/header/indx";

const inter = Inter({
  subsets: ['latin'], 
  display: 'swap',   // Ajuda a exibir o texto enquanto a fonte carrega
  variable: '--font-inter', // Define uma variável CSS para fácil uso
});


export const metadata: Metadata = {
  title: "List Games - Descubra jogos incríveis para se divertir.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
