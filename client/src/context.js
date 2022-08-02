import {useContext, createContext, useState,useEffect} from 'react'
import axios from 'axios'
const AppContext =  createContext()


const gettingId = ()=> {
    const date= new Date()
    const day = date.getDate()
    return day

}
const day = gettingId()

 const date = new Date().getMonth() +1




const AppProvider = ({children})=> {
    const [data,setData] = useState([])
    const [impofday,setImpofday] = useState([])



const fetchDaily = async()=> {
    try {
    const response = await axios.get(`https://gentle-retreat-07279.herokuapp.com/api/v1/protocols/${day}`)
    const data  =  await response.data
    const daily = await data.data
    const protocol = await daily.protocol
    setData(protocol)
} catch (error) {
        console.log(error); 
    }
}

const fetchImpofday = async()=> {
   try {
    const response = await axios.get(`https://gentle-retreat-07279.herokuapp.com/api/v1/impofday/${date}`)
    const data = await response.data
    const impofday= await data.data.impOfDay
    setImpofday(impofday)
} catch (error) {
    console.log(error);
   }

}

useEffect(()=> {
    fetchDaily()
    fetchImpofday()
},[])


console.log(impofday);
    return (
        <AppContext.Provider value={{data,impofday}}>
        {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext= ()=> {
    return useContext(AppContext)
}

export {AppProvider}