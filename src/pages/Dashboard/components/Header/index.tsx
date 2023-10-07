import LogoIcon from "../../../../assets/objectiveLogo.svg";
import "./styles.scss";

export const Header = () => {
  const userName = "Danilo Schleu";

  const getInitials = () => {
    const splited = userName.split(" ");

    const firstLetter = splited[0][0];
    let secondLetter = "";
    if (splited.length > 1) secondLetter = splited[1][0];

    return firstLetter + secondLetter;
  };

  const initials = getInitials();

  return (
    <div className="headerContainer">
      <div className="headerContent">
        <img src={LogoIcon} alt="" data-testid="logo" />

        <div className="menu">
          <p>
            <span>{userName}</span> Teste de Front-end
          </p>
          <div className="initials">{initials}</div>
        </div>
      </div>
    </div>
  );
};
