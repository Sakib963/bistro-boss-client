import {AiFillDelete} from 'react-icons/ai'
const TableRow = ({item, index, handleDelete}) => {
    const {image, price, name} = item
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={image}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
        </div>
      </td>
      <td>
        {name}
      </td>
      <td className="font-bold">${price}</td>
      <th>
        <AiFillDelete onClick={() =>handleDelete(item._id)} className='text-3xl w-10 h-10 p-2 rounded-md bg-[#B91C1C] text-white cursor-pointer'/>
      </th>
    </tr>
  );
};

export default TableRow;
