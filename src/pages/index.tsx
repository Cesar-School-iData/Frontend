import Head from 'next/head'
import React from 'react'
import Adm from '../components/administrator'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Idata</title>
      </Head>
      <div className='bg-gray-400'>
        <h3 className='text-lg'>Sobre</h3>
        <h3 className='text-lg'>Segurança</h3>
        <h3 className='text-lg'>Ajuda</h3>
        <h1 className='text-2xl'>IData</h1>
        <h2>TEXTO</h2>
        <Link href="/problem">
          <button className='text-white bg-black px-8 py-1 rounded-full border-gray-600 border shadow-sm hover:border hover:border-gray-300'>Quero reportar um problema!</button>
        </Link>
        <Adm />
      </div>
    </div>
  )
}