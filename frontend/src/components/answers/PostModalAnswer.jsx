import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import api from '../../services/api';

export default function PostModalAnswer({ showModal, setShowModal }) {

  const { id_su } = useParams();

  const initialForm = {
    value: "",
  };

  const [formValues, setformValues] = useState(initialForm);

  const handlerInputChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };

  const handlerNewAnswer = () => {
    api
      .post(`/surveys/${id_su}/answer`, formValues)
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
                  Criar Nova Resposta
                </h3>
                {/*body*/}
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label
                      className="cursor-pointer block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="field">
                      Resposta
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 
                      text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-slate-4  00"
                      name="field"
                      id="field"
                      type="text"
                      placeholder="escreva..."
                      value={formValues.field || ""}
                      onChange={handlerInputChange}
                      required
                    />
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
                    onClick={() => handlerNewAnswer()}
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
