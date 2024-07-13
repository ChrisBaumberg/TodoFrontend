import { useState, useEffect} from "react";

function useTime(){
  //get Time
    const[time, setTime] = useState(() => new Date());
    //Intervall to refresh Time
    useEffect(()=>{
      const timeId=setInterval(()=>{
        setTime(new Date())
      },1000)
      return()=> clearInterval(timeId);
    },[]);
  
    
    return time.toLocaleTimeString()
  }

  export default useTime;
