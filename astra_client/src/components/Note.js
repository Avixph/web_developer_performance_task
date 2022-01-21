import { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { XIcon } from "@heroicons/react/solid";
import { removeNote } from "../redux/deleteNoteSlice";
import EditNote from "./EditNote";

const Note = (props) => {
  console.log("your props", props.id);
  const dispatch = useDispatch();
  const [deletedNote, setDeletedNote] = useState(false);
  const id = props.id;
  console.log("your id", id);

  const deleteNote = (event) => {
    event.preventDefault();
    console.log("your id", id);
    setDeletedNote(true);
    dispatch(removeNote({ id }));
  };

  if (deletedNote) {
    return (
      <Redirect to={{ pathname: "/", deleted: { msg: "Note deleted!" } }} />
    );
  }

  return (
    <>
      <li key={props.id} className="col-span-1 bg-mainYellow rounded-sm shadow">
        <div className="w-full flex justify-between p-6 space-x-6">
          <div className="flex-1 truncate">
            <div className="flex  space-x-3">
              <h3 className="mt-1 text-gray-900 items-center text-xl font-bold ">
                {props.title}
              </h3>
            </div>

            <p className="mt-1 text-mainBlack text-left text-sm overflow-y-scroll">
              {props.description}
            </p>
          </div>
        </div>
        <div>
          <div className="-mt-2 mb-2 mr-3 flex  flex-row-reverse space-x-3 space-x-reverse divide-gray-200">
            <button
              type="button"
              onClick={(event) => deleteNote(event)}
              className="inline-flex items-center px-3.5 py-2.5 border border-red-400 rounded-sm shadow-sm text-sm text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2  focus:ring-red-500"
            >
              <XIcon className="w-5 h-5 text-white" aria-hidden="true" />
            </button>
            <EditNote id={id} />
          </div>
        </div>
      </li>
    </>
  );
};

export default Note;
