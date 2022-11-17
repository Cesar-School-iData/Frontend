import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

const andares = ["Térreo", "1° andar", "2° andar", "3° andar", "4  ° andar"];

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
              <Listbox.Button className="font-semibold pl-3 py-1 w-full text-left focus:outline-none focus:shadow-outline-blue focus:bg-gray-300 relative shadow-xl rounded-full bg-white text-gray-500">
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
                className=" pl-1 py-1 w-full text-left border-gray-300 shadow-xl rounded-md"
              >
                {andares.map((andar) => (
                  <Listbox.Option key={andar} value={andar}>
                    {({ selected, active }) => (
                      <div
                        className={`${active
                          ? "text-white bg-slate-400"
                          : "text-gray-900"
                          } cursor-default select-none relative py-2 pl-10 pr-4`}
                      >
                        <span className={`${selected ? "font-semibold" : "font-normal"}`}>{andar}</span>
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