const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center space-y-2 my-10 md:w-4/12 mx-auto">
      <p className="text-[#D99904] text-xl italic">--- {subHeading} ---</p>
      <h3 className="text-3xl font-bold uppercase border-[#E8E8E8] border-y-4 py-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
