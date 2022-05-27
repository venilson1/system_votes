import React, { useEffect } from 'react'
import api from '../../services/api';

export default function Votes() {

  useEffect(() => {
    api
      .get(``)
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-between text gap-10 m-8">
        <div className="max-w-sm rounded overflow-hidden shadow-xl w-1/3">
          <div className="px-6 py-4 rounded-t-lg bg-zinc-900 text-center">
            <span className="font-bold text-sm  mb-2  text-zinc-100">The Coldest Sunset</span>
          </div>
          <div className="px-6 pt-4 pb-2 flex flex-col">
            <div className={`bg-violet-200 hover:bg-violet-400 rounded-full px-3 py-1 mb-2 flex justify-between cursor-pointer`}>
              <span className="text-sm font-semibold text-zinc-700 ml-2">photography</span>
              <span className="text-sm font-semibold text-zinc-700 flex items-end">votos: 0</span>
            </div>
            <div className={`bg-violet-200 hover:bg-violet-400 rounded-full px-3 py-1 mb-2 flex justify-between cursor-pointer`}>
              <span className="text-sm font-semibold text-zinc-700 ml-2">travel</span>
              <span className="text-sm font-semibold text-zinc-700">votos: 0</span>
            </div>
            <div className={`bg-violet-200 hover:bg-violet-400 rounded-full px-3 py-1 mb-2 flex justify-between cursor-pointer`}>
              <span className="text-sm font-semibold text-zinc-700 ml-2">winter</span>
              <span className="text-sm font-semibold text-zinc-700">votos: 0</span>
            </div>
          </div>
          <div className='flex justify-items-end justify-around text-xs font-bold py-4'>
            <span className="flex flex-col justify-center text-center space-y-1">
              <p>início</p>
              <p className="bg-fuchsia-200 px-8 py-1 rounded-2xl text-slate-900">28/02/2022</p>
            </span>
            <span className="flex flex-col justify-center text-center space-y-1">
              <p>encerramento</p>
              <p className="bg-fuchsia-200 px-8 py-1 rounded-2xl text-slate-900">28/02/2022</p>
            </span>
          </div>
        </div>


      </div>
    </>
  )
}
