
import React, { useEffect,} from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
function Random() {
    // const [gif,setGif] = useState('');
    // const [isLoading,setIsLoading] = useState(false);
    //const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    function clickHandler(){
        fetchData();

    }
    // async function fetchData(){
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    //     const {data} = await axios.get(url);
    //     const imageSource = data?.data?.images?.downsized_large.url;
    //     //console.log(imageSource);
    //     setGif(imageSource);
    //     setIsLoading(false)

    // }
    // useEffect(()=>{
    //     fetchData();
    // },[])
    const {gif,isLoading,fetchData} = useGif();
    // useEffect(()=>{
    //          fetchData();
    //     },[])
  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col
    items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random Gif</h1>
        {isLoading? (<Spinner/>) : (<img src={gif} alt='gifimage' width="450"/>)}
        
        <button className='w-10/12 opacity-80 mb-[20px]
        text-lg py-2 rounded-lg bg-white ' onClick={clickHandler}>Generate</button>

    </div>
  )
}

export default Random