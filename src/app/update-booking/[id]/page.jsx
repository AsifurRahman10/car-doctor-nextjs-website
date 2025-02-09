import SectionTitle from "@/Component/SectionTitle";
import UpdateForm from "../Component/UpdateForm";

export default async function page({ params }) {
  const p = await params;
  const res = await fetch(
    `https://nextjs-car-service-website.vercel.app/api/my-booking/${p.id}`
  );
  const data = await res.json();
  return (
    <div>
      <SectionTitle sectionName={"Update Booking"} />

      {/* form */}
      <UpdateForm data={data} p={p} />
    </div>
  );
}
