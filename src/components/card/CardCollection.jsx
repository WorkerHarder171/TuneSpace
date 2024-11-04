import { useId } from "react";
import { CiMenuKebab } from "react-icons/ci";
export default function CardCollection({
  className,
  img,
  name,
  title,
  ...props
}) {
  const id = useId();
  return (
    <>
      <div
        className={`${className} card flex justify-between items-center p-5 text-white `}
        id={`card-${id}`}
        {...props}
      >
        <div className="wrapper-img-name flex items-center gap-5">
          <img src={img} alt="Cover Image" width={100} />
          <div className="wrapper">
            <p className="text-semibold text-3xl capitalize">{title}</p>
            <p className="text-semibold text-lg capitalize text-[#9D9B99]">
              {name}
            </p>
          </div>
        </div>
        <button className="wrapper-icon text-4xl">
          <CiMenuKebab className="hover:text-[#9D9B99] duration-300"/>
        </button>
      </div>
    </>
  );
}
