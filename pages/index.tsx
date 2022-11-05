import Head from 'next/head'
import React from 'react'
import Header from '../components/header'
import Problem from '../components/problem'
import QrCode from '../components/newProblem'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Idata</title>
      </Head>
      <Header />
      <Problem />
      <QrCode />
    </div>
  )
}