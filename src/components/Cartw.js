import { useDispatch, useSelector } from "react-redux"
import { IMAGE_URL } from "../utils/url"
import { clearItem } from "../utils/cartSlice"

const Cartw = () => {
  const cartItem = useSelector(store=>store?.cart?.items)
  const dispatch = useDispatch()
  const clearCart= ()=>{
    dispatch(clearItem())
  }
 console.log(cartItem)
  return (
    <div className="flex">
       <div>cart item {cartItem.length}</div>
       <button className="clear" onClick={clearCart}>clear Cart</button>
        {cartItem?.map((item,i)=>{
           const{name,price,imageId} = item?.card?.info
          return(
            <div key={i} className="rest-card">
             <img src={IMAGE_URL+imageId} alt="" />
            <p>{name}</p>
            <p>₹{price/100}FOR TWO</p>
            </div>
        
          )
        })}
       </div>

   
  )
}

export default Cartw