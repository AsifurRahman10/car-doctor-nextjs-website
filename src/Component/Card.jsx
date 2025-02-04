import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
export default function Card({ item }) {
  const { title, img, price, _id } = item;
  return (
    <div className="p-6 border rounded-xl">
      <Image
        className="rounded-xl mx-auto"
        src={img}
        width={354}
        height={208}
        alt={title}
      />
      <h3 className="mt-4 text-2xl font-bold">{title}</h3>
      <div className="text-[#FF3811] flex justify-between items-center">
        <p className=" text-xl font-semibold">Price : {price}</p>
        <Link href={`/services/${_id}`}>
          <FaArrowRightLong className="text-2xl" />
        </Link>
      </div>
    </div>
  );
}
