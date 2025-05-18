// ** react
import { useId } from "react";

// ** icons
import { AddIcon } from "@/assets/svg";

// ** styles
import classes from "./Upload.module.scss";

// ** components
import { DropzoneLayout } from "@/layout";

// ** types
import { FileI, UploadUIPropsI } from "@/types";

export const UploadUI: React.FC<UploadUIPropsI> = ({ setFiles, onDragLeave, onDragOver }) => {
  const id = useId();

  const processFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    const fileArr = Array.from(fileList);

    // ** we can handle file validation here to be sure its an image
    // but i'll make this component more reusable and let it upload every file and i will handle it on my container
    // so this componnet stays flexible and reusable

    const resultArr: FileI[] = fileArr.map((file, idx) => ({
      file,
      sortIndex: idx,
      source: URL.createObjectURL(file),
      altText: file.name,
    }));
    setFiles(resultArr);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    processFiles(files);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    processFiles(files);
  };

  return (
    <DropzoneLayout onDragLeave={onDragLeave} onDrop={handleDrop} onDragOver={onDragOver}>
      <label className={classes.upload} htmlFor={id}>
        <div className={classes.container}>
          <div className={classes.content}>
            <p>Click or drag and drop to upload</p>
            <AddIcon />
          </div>
          <input type="file" id={id} accept="image/*" multiple onChange={handleChange} />
        </div>
      </label>
    </DropzoneLayout>
  );
};
