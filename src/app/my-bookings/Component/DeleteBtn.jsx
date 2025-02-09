"use client";
import { useRouter } from "next/navigation";
import { MdDeleteOutline } from "react-icons/md";
export const DeleteBtn = ({ id }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    const res = await fetch(
      `https://nextjs-car-service-website.vercel.app/api/service/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
    router.refresh();
  };
  return (
    <button onClick={() => handleDelete(id)} className="btn">
      <MdDeleteOutline className="text-2xl" />
    </button>
  );
};
