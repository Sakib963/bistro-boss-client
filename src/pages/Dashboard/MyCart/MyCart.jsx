import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import TableRow from "./TableRow";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();

  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);
  console.log(totalPrice);

  const handleDelete = (_id) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Delete'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/carts/${_id}`, {
            method: "DELETE",
            headers: {"content-type":"application/json"}
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount > 0){
                refetch()
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
            }
          })
        }
      })
  }
  return (
    <div>
      <Helmet>
        <title>My Cart | Bistro Boss</title>
      </Helmet>
      <div>
        <SectionTitle
          heading={"WANNA ADD MORE?"}
          subHeading={"My Cart"}
        ></SectionTitle>
      </div>
      <div className="uppercase text-2xl font-bold flex justify-between p-5">
        <h3>Total Items: {cart.length}</h3>
        <h3>Total Price: ${totalPrice}</h3>
        <button className="btn btn-sm bg-[#D1A054]">Pay</button>
      </div>
      <div className="p-5">
        {
            cart.length ? <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    
                  </th>
                  <th>Item Image</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                  cart?.map((item, index) => <TableRow key={item._id} item={item} index={index} handleDelete={handleDelete}></TableRow>)
                }
                
              </tbody>
            </table>
          </div>
          :
          <div className="text-center">
            <h3 className="text-3xl font-bold">No Product Added</h3>
          </div>
        }
      </div>
    </div>
  );
};

export default MyCart;
