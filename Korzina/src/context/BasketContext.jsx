import { createContext, useState } from "react";

export const BasketContext = createContext(null);

const BasketProvider = ({ children }) => {
  const [store, setStore] = useState([]);

  const setBasket = (data) => {
      setStore([...store, data])
    //   console.log(store) 
}
  return (
    <BasketContext.Provider value={ {setBasket,store,setStore} }>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider
