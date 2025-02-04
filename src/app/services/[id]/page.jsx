import SectionTitle from "@/Component/SectionTitle";
import { collectionListObj, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";

export default async function ServiceDetailsPage({ params }) {
  const p = await params;
  const collection = dbConnect(collectionListObj.serviceCollection);
  const data = await collection.findOne({ _id: new ObjectId(p.id) });
  const { title, img, description, price } = data;
  return (
    <div>
      {/* section title */}
      <SectionTitle
        sectionName={"Service Details"}
        sectionPath={"Home/Service Details"}
      />

      <section className="flex flex-col lg:flex-row items-center my-10 gap-6">
        <figure className="flex-1">
          <Image src={img} width={800} height={400} alt={title} />
        </figure>
        <div className="flex-1 flex flex-col">
          <h3 className="text-3xl font-semibold my-4">{title}</h3>
          <p className="text-gray-700">{description}</p>
          <p className="text-2xl font-semibold mt-4">Price : {price} $</p>
          <button className="bg-[#FF3811] block w-full text-white py-4 mt-4 text-lg font-medium rounded">
            CheckOut
          </button>
        </div>
      </section>
    </div>
  );
}
