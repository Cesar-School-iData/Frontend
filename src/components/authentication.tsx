import { Dialog, Transition } from '@headlessui/react'
import Modal from '@mui/material/Modal';
import React from "react";
import { Fragment, useState } from 'react'
import xIcon from '../assets/closeIcon.svg'
import backIcon from '../assets/voltarIcon.svg'

function authentification() {
  const [isOpen, setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [isOpenSection, setIsOpenSection] = React.useState(false);
  const openModalNextSection = () => setIsOpenSection(true);
  const closeModalNextSection = () => setIsOpenSection(false);

  return (
    <>
      <div className='text-gray-400'>
        <button onClick={openModal} className="flex my-auto">
          <img className='voteButtons hover:text-blue-400' src="https://img.icons8.com/sf-regular/48/null/up.png" />
          <span className='text-xs font-bold text-black my-auto'>0</span>
        </button>
      </div>
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
            <div className="fixed inset-0 bg-black bg-opacity-25">
              <div className='bg-white rounded-3xl shadow-2xl container max-w-sm h-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <header className="flex flex-col px-5 py-11">
                  <button className='absolute top-2 right-4 rounded-full text-black font-semibold hover:bg-blue-50 py-0 px-2' onClick={closeModal}>
                    <img src={xIcon}></img>
                  </button>
                  <p className='text-slate-600 font-medium'>Para prosseguir, por favor, informe o seu e-mail institucional</p>
                  <input type="text" name="email" className="w-full rounded-lg border mt-3 py-3 px-4 border-gray-600"></input>
                  <div>
                    <button className='absolute bottom-11 inset-x-24 rounded-full text-white font-semibold bg-black hover:bg-slate-600 py-2 px-5' onClick={openModalNextSection}>Avançar</button>
                    <Modal open={isOpenSection}>
                      <div className='bg-white rounded-3xl shadow-2xl container max-w-sm h-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <header className="flex flex-col px-5 py-11">
                          <button className='absolute top-2 left-4 rounded-full text-black font-semibold hover:bg-blue-50 py-0 px-2' onClick={closeModalNextSection}>
                            <img src={backIcon}></img>
                          </button>
                          <button className='absolute top-2 right-4 rounded-full text-black font-semibold hover:bg-blue-50 py-0 px-2' onClick={closeModal}>
                            <img src={xIcon}></img>
                          </button>
                          <p className='text-slate-600 font-medium'>Deseja incluir um comentário adicional sobre o problema?</p>
                          <input type="text" name="observacao" className="w-full rounded-lg border mt-3 py-3 px-4 border-gray-600"></input>
                          <button className='absolute bottom-11 inset-x-24 rounded-full text-white font-semibold bg-black hover:bg-slate-600 py-2 px-5' onClick={closeModal}>Concluir</button>
                          <div className='bg-gray-300 rounded-full h-3 w-3 absolute bottom-3 inset-x-44'></div>
                          <div className='bg-gray-600 rounded-full h-3 w-3 absolute bottom-3 inset-x-52'></div>
                        </header>
                      </div>
                    </Modal>
                  </div>
                  <div className='bg-gray-600 rounded-full h-3 w-3 absolute bottom-3 inset-x-44'></div>
                  <div className='bg-gray-300 rounded-full h-3 w-3 absolute bottom-3 inset-x-52'></div>
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