import Head from 'next/head'
import React from 'react'
import Adm from '../components/authen/administrator'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Idata</title>
      </Head>
      <div className='bg-cinza-100 bg-no-repeat bg-center w-screen h-screen'>
        <div className='flex space-x-9 px-14'>
          <h3 className='text-branco-100 text-base font-semibold mt-7 flex'>Sobre</h3>
          <h3 className='text-branco-100 text-base font-semibold mt-7 flex'>Segurança</h3>
          <h3 className='text-branco-100 text-base font-semibold mt-7 flex'>Ajuda</h3>
        </div>
        <h1 className='text-branco-100 text-6xl text-center font-semibold mt-36'>IData</h1>
        <h2 className='text-branco-100 text-center font-semibold mt-6 mx-auto w-1/3'>O IData é uma plataforma direcionada para o reporte de problemas de infraestrutura encontrados pelos prédios do CESAR.</h2>
        <div className='mt-16 pb-6 flex justify-center sm:px-6 lg:px-8'>
          <Link href="/problem">
            <button className='flex text-branco-200 bg-laranja-100 px-8 py-1 rounded-full border-laranja-100 border shadow-sm hover:border hover:border-branco-200'>Quero reportar um problema!</button>
          </Link>
        </div>
        <Adm />
      </div>
    </div>
  )
}