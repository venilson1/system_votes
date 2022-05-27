import React, { useEffect, useState } from 'react'
import { helpersFormatDate } from '../../helpers/helpersFormatDate';
import api from '../../services/api';

export default function Votes() {

  const [surveys, setSurveys] = useState();


  useEffect(() => {
    api
      .get(`/surveyswithanswers`)
      .then((response) => setSurveys(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro " + err);
      });
  }, [surveys]);

  const handlerUpdateVotes = (id) => {
    api
      .put(`/answers/${id}/votes`)
      .catch((err) => {
        console.error("ops! ocorreu um erro " + err);
      })

  };

  return (
    <>
      <div className="flex flex-wrap justify-center text gap-10 m-8">
        {
          surveys?.map(el => {
            return (
              <div key={el.id} className="max-w-sm rounded overflow-hidden shadow-xl w-1/3">
                <div className="px-6 py-4 rounded-t-lg bg-zinc-900 text-center">
                  <span className="font-bold text-sm  mb-2  text-zinc-100">{el.title}</span>
                </div>
                <div className="px-6 pt-4 pb-2 flex flex-col">
                  {
                    el.answers.map(el => {

                      JSON.parse(el)

                      return (
                        <div onClick={() => handlerUpdateVotes(JSON.parse(el).id)} key={JSON.parse(el).id} className={`bg-violet-200 hover:bg-violet-400 rounded-full px-3 py-1 mb-2 flex justify-between cursor-pointer`}>
                          <span className="text-sm font-semibold text-zinc-700 ml-2">{JSON.parse(el).field}</span>
                          <span className="text-sm font-semibold text-zinc-700 flex items-end">votos: {JSON.parse(el).votes}</span>
                        </div>
                      )
                    })
                  }
                </div>
                <div className='flex justify-items-end justify-around text-xs font-bold py-4'>
                  <span className="flex flex-col justify-center text-center space-y-1">
                    <p>início</p>
                    <p className="bg-fuchsia-200 px-8 py-1 rounded-2xl text-slate-900">{helpersFormatDate(el.initial_date)}</p>
                  </span>
                  <span className="flex flex-col justify-center text-center space-y-1">
                    <p>encerramento</p>
                    <p className="bg-fuchsia-200 px-8 py-1 rounded-2xl text-slate-900">{helpersFormatDate(el.final_date)}</p>
                  </span>
                </div>
              </div>

            )
          })
        }
      </div>

    </>
  )
}
