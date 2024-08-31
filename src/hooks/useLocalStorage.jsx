import { useState, useEffect } from "react"

const useLocalStorage = (key,initalValue) => {
  const [value,setValue] = useState(() => {
    const localValue = window.localStorage.getItem(key);
    try{
        return localValue ? JSON.parse(localValue) : initalValue;
    }catch(er)
    {
        console.log(er)
        return initalValue
    }
  })
  
  useEffect(()=> {
    window.localStorage.setItem(key, JSON.stringify(value))
  },[key,value])

   return [value,setValue]
}

export default useLocalStorage