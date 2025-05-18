// ** react
import { useEffect, useState } from "react";

// ** styles
import classes from "./Image.module.scss";

// ** types
import { ImagePropsI } from "@/types/componentT";

// ** icons
import { BinIcon, EditIcon } from "@/assets/svg";

// ** components
import { Button, Input, Modal } from "..";

export const Image: React.FC<ImagePropsI> = ({ data, handleDelete, onDragStart, handleEdit }) => {
  const [imageName, setImageName] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleAltUpdate = () => {
    handleEdit(data.id!, imageName);
    setOpenModal(false);
  };

  useEffect(() => {
    setImageName(data.altText ?? "");
  }, [data.altText]);

  return (
    <>
      {openModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <div className={classes.modalWrapper}>
            <Input
              label="Image alt"
              type="text"
              value={imageName}
              onChange={(e) => setImageName(e.target.value)}
            />
            <Button onClick={handleAltUpdate}>Save</Button>
          </div>
        </Modal>
      )}

      <div className={classes.image} onDragStart={onDragStart} draggable>
        <img src={data.source ?? undefined} alt={data.altText ?? undefined} />
        <div className={classes.actions}>
          <div className={classes.actionsContainer}>
            <p>{data.altText}</p>
            <Button className={classes.edit} onClick={() => setOpenModal(true)}>
              <EditIcon />
            </Button>
            <Button className={classes.delete} onClick={handleDelete}>
              <BinIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
