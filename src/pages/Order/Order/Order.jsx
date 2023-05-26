import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import orderImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'desert', 'drinks']
    const {category} = useParams();
    console.log(category)

    const initialIndex = categories.indexOf(category)

  const [tabIndex, setTabIndex] = useState(initialIndex);



  const [menu] = useMenu();
  const pizzaMenu = menu.filter((item) => item.category === "pizza");
  const desertsMenu = menu.filter((item) => item.category === "dessert");
  const saladMenu = menu.filter((item) => item.category === "salad");
  const soupMenu = menu.filter((item) => item.category === "soup");
  const drinksMenu = menu.filter((item) => item.category === "drinks");

  return (
    <div>
        <Helmet>
        <title>Order Food | Bistro Boss</title>
      </Helmet>
      <Cover
        img={orderImg}
        subTitle={"Would you like to try a dish?"}
        title={"Order Food"}
      ></Cover>
      <div className="mx-auto text-center">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Desert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab menu={saladMenu}></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab menu={pizzaMenu}></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab menu={soupMenu}></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab menu={desertsMenu}></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab menu={drinksMenu}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
