import React from 'react'
import Authentication from './authentication'

function problemCard({/* { problem } */ }) {
    {/* <div key={problem.id} ></div> */ }
    return (
        <div className='py-4 px-8 w-96 h-40 bg-white rounded-3xl shadow-2xl hover:border hover:border-gray-600'>
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-5">
                    <div>
                        <div className="text-lg text-black font-semibold">Problema id</div> {/* problem.problemaNome */}
                        <div className="text-slate-500 font-medium">Andar id - Espaço id</div>
                    </div>
                    <hr />
                    <div className='flex justify-between'>
                        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Mais detalhes</button>
                        <Authentication />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default problemCard