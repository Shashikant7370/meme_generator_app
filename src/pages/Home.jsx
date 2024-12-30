import React, { useEffect, useState } from 'react'
import Card from '../components/Card'


const fetchMeme = async()=>{
    const response = await fetch(`https://api.imgflip.com/get_memes`);
    return await response.json();
}

const Home = () => {
    const [meme,setMeme] = useState([])
    useEffect(()=>{
        fetchMeme().then((data)=>setMeme(data.data.memes))
    },[])

  return (
    <div className='flex flex-wrap w-full p-6 justify-center'>
        {
            meme && meme.map((val,idx)=>{
                return <Card val={val} key={idx}/>
            })
        }
    </div>
  )
}

export default Home