import { useId } from "react";

export default function CardSearch({className, text,img,alt, ...props}) {
  const id = useId();
  return (
    <>
        <div className={`relative ${className}`} {...props} id={`id${id}`}>
            <div className="absolute p-5 top-0 z-10 font-semibold text-xl text-white">
                {text}
            </div>
            <img className="relative-0 border-[10px] object-cover" src={img} alt={alt} width={300} height={200}/>
        </div>

    </>
  )
}
