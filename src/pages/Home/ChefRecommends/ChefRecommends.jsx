import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import card1 from '../../../assets/menu/pizza-bg.jpg'
import card2 from '../../../assets/menu/salad-bg.jpg'
import card3 from '../../../assets/menu/soup-bg.jpg'

const ChefRecommends = () => {
  return (
    <section>
      <SectionTitle
        heading={"CHEF RECOMMENDS"}
        subHeading={"Should Try"}
      ></SectionTitle>

      <div className="mt-10 grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="card bg-[#F3F3F3] shadow-xl">
          <figure>
            <img
              src={card1}
              alt="Shoes"
              className="w-full"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl font-bold">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="">
              <button className="py-3 bg-[#E8E8E8] px-4 rounded-lg border-b-2 border-[#BB8506] text-[#BB8506] uppercase font-semibold hover:bg-[#1F2937]">Add To Cart</button>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card bg-[#F3F3F3] shadow-xl">
          <figure>
            <img
              src={card2}
              alt="Shoes"
              className="w-full"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl font-bold">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="">
              <button className="py-3 bg-[#E8E8E8] px-4 rounded-lg border-b-2 border-[#BB8506] text-[#BB8506] uppercase font-semibold hover:bg-[#1F2937]">Add To Cart</button>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card bg-[#F3F3F3] shadow-xl">
          <figure>
            <img
              src={card3}
              alt="Shoes"
              className="w-full"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl font-bold">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="">
              <button className="py-3 bg-[#E8E8E8] px-4 rounded-lg border-b-2 border-[#BB8506] text-[#BB8506] uppercase font-semibold hover:bg-[#1F2937]">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommends;
