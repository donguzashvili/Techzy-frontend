import classes from "./GlobalLayout.module.scss";

export const GlobalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={classes.globalLayout}>{children}</div>;
};
