import { useId } from "react";
export default function CardCircle({img, alt,title,sub, ...props}) {
  const id = useId();
  return (
    <>
        <div className="card cursor-pointer p-2" {...props} id={`id${id}`}>
            <img className="rounded-full" src={img} alt={alt} />
            <div className="wrapper-text mt-3">
                <p className="text-white font-semibold text-xl">{title}</p>
                <p className="text-white text-sm">{sub}</p>
            </div>
        </div>
    </>
  )
}
