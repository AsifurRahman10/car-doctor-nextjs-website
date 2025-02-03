import Image from "next/image";

export default function SectionTitle({ sectionName, sectionPath }) {
  return (
    <div className="my-5 flex justify-center">
      <figure className="relative">
        <Image
          src={"/assets/images/checkout/checkout.png"}
          width={1300}
          height={300}
          alt="section-banner"
        />
        <div className="w-full h-full absolute top-0 overlay-bg rounded-2xl">
          <div className="w-full h-full flex items-center font-bold ml-20">
            <div>
              <h2 className="text-white text-5xl">{sectionName}</h2>
            </div>
          </div>
          <div className="bg-red-600 text-white px-6 py-2 text-lg font-semibold clip-banner absolute bottom-11 left-[500px] z-30">
            {/* Home / Service Details */}
            {sectionPath}
          </div>
        </div>
      </figure>
    </div>
  );
}
