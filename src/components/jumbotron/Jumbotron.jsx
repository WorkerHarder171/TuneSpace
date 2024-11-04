export default function Jumbotron({ title, count, img, className }) {
  return (
    <>
      <div className={`${className} relative text-white mt-10`}>
        <div className="wrapper-text absolute z-[15] bottom-10 px-16">
          <p className="text-3xl font-bold capitalize">{title}</p>
          <p className="text-xl text-[#ddd]"> {count} </p>
        </div>
        <div className="banner  inset-0 bg-[#000] opacity-40 absolute z-10"></div>
        <img className="relative z-0 w-full h-[400px] object-cover" src={img} alt="" />
      </div>
    </>
  );
}
