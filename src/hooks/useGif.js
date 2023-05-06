import { useState ,useEffect} from 'react';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

        
function useGif(name) {
    console.log('useGif me name ki ye value aai hai',name)
    const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    const nameUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${name}&limit=25&offset=0&rating=g&lang=en`
    const [gif,setGif] = useState('');
    const [isLoading,setIsLoading] = useState(false);
    //const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    function RandomNumberGenerator() {
        const min = 0;
        const max = 25;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      
        return randomNumber;
      }
    async function fetchData(name){
        console.log('name aaya hai fetch data me',name)
        setIsLoading(true);
        //const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
        //const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${name}&limit=25&offset=0&rating=g&lang=en`
        const {data} = await axios.get(name? (nameUrl):(randomUrl));
        
        const imageSource = name? (data?.data[RandomNumberGenerator()]?.images?.downsized_large.url):(data?.data?.images?.downsized_large.url);
        console.log('api se data ye aaya hai',imageSource)
        //const imageSource = data?.data[RandomNumberGenerator()]?.images?.downsized_large.url;
        //console.log(imageSource);
        setGif(imageSource);
        setIsLoading(false)

    }
    useEffect(()=>{
        fetchData('cat');
    },[])
    //const [name,setName] = useState("cat");
    
  return{
    gif,isLoading,fetchData,setIsLoading
  };
}

export default useGif