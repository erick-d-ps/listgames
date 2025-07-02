# ListGames


![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Next.JS](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)

Desenvolvido com **Next.js, React e TypeScript,** o **ListGames** é uma aplicação web projetada para simular um sistema de compra de jogos. A plataforma oferece aos usuários a capacidade de explorar detalhes sobre diversos títulos, consumindo informações de uma API. Este projeto foi concebido com o propósito central de aprofundar meu conhecimento e prática com os recursos mais recentes do Next.js, em particular os **Server Components** e **Client Components** no **App Router**, representando um marco importante em meus estudos de desenvolvimento web. 
👉 Visite: [https://listgames-wheat.vercel.app/](https://listgames-wheat.vercel.app/)

---

## ✨ Funcionalidades

-  **Página Inicial Interativa**:  Uma página inicial atraente que serve como porta de entrada para a plataforma, apresentando o conteúdo principal e a proposta do site.
-  **Pesquisa Dinâmica de Jogos** Uma funcionalidade de pesquisa robusta que, ao ser utilizada, direciona o usuário para uma página de resultados exibindo os jogos encontrados de forma clara e organizada.
-  **Páginas de Detalhes do Jogo**:  Ao selecionar qualquer jogo, o usuário é direcionado para uma página dedicada com informações completas, incluindo descrição, imagens e outros detalhes relevantes sobre o título.
-  **Área de Perfil Personalizada** Uma seção de perfil intuitiva que simula um dashboard, permitindo ao usuário gerenciar e adicionar jogos à sua lista de favoritos, personalizando sua experiência na plataforma.


 

---

## 🛠️ Tecnologias Utilizadas

- [Next.js](https://nextjs.org/): (App Router, Server/Client Components): A base da aplicação, aproveitando os novos paradigmas do Next.js para renderização otimizada.  
- [TypeScript](https://www.typescriptlang.org/): Garantindo maior segurança e escalabilidade ao código através da tipagem estática.
- [React](https://react.dev/): Para a construção da interface de usuário interativa.
- [TailwindCSS](https://tailwindcss.com/):Para a estilização e responsividade da interface de usuário
- [Metadados Dinâmicos](https://nextjs.org/docs/app/api-reference/functions/generate-metadata):  Implementação de metadados dinâmicos (SEO) que são gerados com base no conteúdo da página, como o título e a descrição de cada jogo, otimizando a visibilidade nos mecanismos de busca. 
- [React Icons](https://react-icons.github.io/react-icons/) para ícones

---

## 🔌 APIs Utilizadas
- **Lista de Todos os Jogos:**
  - Endpoint: https://sujeitoprogramador.com/next-api/?api=games
  - Finalidade: Utilizado para popular a lista completa de jogos disponível na plataforma.
- **Destaque do Dia:**
  - Endpoint: https://sujeitoprogramador.com/next-api/?api=game_day
  - Finalidade: Traz um jogo diferente a cada acesso, ideal para a seção de destaque da página inicial, oferecendo uma experiência dinâmica ao usuário.
- **Pesquisa de Jogos por Título:**
  - Endpoint: https://sujeitoprogramador.com/next-api/?api=game&title={nome do jogo}
  - Finalidade: Permite buscar jogos específicos utilizando o título como parâmetro, exibindo os resultados em uma página dedicada.
- **Pesquisa de Jogos por Título:**
  - Endpoint: https://sujeitoprogramador.com/next-api/?api=game&id={id do jogo}
  - Finalidade: Ao clicar em um jogo, este endpoint é usado para buscar informações detalhadas do jogo com base em seu ID único, levando o usuário à página de detalhes.


## 🚀 Como Rodar o Projeto Localmente

```bash
# Clone o repositório
git clone https://github.com/erick-d-ps/listgames.git

# Entre no diretório do projeto
cd listGames

# Instale as dependências
npm install

# Execute o projeto
npm run dev
