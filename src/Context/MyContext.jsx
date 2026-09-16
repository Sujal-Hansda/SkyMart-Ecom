import { Children, createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export  const MyStore = createContext();

export const ContextProvider= ({children})=>
{
  

  const [productsData, setProductsData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const total = cartItems.reduce((sum,item)=>
  {
    return sum + item.price*item.quantity
  },0)
    let getProductsData = async()=>
    {
      try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);  
      } catch (error) {
        console.log("Error in API",error); 
      }
      
    }
      useEffect(()=>
  {
    getProductsData();
  },[])
  

  console.log(cartItems);
  
  
  console.log(productsData);
  return (<MyStore.Provider value={{getProductsData,total,cartOpen,cartItems,setCartOpen,setCartItems,productsData,setProductsData}}>
    {children}
  </MyStore.Provider>
  ) 
}