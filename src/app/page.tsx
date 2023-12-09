"use client"
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  
  const [foto, setFoto] = useState('bolas');
  const [rounded, setRounded] = useState(false);
  const [namorando, setNamorando] = useState('hidden');
  const [textodoButao, setTextodoButao] = useState('quer namora comigo');
  
  const arredondarOuEnquadrar = () => {
    setRounded(!rounded);
  }

  const Namorando = () => {
    if(namorando === 'hidden'){
      setNamorando('block');
      setTextodoButao('quer termina comigo intao');
    } 
    else{
      setNamorando('hidden');
      setTextodoButao('quer namora comigo');
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image className={`${rounded && 'rounded-full'}`}
        src={"/raccoon.gif"}
        width={500}
        height={500} alt={''}
      />
      <button className='bg-zinc-200 px-5 rounded-md m-0' onClick={Namorando}>{textodoButao}</button>
      <p className={`${namorando} text-red-500`} >agora voce esta me namorando</p>
      <button className='bg-sky-900 px-5 rounded-md m-0 text-white' onClick={arredondarOuEnquadrar}>
        guaxinim redondor ou quadrador
      </button>
      <button className='bg-sky-900 px-5 rounded-md m-0 text-white'  onClick={() => {
        console.log('foto', foto);
      }}>e isso</button>

    </main>
  )
}
