import LayoutDashboardContent from "@/layout/LayoutDashboardContent";
import { IoMdSearch } from "react-icons/io";
import CardSearch from "@/components/card/CardSearch";
import pp from "@/assets/pp.jpg";

export default function Search() {
  const exploreData = [
    { text: "Dibuat Untuk Kamu", backgroundColor: "#1E3264", img: "https://example.com/image1.jpg" },
    { text: "Rilis Baru", backgroundColor: "#477D2F", img: "https://example.com/image2.jpg" },
    { text: "Pop", backgroundColor: "#2D46B9", img: "https://example.com/image3.jpg" },
    { text: "Indie", backgroundColor: "#8D2525", img: "https://example.com/image4.jpg" },
    { text: "Musik Indonesia", backgroundColor: "#BA1F1F", img: "https://example.com/image5.jpg" },
    { text: "K-pop", backgroundColor: "#D72042", img: "https://example.com/image6.jpg" },
    { text: "Peringkat Podcast", backgroundColor: "#1D3A5F", img: "https://example.com/image7.jpg" },
    { text: "Rilis Baru Podcast", backgroundColor: "#8E5C9A", img: "https://example.com/image8.jpg" },
    { text: "Video Podcast", backgroundColor: "#1E3264", img: "https://example.com/image9.jpg" },
    { text: "Only on Spotify", backgroundColor: "#C81E50", img: "https://example.com/image10.jpg" },
    { text: "Tangga Lagu", backgroundColor: "#725DAD", img: "https://example.com/image11.jpg" },
    { text: "Di mobil", backgroundColor: "#196484", img: "https://example.com/image12.jpg" },
    { text: "Hip Hop", backgroundColor: "#AF2896", img: "https://example.com/image13.jpg" },
    { text: "Rock", backgroundColor: "#388E3C", img: "https://example.com/image14.jpg" },
    { text: "RnB", backgroundColor: "#8C1932", img: "https://example.com/image15.jpg" },
    { text: "Temukan", backgroundColor: "#C22D53", img: "https://example.com/image16.jpg" },
    { text: "Radio", backgroundColor: "#4A148C", img: "https://example.com/image17.jpg" },
    { text: "Dance/Elektronik", backgroundColor: "#00796B", img: "https://example.com/image18.jpg" },
    { text: "Mood", backgroundColor: "#FF4081", img: "https://example.com/image19.jpg" },
    { text: "Tidur", backgroundColor: "#512DA8", img: "https://example.com/image20.jpg" },
    { text: "Di Rumah", backgroundColor: "#303F9F", img: "https://example.com/image21.jpg" },
    { text: "Chill", backgroundColor: "#FFA000", img: "https://example.com/image22.jpg" },
    { text: "Lagu Jepang", backgroundColor: "#C2185B", img: "https://example.com/image23.jpg" },
    { text: "Jazz", backgroundColor: "#D81B60", img: "https://example.com/image24.jpg" },
    { text: "Pesta", backgroundColor: "#5D4037", img: "https://example.com/image25.jpg" },
    { text: "Olahraga", backgroundColor: "#0288D1", img: "https://example.com/image26.jpg" },
    { text: "Cinta", backgroundColor: "#880E4F", img: "https://example.com/image27.jpg" },
    { text: "Metal", backgroundColor: "#4E342E", img: "https://example.com/image28.jpg" },
    { text: "Dekade", backgroundColor: "#F57C00", img: "https://example.com/image29.jpg" },
    { text: "Trending", backgroundColor: "#689F38", img: "https://example.com/image30.jpg" },
    { text: "Karaoke", backgroundColor: "#F44336", img: "https://example.com/image31.jpg" },
    { text: "Folk & Akustik", backgroundColor: "#E91E63", img: "https://example.com/image32.jpg" },
    { text: "Fokus", backgroundColor: "#FF5722", img: "https://example.com/image33.jpg" },
    { text: "Soul", backgroundColor: "#9C27B0", img: "https://example.com/image34.jpg" },
    { text: "Anak-anak & Keluarga", backgroundColor: "#D32F2F", img: "https://example.com/image35.jpg" },
    { text: "Gaming", backgroundColor: "#7B1FA2", img: "https://example.com/image36.jpg" },
    { text: "Latin", backgroundColor: "#C2185B", img: "https://example.com/image37.jpg" },
    { text: "TV & Film", backgroundColor: "#7C4DFF", img: "https://example.com/image38.jpg" },
    { text: "Instrumental", backgroundColor: "#0288D1", img: "https://example.com/image39.jpg" },
    { text: "Ambient", backgroundColor: "#558B2F", img: "https://example.com/image40.jpg" },
    { text: "Blues", backgroundColor: "#5E35B1", img: "https://example.com/image41.jpg" },
    { text: "Memasak & Bersantap", backgroundColor: "#6A1B9A", img: "https://example.com/image42.jpg" },
    { text: "Alternatif", backgroundColor: "#BF360C", img: "https://example.com/image43.jpg" },
    { text: "Perjalanan", backgroundColor: "#1976D2", img: "https://example.com/image44.jpg" },
    { text: "Penulis lagu", backgroundColor: "#B71C1C", img: "https://example.com/image45.jpg" },
    { text: "Alam & Suara", backgroundColor: "#64B5F6", img: "https://example.com/image46.jpg" },
    { text: "Funk", backgroundColor: "#303F9F", img: "https://example.com/image47.jpg" },
    { text: "Spotify Single", backgroundColor: "#512DA8", img: "https://example.com/image48.jpg" },
    { text: "Musim Panas", backgroundColor: "#0288D1", img: "https://example.com/image49.jpg" },
    { text: "EQUAL", backgroundColor: "#FF5252", img: "https://example.com/image50.jpg" },
    { text: "Fresh Finds", backgroundColor: "#D81B60", img: "https://example.com/image51.jpg" },
    { text: "Netflix", backgroundColor: "#D32F2F", img: "https://example.com/image52.jpg" },
    { text: "Disney", backgroundColor: "#A1887F", img: "https://example.com/image53.jpg" },
    { text: "Country", backgroundColor: "#7CB342", img: "https://example.com/image54.jpg" },
    { text: "Pop Melayu", backgroundColor: "#0288D1", img: "https://example.com/image55.jpg" },
    { text: "Kebugaran", backgroundColor: "#388E3C", img: "https://example.com/image56.jpg" },
    { text: "Tastemaker", backgroundColor: "#C51162", img: "https://example.com/image57.jpg" },
    { text: "Arab", backgroundColor: "#D50000", img: "https://example.com/image58.jpg" },
    { text: "Karibia", backgroundColor: "#0288D1", img: "https://example.com/image59.jpg" },
    { text: "Afro", backgroundColor: "#BF360C", img: "https://example.com/image60.jpg" }
  ];
  

  const cardData = [
    {
      text: "Lagu Populer",
      img: pp,
      alt: "Image 1",
    },
    {
      text: "Hits Terbaru",
      img: pp,
      alt: "Image 2",
    },
    {
      text: "Lagu Nostalgia",
      img: pp,
      alt: "Image 3",
    },
    {
      text: "Playlist Favorit",
      img: pp,
      alt: "Image 4",
    },
  ];
  return (
    <>
      <LayoutDashboardContent>
        <div className="px-10 overflow-y-scroll h-full pb-32 scrollbar scrollbar-thumb-[#aaa] scrollbar-track-[#2A2A2A] scrollbar-thumb-rounded-lg">
          <div className="wrapper bg-white mt-16 flex items-center gap-6 rounded-[10px] px-5 w-full ">
            <i className="text-[#000] text-4xl">
              <IoMdSearch />
            </i>
            <input
              type="search"
              className="text-2xl w-full py-5 rounded-[10px] border-none outline-none placeholder-[#333]"
              placeholder="Apa yang ingin kamu dengarkan?"
            />
          </div>
          <div className="wrapper-discover-fou-u">
            <p className="text-white text-2xl font-semibold mt-10 capitalize">
              Mulai Menjelajahi
            </p>
            <div className="grid grid-cols-4 gap-5 mt-5">
              {cardData.map((card, index) => (
                <CardSearch
                  key={index}
                  text={card.text}
                  img={card.img}
                  alt={card.alt}
                />
              ))}
            </div>
          </div>

          <div className="wrapper-discover-all">
            <p className="text-white text-2xl font-semibold mt-10 capitalize">
              Jelajahi Semua
            </p>
            <div className="grid grid-cols-4 gap-5 mt-5">
              {exploreData.map((explore, index) => (
                <CardSearch
                  key={index}
                  text={explore.text}
                  // img={explore.img}
                  // alt={explore.text}
                  style={{ backgroundColor: explore.backgroundColor }}
                />
              ))}
            </div>
          </div>
        </div>
      </LayoutDashboardContent>
    </>
  );
}
