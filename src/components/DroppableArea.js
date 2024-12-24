import React from "react";
import { useDrop } from "react-dnd";

const DroppableArea = ({ onDrop, items }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ITEM",
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const hasItems = items.length > 0;

  return (
    <div
      ref={drop}
      className={`droppable-area flex flex-col rounded-md w-1/3 h-fit pb-3`}
    >
      <div>
        
        <div className="px-2 text-white mb-3 mt-3">
          <h2>Selected Items</h2>
        </div>
        <div>
        {!hasItems && !isOver && (
          <p className="text-gray-500 text-center italic">Drop items here</p>
        )}
          <ul className=''>
            {items.map((item, index) => (
              <li
                key={index}
                className="mb-1 droppable-items px-1 py-1 mx-2 rounded-sm bg-orange-100 bg-opacity-40"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DroppableArea;
