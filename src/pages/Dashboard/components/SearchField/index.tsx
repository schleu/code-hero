import { HTMLAttributes } from "react";
import { Search } from "../../../../assets";
import "./style.scss";

interface Props extends HTMLAttributes<HTMLInputElement> {
  label: string;
}

export const SearchField = ({ label, ...props }: Props) => {
  return (
    <div className="searchField">
      <label htmlFor="search">{label}</label>
      <div className="textFieldContent">
        <input
          placeholder={props.placeholder || label}
          id="search"
          {...props}
        />
        <Search />
      </div>
    </div>
  );
};
