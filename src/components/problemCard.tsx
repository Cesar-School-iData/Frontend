import Authentication from './authen/authentication'
import Details from './problemDetails'
import axios from "axios";
import React, { useEffect, useState } from 'react'

function problemCard() {
  const requester = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      "Content-type": "application/json",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST',
    }
  });

  useEffect(() => {
    requester.get('/problema')
      .then((data: any) => {
        console.log(data)
      })
  }, []);

  return (
    <div className='py-4 px-8 w-96 h-40 bg-white rounded-3xl shadow-2xl hover:border hover:border-gray-600'>
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-5">
          <div>
            <div className="text-lg text-black font-semibold">Problema id</div>
            <div className="text-slate-500 font-medium">Andar id - Espaço id</div>
          </div>
          <hr />
          <div className='flex justify-between'>
            <Details />
            <Authentication />
          </div>
        </div>
      </div>
    </div >
  )
}

export default problemCard