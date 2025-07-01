"use client";

import { useState } from 'react';
import { FiEdit, FiX } from 'react-icons/fi'

export function FavoritCard() {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [gameName, setGameName] = useState("")

  function handleButton(){
    setShowInput(!showInput)

    if(input !== ""){
      setGameName(input)
    }

    setInput("")
  }

  return (
    <div className="text-black w-full bg-gray-200 p-4 h-44 rounded-lg flex justify-between flex-col ">
     { showInput ? (
      <div className='flex items-center justify-center gap-3 '>
        <input 
          placeholder='Digite o nome do jogo...'
          className='bg-gray-800 text-white rounded-lg w-full h-8 px-2'
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleButton}>
          <FiX size={24} color='#000000'/>
        </button>
      </div>
     ) : (
      <button 
      onClick={handleButton}
      className='self-start hover:scale-110 duration-200 transition-all'>
        <FiEdit size={24} color='#000000'/>
      </button>
     )}

     {gameName && (
      <div>
        <samp className='text-black'>Jogo favorito:</samp>
        <p className='font-bold text-black'>{gameName}</p>
      </div>
     )}
      {!gameName && (
        <p className='font-bold text-black'>Adicionar jogo</p>
      )}
    </div>
  );
}
