import { HTMLAttributes } from "react";
import "./style.scss";

interface Props extends HTMLAttributes<HTMLInputElement> {
  label: string;
  iconSrc?: string;
}

export const TextField = ({ label, iconSrc, ...props }: Props) => {
  return (
    <div className="textField">
      <label htmlFor="search">{label}</label>
      <div className="textFieldContent">
        <input
          placeholder={props.placeholder || label}
          id="search"
          {...props}
        />
        {iconSrc && <img src={iconSrc} />}
      </div>
    </div>
  );
};
