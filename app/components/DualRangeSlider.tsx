import * as Slider from "@radix-ui/react-slider";

const DualRangeSlider = ({
  priceRange,
  handleChange,
}: {
  priceRange: number[];
  handleChange: (value: typeof priceRange) => void;
}) => {
  return (
    <Slider.Root className="relative flex items-center h-2 w-80" min={0} max={2000} minStepsBetweenThumbs={10} value={priceRange} onValueChange={(number) => handleChange(number)
    }>
      <Slider.Track className="relative grow h-2 rounded-lg border border-solid border-slate-900">
        <Slider.Range  className="absolute bg-slate-900 h-full rounded-[1px]"/>
      </Slider.Track>
      <Slider.Thumb aria-label="price filter" className="block w-3 h-3 rounded-full bg-slate-100 border border-solid border-slate-900 hover:border-slate-100 hover:cursor-pointer hover:bg-slate-900" />
      <Slider.Thumb aria-label="price filter" className="block w-3 h-3 rounded-full bg-slate-100 border border-solid border-slate-900 hover:border-slate-100 hover:cursor-pointer hover:bg-slate-900" />
    </Slider.Root>
  );
};

export default DualRangeSlider;
