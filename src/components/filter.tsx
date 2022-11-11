import React from 'react'

function filter() {
  return (
    <div className='py-44 px-14'>
      <div className="px-8 max-w-md h-96 bg-gray-300 rounded-3xl border border-gray-400 shadow-sm space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-10">
            <p className="text-lg text-gray-500 font-bold">
              Andar
            </p>
            <p className="text-lg text-gray-500 font-bold">
              Espaço
            </p>
            <p className="text-lg text-gray-500 font-bold">
              Numeração
            </p>
            <p className="text-lg text-gray-500 font-bold">
              Categoria do problema
            </p>
          </div>
        </div>
        <div className='py-4 px-8 w-52 h-64 bg-gray-400 rounded-3xl shadow-3xl'>
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <p className="text-white font-medium">
                Selecione
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default filter