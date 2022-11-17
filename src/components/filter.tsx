import React from 'react'
import Andar from './select/andar'
import Espaco from './select/space'
import Numeracao from './select/number'
import Categoria from './select/category'
import Search from './search'

function filter() {
  return (
    <div className='py-44 px-14'>
      <div className="px-8 max-w-md h-96 container bg-gray-300 rounded-3xl border border-gray-400 shadow-sm space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-5">
            <Andar />
            <Espaco />
            <Numeracao />
            <Categoria />
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
      <Search />
    </div>
  )
}

export default filter