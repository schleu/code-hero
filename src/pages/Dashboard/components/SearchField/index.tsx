import { HTMLAttributes } from "react";
import { SearchIcon } from "../../../../assets";
import "./styles.scss";

interface Props extends HTMLAttributes<HTMLInputElement> {
  label: string;
}

export const SearchField = ({ label, ...props }: Props) => {
  return (
    <div className="searchField">
      <label htmlFor="search" data-testid={"searchField"}>
        {label}
      </label>
      <div className="textFieldContent">
        <input
          placeholder={props.placeholder || label}
          id="search"
          {...props}
        />
        <SearchIcon />
      </div>
    </div>
  );
};
