interface NFTCardProps {
  title: string;
  image: string;
  price: string;
}

const NFTCard = ({ title, image, price }: NFTCardProps) => {
  return (
    <div className="bg-zinc-900 rounded-lg shadow-md overflow-hidden border border-red-700 hover:scale-105 transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-white font-bold text-lg">{title}</h3>
        <p className="text-gold text-sm mt-2">Price: {price}</p>
      </div>
    </div>
  );
};

export default NFTCard;
