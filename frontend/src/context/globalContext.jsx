import { createContext, useContext, useState, useEffect } from "react";
import { createData } from "../mockData";
import Loader from "../components/loader/loader";
import { addDays, getDay, subDays } from "date-fns";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext)

export function GlobalProvider({children}) {
    const [day, setDay] = useState(new Date())
    const [data, setData] = useState(undefined);



    const handleDay = (math) => {
        if (math) {
          if (getDay(day) === 6) {
            setDay(subDays(day, 6))
          } else {
            setDay(addDays(day, 1))
          }
        } else {
          if (getDay(day) === 0) {
            setDay(addDays(day, 6))
          } else {
            setDay(subDays(day, 1))
          }
        }

      }

    useEffect(() => {
        const data = createData(day)
        setData(data)
    }, [])

    return (
        <GlobalContext.Provider value={{data, day, handleDay}}>
            {data ? children : <Loader/>}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider
