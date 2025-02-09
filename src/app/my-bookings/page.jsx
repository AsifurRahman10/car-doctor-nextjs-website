import SectionTitle from "@/Component/SectionTitle";
import { headers } from "next/headers";
import { Table } from "./Component/Table";

const getBookings = async () => {
  const data = await fetch(
    "https://nextjs-car-service-website.vercel.app/api/service",
    {
      headers: new Headers(await headers()),
    }
  );
  const res = await data.json();
  return res;
};
export default async function page() {
  const bookingData = await getBookings();
  return (
    <div>
      <SectionTitle sectionName={"My-Booking"} />

      <div className="overflow-x-auto mt-6">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Service Image</th>
              <th>Service Name</th>
              <th>Service Date</th>
              <th>Service Price</th>
              <th>Present address</th>
              <th>Phone</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((item) => (
              <Table key={item._id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
