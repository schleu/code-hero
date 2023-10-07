import CodeHeroIcon from "../../assets/codeHero.svg";
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
        <a href="/">
          <img src={CodeHeroIcon} alt="" data-testid="logo" />
        </a>
        <div className="menu">
          <p>Danilo Schleu</p>
          <div className="initials">{initials}</div>
        </div>
      </div>
    </div>
  );
};
