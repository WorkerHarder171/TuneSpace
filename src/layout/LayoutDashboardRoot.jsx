import Sidebar from "@/components/navigation/Sidebar";
import Navbar from "@/components/navigation/Navbar";
import PlayButton from "@/components/section/PlayButton";
import { Outlet } from "react-router-dom";

export default function LayoutDashboardRoot() {
  return (
    <>
      <div className="flex bg-[#2A2A2A] overflow-hidden">
        <Sidebar />
        <div className="w-full h-screen">
          <Navbar />
          <div className="mt-10">
            <Outlet />
          </div>
        </div>
        <PlayButton />
      </div>
    </>
  );
}
