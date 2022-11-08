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
      <div className='bg-gray-300 w-screen h-screen'>
        <div className='flex space-x-9 px-14'>
          <h3 className='text-base font-semibold mt-7 flex'>Sobre</h3>
          <h3 className='text-base font-semibold mt-7 flex'>Segurança</h3>
          <h3 className='text-base font-semibold mt-7 flex'>Ajuda</h3>
        </div>
        <h1 className='text-6xl text-center font-semibold mt-36'>IData</h1>
        <h2 className='text-center font-semibold mt-6'>TEXTO</h2>
        <div className='mt-16 pb-6 flex justify-center sm:px-6 lg:px-8'>
          <Link href="/problem">
            <button className='flex text-white bg-black px-8 py-1 rounded-full border-gray-600 border shadow-sm hover:border hover:border-gray-300'>Quero reportar um problema!</button>
          </Link>
        </div>
        <Adm />
      </div>
    </div>
  )
}