import React from 'react'
import Authentication from '../components/authentication'

function problemCount() {
    return (
        <div>
            <div className='py-44 px-2'>
                <div className='flex rounded-md cursor-pointer border border-gray-300 bg-white shadow-sm hover:border hover:border-gray-600'>
                    {/* Votes  max-w-3xl*/}
                    <div>
                        <Authentication />
                    </div>
                    {/* Header */}
                    {/* Body */}
                    {/* Footer */}
                </div>
                {/* AUTHENTICATION */}
            </div>
        </div>
    )
}

export default problemCount

/*
    <div className='flex  max-w-md shadow border-b'>
        <div className='px-8 py-8'>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>
                    Email
                </label>
                <input type="email"
                    className='h-10 w-96 border mt-2 px- py-2'>
                </input>
*/