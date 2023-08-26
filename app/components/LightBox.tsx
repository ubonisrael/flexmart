import { AiOutlineClose } from "react-icons/ai";
import ImageSlider from "./ImageSlider";
import { imageSliderProps } from "../@types/interface";

const lightBoxBtnStyle = {
  wrapper:
    "absolute top-0 left-0 h-full p-4 flex items-center justify-between",
  next: "relative w-16 h-16 lg:w-24 lg:h-24 rounded-full border-0 -right-1/4 lg:-right-1/3 font-extrabold text-5xl",
  prev: "relative w-16 h-16 lg:w-24 lg:h-24 rounded-full border-0 -left-1/4 lg:-left-1/3 font-extrabold text-5xl",
};

const LightBox = ({
  image,
  arr,
  prev,
  next,
  setImage,
  openBox,
  closeBox,
}: imageSliderProps) => {
  return (
    <section className="fixed top-0 left-0 w-screen h-screen bg-slate-950/70 z-50 hidden md:block">
      <div className="w-full h-full grid place-items-center backdrop-blur-sm">
        <div className="w-full flex flex-col items-center justify-center">
          <button
            className="absolute top-20 right-48 text-5xl self-end bg-transparent border-0 text-slate-100 hover:text-red-500 hover:scale-110"
            onClick={closeBox}
          >
            <AiOutlineClose />
          </button>
          <ImageSlider
            image={image}
            arr={arr}
            prev={prev}
            next={next}
            setImage={setImage}
            openBox={openBox}
            btnStyle={lightBoxBtnStyle}
          />
        </div>
      </div>
    </section>
  );
};

export default LightBox;
