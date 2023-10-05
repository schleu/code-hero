import { useParams } from "react-router-dom";
import SearchIcon from "../../assets/search.svg";

export const HeroDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      {id}
      <img src={SearchIcon} />
    </div>
  );
};
