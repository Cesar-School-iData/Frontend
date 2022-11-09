import React from 'react'
import ProblemReport from '../components/problemBoard'
import ProblemFilter from '../components/filter'

function problem() {
  const qrcode = (event: React.MouseEvent<HTMLButtonElement>) => {
    window.open("https://forms.gle/o4rcFTQMQRQNa6Ur6")
  };
  return (
    <div>
      <div className='bg-white'>
        <div className='bg-gray-300 w-screen h-20 drop-shadow-xl'>
          <div className='flex space-x-9 px-14 '> {/* px-40 */}
            <h3 className='text-base font-semibold mt-7 flex'>Sobre</h3>
            <h3 className='text-base font-semibold mt-7 flex'>Segurança</h3>
            <h3 className='text-base font-semibold mt-7 flex'>Ajuda</h3>
          </div>
          <div className='flex justify-end sm:px-16 -mt-7'>
            <button className="flex text-white bg-black px-8 py-1 rounded-full border-gray-600 border shadow-sm hover:border hover:border-gray-300" onClick={qrcode}>Quero reportar um novo problema</button>
          </div>
          <h2 className='text-5xl text-start font-semibold mt-12 px-14'>Seu problema se encontra aqui?</h2>
          <div className='flex space-x-52 px-14'>
            <h3 className='text-3xl font-semibold mt-12 flex'>Problemas reportados</h3>
            <h3 className='text-3xl font-semibold mt-12 flex'>Filtro</h3>
          </div>
        </div>
        <div className='flex -space-x-12'>
          <ProblemReport />
          <ProblemFilter />
        </div>
      </div>
    </div>
  )
}

export default problem