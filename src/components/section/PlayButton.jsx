import pp from "@/assets/pp.jpg";
import { IoShuffle } from "react-icons/io5";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { FaPlayCircle, FaRegHeart } from "react-icons/fa";
import { LuRepeat2, LuPlaySquare, LuMaximize2 } from "react-icons/lu";
import { TbMicrophone2 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { PiSpeakerHighFill } from "react-icons/pi";
import { useState, useEffect } from "react";

export default function PlayButton() {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(238);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev < duration) {
          const newProgress = ((prev + 1) / duration) * 100;
          setProgress(newProgress);
          return prev + 1;
        } else {
          clearInterval(interval);
          return duration;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [duration]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    const audioElement = document.getElementById("audioPlayer");
    if (audioElement) {
      audioElement.volume = newVolume / 100;
    }
  };
  return (
    <>
      <div className="wrapper bg-black text-white flex justify-between px-10 py-5 items-center absolute w-full z-20 bottom-0">
        <div className="artist-album flex gap-5 items-center">
          <img src={pp} alt={""} width={60} />
          <div className="wrapper-text">
            <p className="text-semibold text-lg">John Doe</p>
            <p className="text-semibold text-lg">Album Name</p>
          </div>
        </div>
        <div className="animation-music">
          <div className="wrapper-button flex justify-center gap-7 my-4">
            <button className="btn-shuffle text-4xl duration-300 text-[#9D9B99] hover:text-white">
              <IoShuffle />
            </button>
            <button className="btn-prev text-4xl duration-300 text-[#9D9B99] hover:text-white">
              <BiSkipPrevious />
            </button>
            <button className="btn-play text-4xl duration-300 text-[#9D9B99] hover:text-white">
              <FaPlayCircle />
            </button>
            <button className="btn-next text-4xl duration-300 text-[#9D9B99] hover:text-white">
              <BiSkipNext />
            </button>
            <button className="btn-repeat text-4xl duration-300 text-[#9D9B99] hover:text-white">
              <LuRepeat2 />
            </button>
          </div>
          <div className="wrapper-minute-music flex justify-center items-center gap-7 text-white">
            <p className="text-xs">{formatTime(currentTime)}</p>

            <div className="progress-music w-full max-w-lg">
              <div className="w-full bg-gray-600 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-white h-full transition-all duration-300 ease-linear"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <p className="text-xs">{formatTime(duration)}</p>
          </div>
        </div>
        <div className="action-setting">
          <div className="wrapper-action flex gap-7">
            <button className="btn-action text-xl text-[#9D9B99] duration-300 hover:text-white">
              <LuPlaySquare />
            </button>
            <button className="btn-lirik text-xl text-[#9D9B99] duration-300 hover:text-white">
              <TbMicrophone2 />
            </button>
            <button className="btn-like text-xl text-[#9D9B99] duration-300 hover:text-white">
              <FaRegHeart />
            </button>
            <button className="btn-queue text-xl text-[#9D9B99] duration-300 hover:text-white">
              <HiOutlineQueueList />
            </button>
            <div className="flex items-center gap-2">
              <button className="btn-speaker text-xl text-[#9D9B99] duration-300 hover:text-white">
                <PiSpeakerHighFill />
              </button>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 rounded-lg appearance-none cursor-pointer overflow-hidden focus:outline-none"
                style={{
                  background: `linear-gradient(to right, white ${volume}%, #9D9B99 ${volume}%)`,
                  WebkitAppearance: "none",
                  appearance: "none",
                }}
              />
            </div>
            <button className="btn-maximize text-xl text-[#9D9B99] duration-300 hover:text-white">
              <LuMaximize2 />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          background-color: white;
          border-radius: 50%;
          cursor: pointer;
        }
        input[type='range']::-moz-range-thumb {
          width: 12px;
          height: 12px;
          background-color: white;
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
