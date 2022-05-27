import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';

function DetailsAnswers() {

  const { id_su, id } = useParams();

  const [answers, setAnswers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/answers/${id}`)
      .then((response) => setAnswers(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro " + err);
      });
  }, [id]);

  const handlerInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };


  const handlerUpdateSurvey = () => {
    api
      .put(`/answers/${id}`, answers)
      .catch((err) => {
        console.error("ops! ocorreu um erro " + err);
      })

    navigate(`/enquetes/${id_su}/respostas`);

  };

  const handlerClosePage = () => {
    navigate(`/enquetes/${id_su}/respostas`);
  };

  return (
    <>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"

      >
        <div className="flex flex-wrap space-x-6">
          <div className="mb-4">
            <label
              className="cursor-pointer block text-gray-700 text-sm font-bold mb-2"
              htmlFor="field">
              Resposta
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 
                    text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="field"
              id="field"
              type="text"
              value={answers?.field || ""}
              onChange={handlerInputChange}
              required
            />
          </div>
        </div>
      </form>
      <div className=" flex items-center justify-center p-6 border-t 
                  border-solid border-slate-200 rounded-b">
        <button
          className="bg-emerald-500 text-gray-100 active:bg-emerald-600 
                      font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg 
                      outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all 
                      duration-150"
          type="button"
          onClick={() => handlerUpdateSurvey()}
        >
          Salvar
        </button>
        <button
          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => handlerClosePage()}
        >
          Fechar
        </button>
      </div>
    </>
  )
}

export default DetailsAnswers