import { ReactNode } from "react";
import { DragI, FileI } from "./commonT";

export interface InputPropsI extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export interface UploadComponentPropsI extends Omit<DragI, "onDragOver" | "onDragStart"> {
  onDrop: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDragStart(index: number): void;
  handleDelete(index: string): void;
  handleAdd(filesArr: File[]): void;
  handleEdit(id: string, name: string): void;
  files: FileI[];
}

export interface ImagePropsI extends DragI {
  data: FileI;
  handleDelete(): void;
  handleEdit(id: string, name: string): void;
}

export interface ButtonPropsI extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export interface DropzoneLayoutPropsI {
  children: ReactNode;
  onDrop: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
}

export interface UploadUIPropsI extends Omit<DropzoneLayoutPropsI, "children" | "onDrop"> {
  setFiles(files: FileI[]): void;
}
