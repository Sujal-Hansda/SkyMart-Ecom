import { Children, createContext, useState } from "react";

export  const MyStore = createContext();

export const ContextProvider= ({children})=>
{
  
  const [productsData, setProductsData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  console.log(cartItems);
  
  
  console.log(productsData);
  return (<MyStore.Provider value={{cartOpen,cartItems,setCartOpen,setCartItems,productsData,setProductsData}}>
    {children}
  </MyStore.Provider>
  ) 
}