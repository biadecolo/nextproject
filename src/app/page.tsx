"use client"
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  
  const [foto, setFoto] = useState('bolas');
  
  const abrirAlertaFoda = () => {
    setFoto('penis')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src={"/raccoon.gif"}
        width={500}
        height={500} alt={''}
      />
      <button className='bg-zinc-200 px-5 rounded-md m-0'>este guaxinim gostaria de namoralo</button>
      <button className='bg-sky-900 px-5 rounded-md m-0 text-white' onClick={abrirAlertaFoda}>
        ignora isso aqui
      </button>
      <button className='bg-sky-900 px-5 rounded-md m-0 text-white'  onClick={() => {
        console.log('foto', foto);
      }}>e isso</button>

    </main>
  )
}
