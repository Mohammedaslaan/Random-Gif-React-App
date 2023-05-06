
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
function Tag() {
    // useEffect(()=>{
    //     fetchData();
    // },[])
    const [name,setName] = useState("cat");
    
    const {gif,isLoading,fetchData,setIsLoading} = useGif(name);
    function changeHandler(event){
        setName(event.target.value)
    }
    
    // const [gif,setGif] = useState('');
    // const [isLoading,setIsLoading] = useState(false);
    //const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    function clickHandler(event){
        event.preventDefault();
        fetchData(name);
        

    }
    // function RandomNumberGenerator() {
    //     const min = 0;
    //     const max = 25;
    //     const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      
    //     return randomNumber;
    //   }
    // async function fetchData(){
    //     //const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    //     const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${name}&limit=25&offset=0&rating=g&lang=en`
    //     const {data} = await axios.get(url);
    //     console.log(data)

    //     const imageSource = data?.data[RandomNumberGenerator()]?.images?.downsized_large.url;
    //     //console.log(imageSource);
    //     setGif(imageSource);
    //     setIsLoading(false)

    // }
    
  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col
    items-center gap-y-5 mt-[15px] '>
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random {name} Gif</h1>
        {isLoading? (<Spinner/>) : (<img src={gif} alt='gifimage' width="450"/>)}
        
        <form onSubmit={clickHandler} className='w-full -mr-[140px]'>
        <input className='w-10/12 opacity-80 mb-[5px] text-center
        text-lg py-2 rounded-lg bg-white'  placeholder='Search gif by name'
        onChange={changeHandler}/> 
        <button className='w-10/12 opacity-80 mb-[20px]
        text-lg py-2 rounded-lg bg-white ' onClick={clickHandler} value={name}>Generate</button>
        </form>       
        

    </div>
  )
}

export default Tag