import Jumbotron from "@/components/Jumbotron/Jumbotron";
import LayoutDashboardContent from "../layout/LayoutDashboardContent";
import pp from "@/assets/pp.jpg";
import CardLibrary from "@/components/Card/CardLibrary";

export default function Library() {
  const cardCollections = [
    {
      type: "Playlist",
      img: pp,
      title: "Top Hits",
    },
    {
      type: "Playlist",
      img: pp,
      title: "Love Songs",
    },
    {
      type: "Playlist",
      img: pp,
      title: "Indie Pop",
    },
    {
      type: "Playlist",
      img: pp,
      title: "Romantic Ballads",
    },
    {
      type: "Playlist",
      img: pp,
      title: "Rock Hits",
    },
    {
      type: "Podcast",
      img: pp,
      title: "Pop Anthems",
    },
    {
      type: "Podcast",
      img: pp,
      title: "Top 50",
    },
    {
      type: "Podcast",
      img: pp,
      title: "Alternative Rock",
    },
    {
      type: "Playlist",
      img: pp,
      title: "Acoustic Hits",
    },
    {
      type: "Podcast",
      img: pp,
      title: "Power Ballads",
    },
  ];

  return (
    <>
      <LayoutDashboardContent>
        <div className="px-10 pb-32 overflow-y-scroll h-full h-full scrollbar scrollbar-thumb-[#aaa] scrollbar-track-[#2A2A2A] scrollbar-thumb-rounded-lg">
          <Jumbotron img={pp} title={"Koleksi Kamu"} />
          <div className="flex flex-col mt-10">
            {cardCollections.map((card, index) => (
              <CardLibrary
                key={index}
                className="cursor-pointer hover:bg-[#1b1b1b] duration-300"
                img={card.img}
                title={card.title}
                type={card.type}
              />
            ))}
          </div>
        </div>
      </LayoutDashboardContent>
    </>
  );
}
