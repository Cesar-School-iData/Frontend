import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

const espacos = ["Sala", "Corredor", "Banheiro", "Laboratório"];

function select() {
  const [selected, setSelected] = useState("Selecione");

  return (
    <Listbox as="div" value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="text-lg text-cinza-300 font-bold">
            Espaço
          </Listbox.Label>
          <div className="relative w-36 mt-2">
            <span className="inline-block w-full">
              <Listbox.Button className="font-semibold pl-3 py-1 w-full text-left focus:outline-none focus:shadow-outline-blue focus:bg-laranja-200 relative shadow-xl rounded-full bg-branco-200 text-cinza-300">
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
                className=" pl-1 py-1 w-full text-left border-cinza-200 shadow-xl rounded-md"
              >
                {espacos.map((espaco) => (
                  <Listbox.Option key={espaco} value={espaco}>
                    {({ selected, active }) => (
                      <div
                        className={`${active
                          ? "text-branco-100 bg-laranja-200"
                          : "text-preto-100"
                          } cursor-default select-none relative py-2 pl-10 pr-4`}
                      >
                        <span className={`${selected ? "font-semibold" : "font-normal"}`}>{espaco}</span>
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