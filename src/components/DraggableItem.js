import React from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ id, name }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ITEM",
    item: { id, name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div className="rounded-sm">
        <div
        ref={drag}
        className="draggable-item bg-stone-300 bg-opacity-40 rounded-sm mb-1 mx-2 px-1 py-1 cursor-pointer text-cyan-800"
        style={{ opacity: isDragging ? 0.5 : 1 }}
        >
        {name}
        </div>
    </div>
  );
};

export default DraggableItem;
