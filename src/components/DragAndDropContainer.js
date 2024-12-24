import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableItem from "./DraggableItem";
import DroppableArea from "./DroppableArea";
import { draggableItems } from "../data"; // Impor data dari file data.js
import "../styles.css";

const DragAndDropContainer = () => {
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDrop = (item) => {
    setDroppedItems((prevItems) => [...prevItems, item]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="drag-drop-container flex justify-center space-x-3">
        <div className="draggable-items rounded-md w-1/3 pb-5">
          <h2 className="text-white px-2 mb-3 mt-3">Available Options</h2>
          {draggableItems.map((item) => (
            <DraggableItem key={item.id} id={item.id} name={item.name} />
          ))}
        </div>
        <DroppableArea onDrop={handleDrop} items={droppedItems} />
      </div>
    </DndProvider>
  );
};

export default DragAndDropContainer;
