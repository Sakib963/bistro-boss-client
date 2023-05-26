import { Link } from "react-router-dom";
import MenuButton from "../../../components/MenuButton/MenuButton";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, img, title, subTitle, btnText }) => {
  return (
    <div className="my-10">
      {title && <Cover img={img} title={title} subTitle={subTitle}></Cover>}
      <div className="grid md:grid-cols-2 gap-8 my-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}><MenuButton text={btnText}></MenuButton></Link>
    </div>
  );
};

export default MenuCategory;
