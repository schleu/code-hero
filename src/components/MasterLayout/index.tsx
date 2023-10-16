import { Outlet } from "react-router-dom";
import { Header } from "../Headers";
import { LinkedinIcon } from "../../assets";
import "./styles.scss";

export const MasterLayout = () => {
  return (
    <div className="containerMasterLayout">
      <Header />
      <div className="contentMasterLayout">
        <Outlet />
      </div>
      <div className="footer">
        <div className="footerContent">
          <a href="https://www.linkedin.com/in/danilo-schleu" target="_blank">
            <span>{LinkedinIcon}</span> Danilo Schleu
          </a>
        </div>
      </div>
    </div>
  );
};
