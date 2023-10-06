import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import "./styles.scss";

export const MasterLayout = () => {
  return (
    <div className="containerMasterLayout">
      <Header />
      <div className="contentMasterLayout">
        <Outlet />
      </div>
    </div>
  );
};
