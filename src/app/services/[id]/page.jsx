import SectionTitle from "@/Component/SectionTitle";
import { collectionListObj, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";

export default async function ServiceDetailsPage({ params }) {
  const p = await params;
  const collection = dbConnect(collectionListObj.serviceCollection);
  const data = await collection.findOne({ _id: new ObjectId(p.id) });
  const { title, service_id, img, facility, description } = data;
  return (
    <div>
      {/* section title */}
      <SectionTitle
        sectionName={"Service Details"}
        sectionPath={"Home/Service Details"}
      />

      <section className="flex  items-center my-10 gap-6">
        <figure className="flex-1">
          <Image src={img} width={800} height={400} alt={title} />
        </figure>
        <div className="flex-1">
          <h3 className="text-3xl font-semibold my-4">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </section>
    </div>
  );
}
