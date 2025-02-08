import { FaRegEdit } from "react-icons/fa";
import Image from "next/image";
import { DeleteBtn } from "./DeleteBtn";
import Link from "next/link";

export const Table = ({ item }) => {
  console.log(item);
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
      <td>{item?.presentAddress}</td>
      <td>{item?.phone}</td>
      <td>
        <Link href={`/update-booking/${item?._id}`}>
          <button className="btn">
            <FaRegEdit className="text-2xl" />
          </button>
        </Link>
      </td>
      <td>
        <DeleteBtn id={item._id} />
      </td>
    </tr>
  );
};
