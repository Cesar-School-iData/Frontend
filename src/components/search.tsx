import React from 'react'
import Image from 'next/image'

function search() {
    return (
        <button className='w-96 flex items-center space-x-2 border border-gray-900/10 shadow-sm px-3 py-1.5 hover:border-gray-300 focus:outline-none focus:border-gray-300 rounded-lg'>
            <svg className='flex-none -ml-1' width='20' height='20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><g fill="none" stroke="#848F91"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" /><circle cx="8" cy="8" r="7" /></g></svg>
            <span className='text-sm text-gray-400 flex-1 text-left'>buscar por problemas específicos, palavras-chave, usuário que reportou, etc...</span>
        </button>
    )
}

export default search