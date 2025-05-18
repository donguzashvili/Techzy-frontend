import { useRef, useEffect } from "react";

export const useClickOutside = (handler: () => void, open: boolean) => {
  const domNode = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const eventHandler = (event: MouseEvent) => {
      if (open && domNode.current && !domNode.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", eventHandler);
    return () => {
      document.removeEventListener("mousedown", eventHandler);
    };
  }, [open]);

  return domNode;
};
