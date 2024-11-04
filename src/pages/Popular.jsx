import LayoutDashboardContent from "@/layout/LayoutDashboardContent";
import CardCircle from "@/components/card/CardCircle";
import CardDefault from "@/components/card/CardDefault";
import pp from "@/assets/pp.jpg";
import CardRadio from "../components/card/CardRadio";

export default function Popular() {
  const popularAlbums = [
    { artist: "bernadya", bg: "#B8F171", img: pp, colab: "colaboration" },
    { artist: "mahalini", bg: "#FFD6A5", img: pp, colab: "colaboration" },
    { artist: "juicy luicy", bg: "#A4F4EC", img: pp, colab: "colaboration" },
    { artist: "tulus", bg: "#FFE88B", img: pp, colab: "colaboration" },
  ];
  const popularArtists = [
    {
      name: "Bernadya",
      type: "Artist",
      img: pp,
    },
    {
      name: "Mahalini",
      type: "Artist",
      img: pp,
    },
    {
      name: "Juicy Luicy",
      type: "Artist",
      img: pp,
    },
    {
      name: "Tulus",
      type: "Artist",
      img: pp,
    },
    {
      name: "Last Child",
      type: "Artist",
      img: pp,
    },
  ];

  const cards = [
    { id: 1, img: pp, title: "free", name: "John Doe", year: "2024" },
    { id: 2, img: pp, title: "free", name: "Jane Smith", year: "2023" },
    { id: 3, img: pp, title: "free", name: "Alice Johnson", year: "2022" },
    { id: 4, img: pp, title: "free", name: "Bob Brown", year: "2021" },
    { id: 5, img: pp, title: "free", name: "Charlie Green", year: "2020" },
  ];

  return (
    <>
      <LayoutDashboardContent>
        <div className="px-10 pb-32 mt-10 overflow-y-scroll h-full scrollbar scrollbar-thumb-[#aaa] scrollbar-track-[#2A2A2A] scrollbar-thumb-rounded-lg">
          <div className="grid grid-cols-5 gap-5">
            {popularArtists.map((artist, index) => (
              <CardCircle
                key={index}
                img={artist.img}
                alt={artist.name}
                title={artist.name}
                sub={artist.type}
              />
            ))}
          </div>

          <div className="wrapper-popular">
            <p className="capitalize text-2xl font-semibold text-white py-5">
              Popular Albums
            </p>
            <div className="flex items-center gap-5">
              {cards.map((card, index) => (
                <CardDefault
                  key={index}
                  className="my-custom-class"
                  img={card.img}
                  title={card.title}
                  name={card.name}
                />
              ))}
            </div>
          </div>

          <div className="wrapper-popular">
            <p className="capitalize text-2xl font-semibold text-white py-5">
              Popular Radio
            </p>
            <div className="flex items-center gap-5">
              {popularAlbums.map((card, index) => (
                <CardRadio
                  key={index}
                  img={card.img}
                  artist={card.artist}
                  colab={card.colab}
                  style={{ backgroundColor: card.bg }}
                />
              ))}
            </div>
          </div>

          <div className="wrapper-popular">
            <p className="capitalize text-2xl font-semibold text-white py-5">
              Featured Charts
            </p>
            <div className="flex items-center gap-5">
              {cards.map((card, index) => (
                <CardDefault
                  key={index}
                  className="my-custom-class"
                  img={card.img}
                  title={card.title}
                  name={card.name}
                />
              ))}
            </div>
          </div>
        </div>
      </LayoutDashboardContent>
    </>
  );
}
