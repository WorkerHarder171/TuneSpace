import { useId } from "react";

export default function CardDefault({ className, img, name, title, ...props }) {
  const id = useId();
  return (
    <div
      className={`${className} card text-white flex flex-col gap-3 w-[300px] cursor-pointer`}
      id={`card-${id}`}
      {...props}
    >
      <img className="cover rounded-[10px]" src={img} alt="Cover Image" width={300} />
      <div className="wrapper flex flex-col justify-start">
      <p className="text-semibold text-2xl capitalize">
          {title}
        </p>
        <p className="text-semibold text-md text-[#9D9B99]">
          {name} 
        </p>
      </div>
    </div>
  );
}
