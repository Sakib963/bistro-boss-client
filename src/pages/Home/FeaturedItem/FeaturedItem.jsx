import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './FeaturedItem.css'

const FeaturedItem = () => {
  return (
    <section className="my-10 featured-item p-5 text-white bg-gradient-to-b from-black bg-fixed">
      <SectionTitle
        heading={"Featured Item"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center gap-10 pb-20 px-36 text-white">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10 space-y-2">
          <p className="text-xl">March 20, 2023</p>
          <p className="text-xl uppercase">WHERE CAN I GET SOME?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eius quia unde perferendis, aut sapiente fugit quidem ad nemo incidunt exercitationem. Cum suscipit dolores eaque maiores cumque, quis sequi dignissimos. Quisquam accusamus porro veniam esse quo excepturi minus enim facilis!</p>
          <button className="py-3 px-4 rounded-lg border-b-2 border-white text-white uppercase font-semibold hover:bg-white hover:text-black">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItem;
