interface TopBannerProps {
  title: string;
  bgImage: string;
}

export default function TopBanner({ title, bgImage }: TopBannerProps) {
  return (
    <div className={`w-full h-40 lg:h-72 ${bgImage} bg-cover bg-center mt-16 lg:mt-18 flex items-center justify-center`}>
      <h1 className="text-4xl lg:text-7xl font-semibold text-center text-white">
        {title}
      </h1>
    </div>
  );
}