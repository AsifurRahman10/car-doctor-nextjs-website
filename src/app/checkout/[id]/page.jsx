import SectionTitle from "@/Component/SectionTitle";
import CheckoutForm from "../component/CheckoutForm";
export default async function page({ params }) {
  const p = await params;
  const res = await fetch(`http://localhost:3000/api/service/${p.id}`);
  const data = await res.json();
  return (
    <div>
      <SectionTitle sectionName="Check Out" sectionPath="Home/Checkout" />

      {/* form section */}
      <CheckoutForm data={data} />
    </div>
  );
}
