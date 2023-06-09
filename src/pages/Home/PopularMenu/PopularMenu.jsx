
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import MenuButton from "../../../components/MenuButton/MenuButton";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    /* const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(menu => menu.category === 'popular');
            console.log(popularItems)
            setMenu(popularItems)
        })
    },[]) */

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <section className="my-10">
            <SectionTitle
            heading={'FROM OUR MENU'}
            subHeading={'Check it out'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <MenuButton text={'View Full Menu'}></MenuButton>
        </section>
    );
};

export default PopularMenu;