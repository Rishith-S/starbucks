export default function SingleItem ({ imgSrc }: { imgSrc: string }) {
  return (
    <div className="w-16 h-16 lg:w-32 lg:h-32 bg-gradient-to-b from-transparent rounded-lg to-black flex items-center justify-center shadow-lg">
      <img src={imgSrc} alt="Donut" className="w-12 h-12 lg:w-28 lg:h-28 object-cover" />
    </div>
  );
};