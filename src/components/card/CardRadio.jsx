import { useId } from "react";

export default function CardRadio({
  className,
  artist,
  colab,
  bg,
  img,
  ...props
}) {
  const id = useId();
  return (
    <div className="w-full">
      <div
        className={`card p-5 rounded-[10px] w-[300px] h-[300px] relative flex flex-col justify-between ${className}`}
        id={`card-radio-${id}`}
        style={{ backgroundColor: { bg } }}
        {...props}
      >
        <div className="card-header flex items-center justify-between">
          <p className="card-brand text-3xl font-semibold capitalize">ts</p>
          <h2 className="card-title text-2xl font-bold tracking-wider uppercase">
            Radio
          </h2>
        </div>
        <div className="card-body mx-auto">
          <img
            src={img}
            alt="radio"
            className="w-full h-40 object-cover rounded-full"
          />
        </div>
        <div className="card-footer">
          <p className="text-4xl capitalize font-bold">{artist}</p>
        </div>
      </div>
      <p className="font-semibold text-[#2A2A2A] capitalize">{colab}</p>
    </div>
  );
}
