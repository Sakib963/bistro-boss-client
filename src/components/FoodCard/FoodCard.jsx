
const FoodCard = ({item}) => {
    const {image, name, price, recipe} = item;
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
              <button className="py-3 bg-[#E8E8E8] px-4 rounded-lg border-b-2 border-[#BB8506] text-[#BB8506] uppercase font-semibold hover:bg-[#1F2937]">Add To Cart</button>
            </div>
          </div>
        </div>
    );
};

export default FoodCard;