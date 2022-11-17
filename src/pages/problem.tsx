import React from 'react'
import ProblemReport from '../components/problemList'
import ProblemFilter from '../components/filter'

function problem() {
  const qrcode = (event: React.MouseEvent<HTMLButtonElement>) => {
    window.open("https://forms.gle/o4rcFTQMQRQNa6Ur6")
  };
  return (
    <div>
      <div className='bg-branco-300'>
        <div className='bg-laranja-400 w-screen h-20 drop-shadow-xl'>
          <div className='flex space-x-9 px-14 '> {/* px-40 */}
            <h3 className='text-branco-100 text-base font-semibold mt-7 flex'>Sobre</h3>
            <h3 className='text-branco-100 text-base font-semibold mt-7 flex'>Segurança</h3>
            <h3 className='text-branco-100 text-base font-semibold mt-7 flex'>Ajuda</h3>
          </div>
          <div className='flex justify-end sm:px-16 -mt-7'>
            <button className="flex text-branco-200 bg-laranja-100 px-8 py-1 rounded-full border-laranja-100 border shadow-sm hover:border hover:border-branco-200" onClick={qrcode}>Quero reportar um novo problema</button>
          </div>
          <h2 className='text-preto-200 text-5xl text-start font-semibold mt-12 px-14'>Seu problema se encontra aqui?</h2>
          <div className='flex space-x-52 px-14'>
            <h3 className='text-preto-200 text-3xl font-semibold mt-12 flex'>Problemas reportados</h3>
            <h3 className='text-preto-200 text-3xl font-semibold mt-12 flex'>Filtro</h3>
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