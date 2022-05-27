import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import PostModalAnswer from '../../components/answers/PostModalAnswer'
import api from '../../services/api';

export default function HomeAnswers() {

  const deleteColor = 'text-red-500';

  const { id_su } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    api
      .get(`/answers/${id_su}/survey`)
      .then((response) => setAnswers(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro " + err);
      });
  }, [id_su, answers]);

  const handlerDelete = (e, id) => {
    e.preventDefault();
    answers.length === 3 ? alert('minimo 3 respostas') : api.delete(`/answers/${id}`)
  }

  return (
    <div className="container mx-auto px-2">

      <div className="text-4xl text-center py-6">
        {answers[0]?.title}
      </div>

      <div className="row-span-full py-6">
        <button className="cursor-pointer btn px-6 py-2 bg-green-600 
        text-white font-medium text-xs leading-tight uppercase rounded 
          shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700  
          focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 
          active:shadow-lg transition duration-150 ease-in-out"
          type="button" id="seacrh" onClick={() => setShowModal(true)}>Criar Resposta
        </button>
      </div>

      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Resposta</th>
              <th scope="col" className="px-6 py-3">Votos</th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          {
            answers.map(({ id, field, votes }) => {
              return (
                <tbody key={id}>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4 font-medium text-gray-900 
                  dark:text-white whitespace-nowrap">{field}</td>
                    <td className="px-6 py-4">{votes}</td>
                    <td className="space-x-4 cursor-pointer">
                      <Link to={`/enquetes/${id_su}/respostas/editar/${id}`} className="text-yellow-500">EDITAR</Link>
                      <button type="button" onClick={(e) => handlerDelete(e, id)} className={`${deleteColor}`}>EXCLUIR</button>
                    </td>
                  </tr>
                </tbody>
              )
            })
          }
        </table>
      </div>

      <PostModalAnswer showModal={showModal} setShowModal={setShowModal} />

    </div>
  )
}
