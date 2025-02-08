import { FaRegEdit } from "react-icons/fa";
import Image from "next/image";
import { DeleteBtn } from "./DeleteBtn";

export const Table = ({ item }) => {
  return (
    <tr>
      <th>
        <Image
          src={item?.serviceImage}
          alt={item?.serviceTitle}
          width={50}
          height={30}
        />
      </th>
      <td>{item.serviceTitle}</td>
      <td>{item?.date}</td>
      <td>{item?.servicePrice}</td>
      <td>
        <button className="btn">
          <FaRegEdit className="text-2xl" />
        </button>
      </td>
      <td>
        <DeleteBtn id={item._id} />
      </td>
    </tr>
  );
};
