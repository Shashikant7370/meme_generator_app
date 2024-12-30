import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({val}) => {
  return (
    <div className=" m-2 rounded-md shadow-sm shadow-slate-400 p-1 flex flex-col justify-between w-[300px]">
      <img className="rounded-tl-md rounded-tr-md h-[300px]" src={val.url} />
      <h3 className="text-2xl mt-2 mb-2">{val.name}</h3>
      <Link to={`/meme?url=${val.url}`} >
        <button
          className="px-4 py-1 mt-3 bg-blue-600 w-full text-white block"
        >
          Edit
        </button>
        </Link>
    </div>
  );
}

export default Card