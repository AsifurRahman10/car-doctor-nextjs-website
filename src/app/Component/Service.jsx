import Card from "@/Component/Card";
import Title from "@/Component/Title";
import { collectionListObj, dbConnect } from "@/lib/dbConnect";

export default async function Service() {
  const serviceCollection = dbConnect(collectionListObj.serviceCollection);
  const data = await serviceCollection.find({}).toArray();
  return (
    <div className="my-10 lg:my-20">
      <Title
        titleName={"Service"}
        title={"Our Service Area"}
        description={
          "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        }
      ></Title>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {data.map((item) => (
          <Card key={item._id} item={item}></Card>
        ))}
      </div>
    </div>
  );
}
