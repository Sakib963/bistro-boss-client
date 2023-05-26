import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBg from "../../../assets/menu/banner3.jpg";
import desert from "../../../assets/menu/dessert-bg.jpeg";
import pizza from "../../../assets/menu/pizza-bg.jpg";
import salad from "../../../assets/menu/salad-bg.jpg";
import soup from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const pizzaMenu = menu.filter((item) => item.category === "pizza");
  const desertsMenu = menu.filter((item) => item.category === "dessert");
  const saladMenu = menu.filter((item) => item.category === "salad");
  const soupMenu = menu.filter((item) => item.category === "soup");
  const offeredMenu = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Menu | Bistro Boss</title>
      </Helmet>
      {/* main cover */}
      <Cover
        img={menuBg}
        title={"OUR MENU"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      <SectionTitle
        subHeading="Don't miss"
        heading="TODAY'S OFFER"
      ></SectionTitle>
      {/* Offered Menu */}
      <MenuCategory
        items={offeredMenu}
        btnText={"ORDER YOUR FAVORITE FOOD"}
      ></MenuCategory>
      {/* Dessert Menu Items */}
      <MenuCategory
        items={desertsMenu}
        img={desert}
        title={"desert"}
        subTitle={
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        btnText={"ORDER YOUR FAVORITE FOOD"}
      ></MenuCategory>
      {/* Pizza Menu */}
      <MenuCategory
        items={pizzaMenu}
        img={pizza}
        title={"pizza"}
        subTitle={
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        btnText={"ORDER YOUR FAVORITE FOOD"}
      ></MenuCategory>
      {/* salad Menu */}
      <MenuCategory
        items={saladMenu}
        img={salad}
        title={"salad"}
        subTitle={
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        btnText={"ORDER YOUR FAVORITE FOOD"}
      ></MenuCategory>
      {/* soup Menu */}
      <MenuCategory
        items={soupMenu}
        img={soup}
        title={"soup"}
        subTitle={
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        btnText={"ORDER YOUR FAVORITE FOOD"}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
