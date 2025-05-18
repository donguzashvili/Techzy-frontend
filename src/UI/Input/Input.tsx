import { InputPropsI } from "@/types/componentT";
import classes from "./Input.module.scss";
import { useId } from "react";

export const Input: React.FC<InputPropsI> = ({ label, ...rest }) => {
  const id = useId();
  return (
    <label className={classes.label} htmlFor={rest.id || id}>
      {label && <p>{label}</p>}
      <input type="text" id={id} {...rest} />
    </label>
  );
};
