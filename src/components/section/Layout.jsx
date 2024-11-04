import CardDefault from "@/components/card/CardDefault";
import pp from "@/assets/pp.jpg";

export default function Layout() {
  const cards = [
    { id: 1, img: pp, title: "free", name: "John Doe", year: "2024" },
    { id: 2, img: pp, title: "free", name: "Jane Smith", year: "2023" },
    { id: 3, img: pp, title: "free", name: "Alice Johnson", year: "2022" },
    { id: 4, img: pp, title: "free", name: "Bob Brown", year: "2021" },
    { id: 5, img: pp, title: "free", name: "Charlie Green", year: "2020" },
  ];

  return (
    <div className=" h-screen relative z-0 overflow-y-scroll scrollbar scrollbar-thumb-[#2A2A2A] scrollbar-track-[#2A2A2A] scrollbar-thumb-rounded-lg">
      <div className="wrapper-most my-5">
        <p className="capitalize text-2xl font-semibold text-white py-5">
          The Most Listened Albums
        </p>
        <div className="flex items-center gap-14">
          {cards.map((card, index) => (
            <CardDefault
              key={index}
              className="my-custom-class"
              img={card.img}
              title={card.title}
              name={card.name}
              year={card.year}
            />
          ))}
        </div>
      </div>

      <div className="wrapper-based my-5">
        <p className="capitalize text-2xl font-semibold text-white py-5">
          Based on Your Listening
        </p>
        <div className="flex items-center gap-14">
          {cards.map((card, index) => (
            <CardDefault
              key={index}
              className="my-custom-class"
              img={card.img}
              title={card.title}
              name={card.name}
              year={card.year}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
