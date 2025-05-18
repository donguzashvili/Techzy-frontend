import { ReactNode } from "react";

// ** styles
import classes from "./Modal.module.scss";

// ** components
import { Portal } from "../Portal/Portal";

// ** icons
import { CloseIcon } from "@/assets/svg";

// ** hooks
import { useClickOutside } from "@/hooks/useClickOutside";

export const Modal: React.FC<{ children: ReactNode; onClose: () => void }> = ({
  children,
  onClose,
}) => {
  const ref = useClickOutside(onClose, true);

  return (
    <Portal>
      <div className={classes.modal} ref={ref}>
        <CloseIcon onClick={onClose} />
        {children}
      </div>
    </Portal>
  );
};

export default Modal;
