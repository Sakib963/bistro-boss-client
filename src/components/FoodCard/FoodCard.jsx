import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({item}) => {
    const {image, name, price, recipe, _id} = item;

    const [, refetch] = useCart();

    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = item => {
      console.log(item);
      if(user){
        const cartItem = {
          itemId: _id,
          name,
          price,
          image,
          userEmail: user.email,
        }
        fetch('http://localhost:5000/carts', {
          method: "POST",
          headers: {"content-type":"application/json"},
          body: JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            refetch(); //refetch cart to update the number of items in the cart.
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Added to Cart',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
      else{
        Swal.fire({
          title: 'Please login before performing this action.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}})
          }
        })
      }
    }
    return (
        <div className="card bg-[#F3F3F3] shadow-xl">
          <figure>
            <img
              src={image}
              alt="Food Image"
              className="w-full"
            />
          </figure>
          <p className="bg-[#111827] py-2 px-4 text-white absolute right-0 mr-4 mt-4">${price}</p>
          <div className="card-body text-center">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p>{recipe}</p>
            <div className="">
              <button onClick={handleAddToCart} className="py-3 bg-[#E8E8E8] px-4 rounded-lg border-b-2 border-[#BB8506] text-[#BB8506] uppercase font-semibold hover:bg-[#1F2937]">Add To Cart</button>
            </div>
          </div>
        </div>
    );
};

export default FoodCard;