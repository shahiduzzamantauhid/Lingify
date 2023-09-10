import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";

const Cart = () => {
  const [carts, setCart] = useState([]);
  const { user } = useContext(AuthContext);

  if (user) {
    let email = user.email;
    axios
      .get(`https://lingify-server.onrender.com/api/cart/${email}`)
      .then(function (response) {
        setCart(response.data);
      });
  }

  return (
    <div className="mt-12">
        {carts.length > 1 ? <h2 className="text-3xl">Your Unpaid Courses. Lets Get It now!</h2> : <h2 className="text-3xl">Your cart is empty!</h2> }
        <div className=" grid grid-cols-3 gap-4">
      {carts.map((cart) => (
        <div
          key={cart._id}
          className="mt-12 relative hover:scale-1 duration-500"
        >
          <div className="card w-96 shadow-xl image-full brfore:bg-accent">
            <figure>
              <img src={cart.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{cart.coursetitle}</h2>
              <p>Ratting : {cart.ratting}</p>
              <p className="text-primary text-4xl italic text-center">Offer will Ends Soon</p>
              <p className="text-primary  text-center"><span className="text-7xl italic">${cart.sellingPrice}</span> <del className="text-3xl text-white">${cart.regularPrice}</del></p>
              
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Cart;
