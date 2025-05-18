// ** styles
import classes from "./DropzoneLayout.module.scss";

// ** types
import { DropzoneLayoutPropsI } from "@/types/componentT";

export const DropzoneLayout: React.FC<DropzoneLayoutPropsI> = ({
  children,
  onDrop,
  onDragOver,
  onDragLeave,
}) => {
  return (
    <div
      className={classes.dropzone}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      <div>{children}</div>
    </div>
  );
};
