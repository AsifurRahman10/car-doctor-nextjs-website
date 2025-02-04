import Image from "next/image";

export default function SectionTitle({ sectionName, sectionPath }) {
  return (
    <div className="my-5 flex justify-center">
      <figure className="relative w-full max-w-[1300px]">
        <Image
          src={"/assets/images/checkout/checkout.png"}
          width={1300}
          height={300}
          alt="section-banner"
          className="w-full h-auto rounded-2xl"
        />
        <div className="w-full h-full absolute top-0 overlay-bg rounded-2xl">
          <div className="w-full h-full flex items-center justify-center sm:justify-start sm:ml-10 md:ml-20 font-bold text-center sm:text-left">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl">
              {sectionName}
            </h2>
          </div>
          <div className="bg-red-600 text-white px-4 sm:px-6 py-2 text-sm sm:text-lg font-semibold clip-banner absolute bottom-6 sm:bottom-11 left-1/2 sm:left-[50%] md:left-[200px] lg:left-[500px] transform -translate-x-1/2 sm:translate-x-0 z-30">
            {sectionPath}
          </div>
        </div>
      </figure>
    </div>
  );
}
