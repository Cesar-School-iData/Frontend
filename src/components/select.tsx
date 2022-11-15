import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

const andares = ["Térreo", "1° andar", "2° andar", "3° andar", "4  ° andar"];
const espacos = ["Sala", "Corredor", "Banheiro", "Laboratório"];
const numeracoes = ["Sem número", "Auditório", "1", "2", "3", "4", "5", "6", "7", "8", "9 e 10", "11", "12 "];
const categorias = ["Estrutura", "Mobília", "Aparelhos"];

function select() {
  const [selected, setSelected] = useState("Selecione");

  return (
    <Listbox as="div" value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="text-lg text-gray-500 font-bold">
            Andar
          </Listbox.Label>
          <div className="relative w-36 mt-2">
            <span className="inline-block w-full">
              <Listbox.Button className="font-semibold pl-3 py-1 w-full text-left focus:outline-none focus:shadow-outline-blue focus:bg-slate-600  relative shadow-xl rounded-full bg-gray-300 text-white">
                <span className="block truncate">{selected}</span>
              </Listbox.Button>
            </span>
            <Transition
              show={open}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                static
                className="border border-gray-300 rounded-md"
              >
                {andares.map((andar) => (
                  <Listbox.Option key={andar} value={andar}>
                    {({ selected, active }) => (
                      <div
                        className={`${active
                          ? "text-white bg-slate-600"
                          : "text-gray-900"
                          } cursor-default select-none relative py-2 pl-10 pr-4`}
                      >
                        <span
                          className={`${selected ? "font-semibold" : "font-normal"
                            }`}
                        >
                          {andar}
                        </span>

                        {selected && (
                          <span
                            className={`${active ? "text-white" : "text-indigo-600"
                              } absolute inset-y-0 left-0 flex items-center pl-2`}
                          >
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        )}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default select