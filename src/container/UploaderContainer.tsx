// ** service
import {
  useDeleteImageReq,
  useGetImagesReq,
  usePostImageReq,
  usePutImageNameReq,
  usePutImageOrderReq,
} from "@/service/imagesReq";

// ** components
import UploadComponent from "@/components/UploadComponent";
import Loader from "@/UI/Loader/Loader";

// ** react
import { useState, DragEvent } from "react";

// ** 3rd party
import { toast } from "react-toastify";

const UploaderContainer: React.FC = () => {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragSourceId, setDragSourceId] = useState<string | null>(null);
  const [dragTargetId, setDragTargetId] = useState<string | null>(null);

  const { mutate: deleteImageMutation } = useDeleteImageReq();
  const { mutate: ImageOrderMutation } = usePutImageOrderReq();
  const { mutate: postImageMutation, isLoading: postLoading } = usePostImageReq();
  const { mutate: putImageNameMutation } = usePutImageNameReq();
  const { data: files, refetch, isLoading: getLoading } = useGetImagesReq();

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
    setDragSourceId(files[index].id!);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>, overIndex: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";

    if (draggedIndex === null || draggedIndex === overIndex) return;

    setDragTargetId(files[overIndex].id!);

    const updated = [...files];
    const [moved] = updated.splice(draggedIndex, 1);
    updated.splice(overIndex, 0, moved);
    setDraggedIndex(overIndex);
  };

  const handleDragEnd = (e: React.DragEvent) => {
    e.preventDefault();

    ImageOrderMutation(
      { data: { from: dragSourceId!, to: dragTargetId! } },
      {
        onSuccess: () => {
          refetch();
          toast.success("Image order updated successfully");
        },
      }
    );
  };

  const handleDelete = (id: string) => {
    deleteImageMutation(id, {
      onSuccess: () => {
        refetch();
        toast.success("Image deleted successfully");
      },
    });
  };

  const handleAdd = (filesArr: File[]) => {
    // ** i'm validating file here because its better for my Upload.tsx component reusability and flexibility
    if (!isImages(filesArr)) {
      toast.error("Only images are allowed");
      return;
    }

    const formData = new FormData();
    filesArr.forEach((file) => formData.append("image", file));

    postImageMutation(formData, {
      onSuccess: () => {
        refetch();
        toast.success("Images added successfully");
      },
    });
  };

  const isImages = (filesArr: File[]) => {
    return filesArr.every((file) => file.type.startsWith("image/"));
  };

  const handleUpdateImageName = (id: string, name: string) => {
    putImageNameMutation(
      { id, name },
      {
        onSuccess: () => {
          refetch();
          toast.success("Image name updated successfully");
        },
      }
    );
  };

  const isLoading = postLoading || getLoading;

  return (
    <>
      {isLoading && <Loader />}
      <UploadComponent
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragStart={handleDragStart}
        handleDelete={handleDelete}
        handleAdd={handleAdd}
        handleEdit={handleUpdateImageName}
        files={files}
      />
    </>
  );
};

export default UploaderContainer;
