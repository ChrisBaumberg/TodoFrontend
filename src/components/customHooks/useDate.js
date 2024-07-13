import {useState, useEffect} from "react";

function useDate(){
    //get Date
    const[date, setDate] = useState(() => new Date());
    useEffect(()=>{
        //Interval to refresh Date
        const dateId=setInterval(()=>{
          setDate(new Date())
        },1000)
        return()=> clearInterval(dateId);
      },[])
      return date.toLocaleDateString()
}

export default useDate;