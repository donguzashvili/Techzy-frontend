export interface ImagesI {
  name: string;
  url: string;
  id?: string;
  sortIndex: number;
}

export interface FileI {
  file: File | null;
  source: string | null;
  sortIndex: number;
  altText?: string | null;
  id?: string;
}

export interface DragI {
  onDragStart(): void;
}
