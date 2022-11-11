import React from 'react'
import Authentication from './authentication'

function teste() {
  return (
    <div className='py-44 px-14'>
      <div className="container mx-auto px-8 max-w-md h-96 bg-gray-300 rounded-3xl border border-gray-400 shadow-sm space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <div className='py-4 px-8 w-96 h-40 bg-white rounded-3xl shadow-2xl hover:border hover:border-gray-600'>
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-5">
              <div>
                <p className="text-lg text-black font-semibold">
                  Problema id
                </p>
                <p className="text-slate-500 font-medium">
                  Andar id - Espaço id
                </p>
              </div>
              <hr />
              <div className='flex justify-between'>
                <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Ver detalhes</button>
                <Authentication />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default teste

{/* className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" */ }