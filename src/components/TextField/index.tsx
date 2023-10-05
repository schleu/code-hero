import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {
  label: string;
}

export const TextField = ({ label, ...props }: Props) => {
  return (
    <div className="textField">
      <label htmlFor="search">{label}</label>
      <div className="">
        <input
          placeholder={props.placeholder || label}
          id="search"
          {...props}
        />
      </div>
    </div>
  );
};
