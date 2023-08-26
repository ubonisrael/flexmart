import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import { imageSliderProps } from "../@types/interface";

const ImageSlider = ({
  image,
  arr,
  prev,
  next,
  setImage,
  openBox,
  btnStyle,
}: imageSliderProps) => {
  const handleImage = (value: number) => {
    openBox();
    setImage(value);
  };

  return (
    <section className={`relative ${btnStyle ? "w-2/3 max-w-[640px]" : "w-full max-w-lg"} grid gap-4`}>
      <div className={`relative w-full h-96 ${btnStyle ? "md:h-[440px] lg:h-[572px]": "md:h-[492px]"}`}>
        <Image
        className="min-[448px]:rounded-2xl"
          src={arr[image]}
          alt="product image"
          fill
          sizes="(min-width: 384px) 45vw,
            (min-width: 512px) 33vw,
            90vw"
        />
        <div
        className={`absolute left-0 w-full h-10 p-4 flex items-center justify-between ${
          btnStyle ? btnStyle.wrapper : "top-1/2 md:hidden"
        }`}
      >
        <button
          className={`border bg-slate-50 hover:bg-slate-950 hover:text-slate-50 rounded-full flex items-center border-slate-950 hover:border-slate-50 transition-all ease-linear duration-300 justify-center ${
            btnStyle ? btnStyle.prev : "w-8 h-8 font-bold text-2xl"
          }`}
          onClick={prev}
        >
          <AiOutlineLeft />
        </button>
        <button
          className={`border bg-slate-50 hover:bg-slate-950 hover:text-slate-50 rounded-full flex items-center border-slate-950 hover:border-slate-50 transition-all ease-linear duration-300 justify-center ${
            btnStyle ? btnStyle.next : "w-8 h-8 font-bold text-2xl"
          }`}
          onClick={next}
        >
          <AiOutlineRight />
        </button>
      </div>
      </div>
      <div className="w-full px-2 hidden md:flex items-center justify-evenly">
        {arr.map((img, i) => (
          <div className="relative w-16 h-16 border-0 rounded-lg cursor-pointer hover:opacity-75 hover:border hover:border-slate-950" key={i}>
            <Image
              src={img}
              alt="image thumbnail"
              fill
              sizes="(min-width: 48px) 45vw,
              (min-width: 48px) 33vw,
              90vw"
              className="rounded"
              onClick={() => handleImage(i)}
              style={
                i === image
                  ? { opacity: "0.4", border: "2px solid hsl(26, 100%, 55%)" }
                  : { opacity: "", border: "1px solid transparent" }
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
