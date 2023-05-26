const MenuButton = ({ text }) => {
  return (
    <div className="w-full mx-auto text-center mt-5 my-10">
      <button className="py-4 px-6 uppercase border-b-4 border-black text-black rounded-lg">
        {text}
      </button>
    </div>
  );
};

export default MenuButton;
