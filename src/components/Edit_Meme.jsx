import React, { useState, createRef } from 'react'
import {useSearchParams} from "react-router-dom"
import { exportComponentAsJPEG } from "react-component-export-image";

import Text from './Text';
const Edit_Meme = () => {
  const [params] = useSearchParams();
  const [count,setCount] = useState(0)
  const memeRef = createRef();

  const addText = () => {
    setCount(count + 1);
  };

  return (
    <div className=" flex m-auto flex-col mt-5 w-[90%] sm:w-[650px] ">
      <div ref={memeRef}>
        <img src={params.get("url")} height={200} width={250} />
        {Array(count)
          .fill(0)
          .map((e) => (
            <Text />
          ))}
      </div>
      <div className='flex flex-col sm:flex-row items-center'>
        <button
          className="bg-blue-700 rounded-md text-xl px-4 py-1 m-2 text-white"
          onClick={addText}
        >
          Click to Edit
        </button>
        <button
          className="bg-green-700 rounded-md text-xl px-4 py-1 m-2 text-white"
          onClick={() => exportComponentAsJPEG(memeRef)}
        >
          Download Meme
        </button>
      </div>
    </div>
  );
}

export default Edit_Meme