import { Dialog, Transition } from "@headlessui/react"
import React from "react";
import { Fragment } from "react"

function authentification() {
  const [isOpen, setIsOpen] = React.useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [isOpenSection, setIsOpenSection] = React.useState(false);
  const openModalNextSection = () => setIsOpenSection(true);
  const closeModalNextSection = () => setIsOpenSection(false);
  const closeModals = () => {
    closeModal()
    closeModalNextSection()
  }

  return (
    <>
      <div className="text-gray-400">
        <button onClick={openModal} className="flex my-auto">
          <img className="voteButtons hover:text-blue-400" src="https://img.icons8.com/sf-regular/48/null/up.png" />
          <span className="text-xs font-bold text-black my-auto">0</span>
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModals}>
          <Transition.Child
            as={Fragment}
            enterFrom="opacity-0"
            enterTo="opacity-100 scale-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0"
            enter="ease-out duration-300"
            leave="ease-in duration-200">
            <div className="fixed inset-0 bg-black bg-opacity-25">
              <div className="bg-white rounded-3xl shadow-2xl container max-w-sm h-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <header className="flex flex-col px-5 py-11">
                  <button hidden={!isOpenSection} className="absolute top-2 left-4 rounded-full text-black font-semibold hover:bg-blue-50 py-0 px-2" onClick={closeModalNextSection}>{"<"}</button>
                  <button className="absolute top-2 right-4 rounded-full text-black font-semibold hover:bg-blue-50 py-0 px-2" onClick={closeModals}>X</button>
                  <p className="text-slate-600 font-medium" hidden={isOpenSection}>Para prosseguir, por favor, informe o seu e-mail institucional</p>
                  <p className="text-slate-600 font-medium" hidden={!isOpenSection}>Deseja incluir um comentário adicional sobre o problema? <span className="text-gray-700">(opcional)</span></p>
                  <input placeholder="digite seu email aqui" type="text" name="email" className="w-full rounded-lg border mt-3 py-3 px-4 border-gray-600" disabled={isOpenSection}></input>
                  <textarea placeholder="digite aqui" className="resize-none w-full rounded-lg border mt-3 py-3 px-4 border-gray-600" cols={30} rows={4} hidden={!isOpenSection}></textarea>
                  <button className="absolute bottom-11 inset-x-24 rounded-full text-white font-semibold bg-black hover:bg-slate-600 py-2 px-5" onClick={openModalNextSection} hidden={isOpenSection}>Avançar</button>
                  <button className="absolute bottom-11 inset-x-24 rounded-full text-white font-semibold bg-black hover:bg-slate-600 py-2 px-5" onClick={closeModals} hidden={!isOpenSection}>Concluir</button>
                  <div className={`${!isOpenSection ? "bg-gray-600" : "bg-gray-300"} rounded-full h-3 w-3 absolute bottom-3 inset-x-44`}></div>
                  <div className={`${isOpenSection ? "bg-gray-600" : "bg-gray-300"} rounded-full h-3 w-3 absolute bottom-3 inset-x-52`}></div>
                </header>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default authentification