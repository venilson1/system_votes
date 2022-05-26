import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import PostModal from '../../components/PostModal';
import { helpersFormatDate } from '../../helpers/helpersFormatDate';
import { helpersDefinitionStatus } from '../../helpers/helpersDefinitionStatus';
import api from '../../services/api';

export default function Home() {

  const [showModal, setShowModal] = useState(false);
  const [surveys, setSurveys] = useState([]);


  useEffect(() => {
    api
      .get("/surveys")
      .then((response) => setSurveys(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro " + err);
      });
  }, [surveys]);

  const handlerDelete = (e, id) => {
    e.preventDefault();
    api.delete("/surveys/" + id)
  }

  return (
    <div className="container mx-auto px-2">
      <div className="row-span-full py-6">
        <button className="cursor-pointer btn px-6 py-2 bg-green-600 
      text-white font-medium text-xs leading-tight uppercase rounded 
      shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700  
      focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 
      active:shadow-lg transition duration-150 ease-in-out"
          type="button" id="seacrh" onClick={() => setShowModal(true)}>Criar Enquete
        </button>
      </div>

      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Titulo</th>
              <th scope="col" className="px-6 py-3">Data Incial</th>
              <th scope="col" className="px-6 py-3">Data Final</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          {
            surveys.map((el) => {
              return (
                <tbody key={el.id}>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4 font-medium text-gray-900 
                    dark:text-white whitespace-nowrap">{el.title}</td>
                    <td className="px-6 py-4">{helpersFormatDate(el.initial_date)}</td>
                    <td className="px-6 py-4">{helpersFormatDate(el.final_date)}</td>
                    <td className="px-6 py-4">{helpersDefinitionStatus(el.initial_date, el.final_date)}</td>
                    <td className="space-x-4 cursor-pointer">
                      <Link to={"/editar/" + el.id} className="text-lime-500">OPÇÕES</Link>
                      <Link to={"/editar/" + el.id} className="text-yellow-500">EDITAR</Link>
                      <button type="button" onClick={(e) => handlerDelete(e, el.id)} className="text-red-500">EXCLUIR</button>
                    </td>

                  </tr>
                </tbody>
              )
            })
          }
        </table>
      </div>


      <PostModal showModal={showModal} setShowModal={setShowModal} />



    </div>
  )
}
