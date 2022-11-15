import { Dialog, Transition } from '@headlessui/react'
import React from "react";
import { Fragment, useState } from 'react'
import Authentification from '../components/authenticationDuplicate'

function authentification() {
  const [isOpen, setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={openModal} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Mais detalhes</button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enterFrom="opacity-0"
            enterTo="opacity-100 scale-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0"
            enter="ease-out duration-300"
            leave="ease-in duration-200">
            <div className="fixed inset-0 bg-black bg-opacity-50">
              <div className='bg-stone-100 rounded-3xl shadow-2xl container max-w-lg max-h-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <header className="flex flex-col">
                  <div className="px-10 py-8">
                    <button className='absolute top-4 right-6 rounded-full text-black font-semibold hover:bg-blue-50 py-0 px-2' onClick={closeModal}>X</button>
                    <div className="text-xl text-black font-bold">Problema id</div>
                    <p className='text-gray-400 font-normal'>Prédio id</p>
                    <div className='py-5 space-y-1'>
                      <div className='flex space-x-3'>
                        <div className="text-gray-600 font-medium flex">Andar:</div>
                        <div className='text-gray-500 font-normal flex'>Andar id</div>
                      </div>
                      <div className='flex space-x-3'>
                        <div className="text-gray-600 font-medium">Espaço:</div>
                        <div className='text-gray-500 font-normal flex'>Espaço id</div>
                      </div>
                      <div className='flex space-x-3'>
                        <div className="text-gray-600 font-medium">Numeração:</div>
                        <div className='text-gray-500 font-normal flex'>Numeração id</div>
                      </div>
                      <div className='flex space-x-3'>
                        <div className="text-gray-600 font-medium">Categoria:</div>
                        <div className='text-gray-500 font-normal flex'>Categoria id</div>
                      </div>
                      <div className='flex space-x-3'>
                        <div className="text-gray-600 font-medium">Detalhes:</div>
                        <div className='text-gray-500 font-normal flex'>Detalhes id</div>
                      </div>
                    </div>
                    <div className="text-gray-600 font-medium top-28 left-72 absolute">N° de pessoas com o</div>
                    <div className="text-gray-600 font-medium top-32 left-72 absolute">mesmo problema:</div>
                    <div className="text-gray-700 font-normal top-32 right-6 absolute">3</div>
                    <Authentification />
                    <div className='text-gray-700 font-normal text-xs'>Problema reportado em:</div>
                    <div className="text-gray-600 font-medium py-5">Comentários adicionais:</div>
                  </div>
                  <div className='bg-gray-200 w-full h-40 container mb-8 flex justify-center content-center'>
                    <div className='w-96 h-28 bg-white rounded-3xl my-auto'></div>
                  </div>
                </header>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition >
    </>
  );
};

export default authentification