// ** types
import { UploadComponentPropsI } from "@/types/componentT";
import { FileI } from "@/types/commonT";

// ** components
import { Image, UploadUI } from "@/UI";
import { DropzoneLayout } from "@/layout";

// ** styles
import classes from "./UploadComponent.module.scss";

const UploadComponent: React.FC<UploadComponentPropsI> = ({
  onDrop,
  onDragOver,
  onDragStart,
  handleAdd,
  handleDelete,
  handleEdit,
  files,
}) => {
  const handleFiles = (uploadedFiles: FileI[]) => {
    handleAdd(uploadedFiles.map((file) => file.file!));
  };

  return (
    <div className={classes.imageContainer}>
      {files.map((file) => (
        <DropzoneLayout
          key={file.id}
          onDragOver={(e) => onDragOver(e, file.sortIndex!)}
          onDrop={onDrop}
          onDragLeave={(e) => e.preventDefault()}
        >
          <Image
            data={file}
            handleDelete={() => handleDelete(file.id!)}
            onDragStart={() => onDragStart(file.sortIndex!)}
            handleEdit={handleEdit}
          />
        </DropzoneLayout>
      ))}

      <div className={classes.wrapper}>
        <UploadUI
          setFiles={(files) => handleFiles(files)}
          onDragOver={(e) => onDragOver(e, files.length)}
          onDragLeave={(e) => e.preventDefault()}
        />
      </div>
    </div>
  );
};

export default UploadComponent;
