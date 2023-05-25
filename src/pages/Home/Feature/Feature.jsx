import featureImg from "../../../assets/home/chef-service.jpg";

const Feature = () => {
  return (
    <div className="my-10 relative">
      <img src={featureImg} alt="" />
      <div className="text-center bg-white absolute top-1/4 p-20 mx-20 space-y-3">
        <h2 className="text-3xl">BISTRO BOSS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default Feature;
