import { ButtonPropsI } from "@/types/componentT";
import classes from "./Button.module.scss";

export const Button: React.FC<ButtonPropsI> = ({ children, ...rest }) => {
  return (
    <button {...rest} className={`${classes.btn} ${rest.className ?? ""}`}>
      {children}
    </button>
  );
};
