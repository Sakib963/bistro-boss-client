
const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className="flex gap-3">
            <img style={{borderRadius: '0px 200px 200px 200px'}} src={image} className="w-[100px]"/>
            <div>
                <h3 className="uppercase text-xl">{name}------------</h3>
                <p className="text-[#737373]">{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;