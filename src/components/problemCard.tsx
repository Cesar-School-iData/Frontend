import Authentication from './authen/authentication'
import Details from './problemDetails'
import React, { useEffect, useState } from 'react'
import requester from '../api/inicialize'

function problemCard() {
  const [test, setTest] = useState<any>([]);

  useEffect(() => {
    requester.get('/problema')
      .then((data: any) => {
        setTest(data.data)
        console.log(data.data)
      })
  }, []);

  return (
    test.map((teste: any) => (
      <div className='py-4 px-8 w-96 h-32 bg-branco-200 rounded-3xl shadow-2xl hover:border hover:border-preto-100'>
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-2">
            <div>
              <div className="text-preto-100 text-lg font-semibold">{teste.especificacao}</div>
              <div className="text-cinza-950 font-medium">{teste.ambiente.andar}° andar - {teste.ambiente.espaco}</div>
            </div>
            <hr />
            <div className='flex justify-between'>
              <Details />
              <Authentication />
            </div>
          </div>
        </div>
      </div >
    ))
  )
}

export default problemCard