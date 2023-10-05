import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/Dashboard";
import { HeroDetailPage } from "../pages/HeroDetail";
import { AppRoutes } from "../constants/AppRoutes";

export const Router = () => {
  return (
    <Routes>
      <Route path={AppRoutes.DASHBOARD} element={<DashboardPage />} />
      <Route path={AppRoutes.HERO_DETAIL} element={<HeroDetailPage />} />
    </Routes>
  );
};
