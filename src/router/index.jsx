import { Routes, Route } from "react-router-dom";

import LandingPage from "@/pages/LandingPage";
import Popular from "@/pages/Popular";
import LayoutDashboardRoot from "@/layout/LayoutDashboardRoot";
import Favorite from "@/pages/Favorite";
import Search from "@/pages/Search";
import Library from "@/pages/library";
import Setting from "@/pages/Setting";
import Information from "@/pages/Information";

export default function AppRoute() {
  return (
    <Routes>
      <Route element={<LayoutDashboardRoot />}>
        <Route index element={<LandingPage />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/search" element={<Search />} />
        <Route path="/library" element={<Library />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/information" element={<Information />} />
      </Route>
    </Routes>
  );
}
