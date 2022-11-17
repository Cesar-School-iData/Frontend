import { Dialog, Transition } from '@headlessui/react'
import React from "react";
import { Fragment, useState, useEffect } from 'react'
import Authentification from './authen/authenticationDuplicate'
import requester from '../api/inicialize'

function detail() {
  const [isOpen, setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [test, setTest] = useState<any>([]);

  useEffect(() => {
    requester.get('/problema')
      .then((data: any) => {
        setTest(data.data)
        console.log(data.data)
      })
  }, []);

  return (
    <>
      <button onClick={openModal} className="px-4 py-1 text-sm text-branco-200 bg-laranja-100 font-semibold rounded-full border border-laranja-100 hover:text-white hover:border-branco-200 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Mais detalhes</button>
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
              <div className='bg-branco-200 rounded-3xl shadow-2xl container max-w-lg max-h-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <header className="flex flex-col">
                  <div className="px-10 py-8">
                    <button className='absolute top-4 right-6 rounded-full text-preto-100 font-semibold hover:bg-cinza-800 py-0 px-2' onClick={closeModal}>X</button>
                    <div className="text-xl text-preto-200 font-bold">Parede</div>
                    <p className='text-cinza-950 font-normal'>Brum</p>
                    <div className='py-5 space-y-1'>
                      <div className='flex space-x-3'>
                        <div className="text-cinza-200 font-medium flex">Andar:</div>
                        <div className='text-cinza-950 font-normal flex'>1 ° andar</div>
                      </div>
                      <div className='flex space-x-3'>
                        <div className="text-cinza-200 font-medium">Espaço:</div>
                        <div className='text-cinza-950 font-normal flex'>Sala</div>
                      </div>
                      <div className='flex space-x-3'>
                        <div className="text-cinza-200 font-medium">Numeração:</div>
                        <div className='text-cinza-950 font-normal flex'>10</div>
                      </div>
                      <div className='flex space-x-3'>
                        <div className="text-cinza-200 font-medium">Categoria:</div>
                        <div className='text-cinza-950 font-normal flex'>Estrutura</div>
                      </div>
                      <div className='flex space-x-3'>
                        <div className="text-cinza-200 font-medium">Detalhes:</div>
                        <div className='text-cinza-950 font-normal flex'>1 ° andar</div>
                      </div>
                    </div>
                    <div className="text-cinza-200 font-medium top-28 left-72 absolute">N° de pessoas com o</div>
                    <div className="text-cinza-200 font-medium top-32 left-72 absolute">mesmo problema:</div>
                    <div className="text-cinza-200 font-normal top-32 right-6 absolute">3</div>
                    <Authentification />
                    <div className='text-cinza-200 font-normal text-xs'>Problema reportado em:</div>
                    <div className="text-cinza-200 font-medium py-5">Comentários adicionais:</div>
                  </div>
                  <div className='bg-cinza-800 w-full h-40 container mb-8 flex justify-center content-center'>
                    <div className='w-96 h-28 bg-branco-100 rounded-3xl my-auto'></div>
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

export default detail