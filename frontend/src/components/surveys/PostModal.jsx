import React, { useState } from 'react'
import api from '../../services/api';

export default function PostModal({ showModal, setShowModal }) {

  const initialForm = {
    title: "",
    initial_date: "",
    final_date: ""
  };

  const [formValues, setformValues] = useState(initialForm);

  const handlerInputChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };

  const handlerNewContact = () => {
    api
      .post("/surveys", formValues)
      .catch((err) => {
        console.error("ops! ocorreu um erro " + err);
      })

    setShowModal(false)
  };

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <h3 className="text-3xl font-semibold text-center w-full py-4">
                  Criar Enquete
                </h3>
                {/*body*/}
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label
                      className="cursor-pointer block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="title">
                      Titulo
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 
                      text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="title"
                      id="title"
                      type="text"
                      placeholder="Titulo"
                      value={formValues.title || ""}
                      onChange={handlerInputChange}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="cursor-pointer block text-gray-700 text-sm font-bold mb-2" htmlFor="initial_date">
                      Data Inicial
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="initial_date" id="initial_date" type="date" placeholder="Inicio" onChange={handlerInputChange} value={formValues.initial_date || ""} />
                  </div>
                  <div className="mb-6">
                    <label className="cursor-pointer block text-gray-700 text-sm font-bold mb-2" htmlFor="final_date">
                      Data Final
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="final_date" id="final_date" type="date" placeholder="Final" onChange={handlerInputChange} value={formValues.final_date || ""} />
                  </div>


                </form>
                {/*footer*/}
                <div className=" flex items-center justify-center p-6 border-t 
                border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-gray-100 active:bg-emerald-600 
                    font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg 
                    outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all 
                    duration-150"
                    type="button"
                    onClick={() => handlerNewContact()}
                  >
                    Salvar
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
