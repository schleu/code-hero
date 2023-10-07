import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/Dashboard";
import { HeroDetailPage } from "../pages/HeroDetail";
import { AppRoutes } from "../constants/AppRoutes";
import { MasterLayout } from "../components/MasterLayout";
import { DashboardPageCustom } from "../pages/DashboardCustom";

export const Router = () => {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} element={<DashboardPage />} />
      <Route element={<MasterLayout />}>
        <Route path={AppRoutes.CUSTOM} element={<DashboardPageCustom />} />
        <Route path={AppRoutes.HERO_DETAIL} element={<HeroDetailPage />} />
      </Route>
    </Routes>
  );
};
