// loading skeleton for the products page

const CardSkeleton = () => (
  <div className="relative w-full h-84 p-4 bg-slate-100 shadow rounded-lg">
    <div className="animate-pulse w-full h-48 bg-gray-300"></div>
    <div className="w-full h-[100px] py-2 flex flex-col items-start justify-between">
      <div className="animate-pulse w-3/4 h-6 bg-gray-300"></div>
      <div className="flex items-center justify-between">
        <div className="animate-pulse w-1/4 h-4 bg-gray-300"></div>
        <div className="animate-pulse w-1/4 h-4 bg-gray-300"></div>
      </div>
    </div>
    <div className="absolute top-4 right-4 p-1 bg-gray-300 rounded-bl-2xl">
      <div className="animate-pulse w-10 h-4 bg-gray-400"></div>
    </div>
    <div className="w-full grid gap-1 md:flex">
      <div className="md:flex-1">
        <div className="animate-pulse w-full h-12 bg-gray-500"></div>
      </div>
      <div className="w-full md:flex-1">
        <div className="flex items-center justify-center gap-1 animate-pulse w-full h-12 bg-gray-500"></div>
      </div>
    </div>
  </div>
);

export default CardSkeleton;
