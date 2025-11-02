import React from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart } from "../../redux/slices/cartSlices";

function CartContainer() {
  const dispatch = useDispatch();

  const { items,addToCart:cart} = useSelector((store) => {
    return store.cart;
  });
  console.log(cart ,"cart items");
  console.log(items);


  const st = new Set();
  // set take only unique value 
  //// add, set, has , size, clear 
 cart.forEach((item)=>{
  st.add(item);
 })
 console.log(st , 'set');

  return (
    <div>
      <Navbar />

      <section>
        {items.length === 0 ? (
          <div>No Items founded</div>
        ) : (
          <div className="grid grid-cols-3 px-48 pr-40 gap-10">
            {items.map((item) => (
              <div key={item.id} className="card ">

                <div className="card-body border">
                  <img src={item.image} alt={item.name} className="w-40 " />
                  <p className="card-title">{item.name}</p>
                  
                  <p>price: {item.price} BDT</p>
                  <button onClick={()=> dispatch(addToCart(item))} className="btn btn-secondary">Add to Cart</button>
                </div>

              </div>
            ))}
          </div>
        )}

        <div className="mx-auto w-full  flex  justify-center">

          <button className="btn btn-primary mt-10 " onClick={()=>dispatch(clearCart())}>Clear cart</button>

        </div>
      </section>
    </div>
  );
}

export default CartContainer;
