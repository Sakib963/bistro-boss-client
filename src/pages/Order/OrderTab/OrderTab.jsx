import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({menu}) => {
  return (
    <div className="grid md:grid-cols-3 gap-5 my-10">
      {menu &&
        menu.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
    </div>
  );
};

export default OrderTab;
