import React, { useEffect, useState } from "react";

import { MdDragIndicator, MdEdit } from "react-icons/md";

import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Modal from "./Modal";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import { toast } from "react-toastify";

function Order({ tempPassedComments, setTempPassedComments }) {
  const [list, setList] = useState(tempPassedComments);

  const [isModalOpen, setModalOpen] = useState(false);

  const [editCommentId, setEditCommentId] = useState("");

  useEffect(() => {
    setList(tempPassedComments);
  }, [tempPassedComments]);

  const moveDown = () => {
    const tempArr = [...list];
    const popped = tempArr.pop();
    tempArr.unshift(popped);
    setList(tempArr);
  };

  const moveUp = () => {
    const tempArr = [...list];
    const shift = tempArr.shift();
    tempArr.push(shift);
    setList(tempArr);
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [remove] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, remove);

    return result;
  };

  const onEnd = (result) => {
    setList(reorder(list, result.source.index, result.destination.index));
  };

  return (
    <div className="flex items-start justify-start flex-col">
      <div className="flex items-center justify-between pb-7 w-full ">
        <h1 className="text-lg ">Set Order</h1>
        <button className="pr-8" onClick={() => toast.success("Data Saved")}>
          Save
        </button>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-center justify-center border-2 border-gray-400 rounded-xl p-4 w-full">
          <DragDropContext onDragEnd={onEnd}>
            <Droppable droppableId="123">
              {(provided, snapshot) => (
                <div ref={provided.innerRef}>
                  {list.map((item, index) => (
                    <Draggable
                      draggableId={item.id.toString()}
                      key={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div
                            key={item.id}
                            className=" flex items-center justify-between p-2   "
                          >
                            <MdDragIndicator />
                            <MdEdit
                              className="mx-2 cursor-pointer"
                              onClick={() => {
                                setModalOpen((prev) => !prev);
                                setEditCommentId(item.id);
                              }}
                            />
                            <p className="w-80 text-ellipsis overflow-hidden whitespace-nowrap pr-8">
                              {item.body}
                            </p>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          {!tempPassedComments.length && (
            <div>You have not selected any comment</div>
          )}
        </div>

        {tempPassedComments.length > 1 && (
          <div className="text-2xl">
            <TiArrowSortedUp className="cursor-pointer" onClick={moveUp} />
            <TiArrowSortedDown className="cursor-pointer" onClick={moveDown} />
          </div>
        )}
      </div>

      {isModalOpen && (
        <Modal
          setModalOpen={setModalOpen}
          editCommentId={editCommentId}
          setTempPassedComments={setTempPassedComments}
        />
      )}
    </div>
  );
}

export default Order;
