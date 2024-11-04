import pp from "@/assets/pp.jpg";
import Jumbotron from "@/components/jumbotron/Jumbotron";
import CardCollection from "@/components/card/CardCollection";
import LayoutDashboardContent from "../layout/LayoutDashboardContent";

export default function Favorite() {
  const titles = [
    "Blinding Lights",
    "Shape of You",
    "Rolling in the Deep",
    "Uptown Funk",
    "Hello",
    "Levitating",
    "Stay",
    "Dance Monkey",
    "Despacito",
    "Perfect",
  ];

  const artists = [
    "The Weeknd",
    "Ed Sheeran",
    "Adele",
    "Bruno Mars",
    "Adele",
    "Dua Lipa",
    "The Kid LAROI",
    "Tones and I",
    "Luis Fonsi",
    "Ed Sheeran",
  ];

  const cards = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    img: pp,
    title: titles[Math.floor(Math.random() * titles.length)],
    name: artists[Math.floor(Math.random() * artists.length)],
  }));
  return (
    <>
      <LayoutDashboardContent>
        <div className="px-10 pb-32 h-full overflow-y-scroll scrollbar scrollbar-thumb-[#aaa] scrollbar-track-[#2A2A2A] scrollbar-thumb-rounded-lg">
          <Jumbotron title={"Lagu yang disukai"} count={"20"} img={pp} />
          <div className="wrapper mt-10 flex flex-col gap-3">
            {cards.map((item, id) => (
              <CardCollection
                id={item.id}
                img={pp}
                title={item.title}
                name={item.name}
                key={id}
              />
            ))}
            <CardCollection img={pp} title={"Free"} name={"mana aja"} />
          </div>
        </div>
      </LayoutDashboardContent>
    </>
  );
}
