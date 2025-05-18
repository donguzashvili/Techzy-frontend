import { LoaderIcon } from "@/assets/svg";
import { Portal } from "../Portal/Portal";
import classes from "./Loader.module.scss";

const Loader = () => {
  return (
    <Portal>
      <div className={classes.loader}>
        <LoaderIcon />
      </div>
    </Portal>
  );
};

export default Loader;
