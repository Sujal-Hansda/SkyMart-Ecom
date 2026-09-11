import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { MyStore } from "../Context/MyContext";

function ProductCard({ product }) {
  let navigate = useNavigate();
  let {setCartItems,setCartOpen,cartItems} = useContext(MyStore);
  const existingProduct = cartItems.find((item)=>item.id===product.id); 
  const addToCart = ()=>
  {
    if (existingProduct)
    {
      setCartItems([...cartItems.map((item)=>
      item.id === product.id?{
        ...item,
        quantity:item.quantity+1
      }:item)])
    }
    else
    {
      setCartItems([...cartItems,{...product,quantity:1}])
    }
    setCartOpen(true);
  }
  
  return (
    <div className="cursor-pointer border border-[#f4f4f446] w-58 h-100 rounded-2xl bg-black text-white p-4 shadow-md">
      <div onClick={()=>navigate(`/detail/${product.id}`)
        
      } className=" flex h-50 items-center justify-center rounded-xl bg-gray-100 p-5">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      <p className="mt-4 text-sm capitalize text-gray-500">
        {product.category}
      </p>

      <h2 className=" mt-1 line-clamp-2 text-lg font-semibold">
        {product.title}
      </h2>

      <div className="mt-2 flex items-center gap-2">
        <span>⭐ {product.rating.rate}</span>
        <span className="text-sm text-gray-400">
          ({product.rating.count})
        </span>
      </div>
      <div className="my-1 h-px w-full bg-[#e3e0e069]"></div>
      <div className="flex items-center justify-between">
        <p className="text-[#D7F205] mt-3 text-xl font-bold">
          ${product.price}
        </p>
        <div onClick={addToCart} className="flex items-center gap-2 text-black rounded-lg p-1 cursor-pointer bg-[#D7F205]">
        <ShoppingCart size={14}/>
        <p className="text-sm">Add</p>
      </div>
      </div>
      

    </div>
  );
}

export default ProductCard;