export default function Title({ titleName, title, description }) {
  return (
    <div className="text-center">
      <p className="text-[#FF3811] text-xl font-bold">{titleName}</p>
      <h2 className="text-5xl font-bold mt-2">{title}</h2>
      <p className="text-gray-500 mt-4 max-w-xl mx-auto">{description}</p>
    </div>
  );
}
