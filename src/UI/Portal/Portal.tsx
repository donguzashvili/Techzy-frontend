import { ReactNode } from "react";
import ReactDOM from "react-dom";
import classes from "./Portal.module.scss";

export const Portal: React.FC<{ children: ReactNode }> = ({ children }) => {
  return ReactDOM.createPortal(
    <div className={classes.portal}>{children}</div>,
    document.getElementById("portal")!
  );
};
