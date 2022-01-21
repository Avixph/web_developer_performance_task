import { useState, Fragment, useRef } from "react";
import {
  useDispatch,
  // useSelector
} from "react-redux";
// import { Redirect } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { PencilAltIcon } from "@heroicons/react/solid";
import { postNote } from "../redux/createNoteSlice";
// import CreateForm from "./CreateForm";

const CreateNote = (props) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [note, setNote] = useState({
    title: "",
    description: "",
  });

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const cancelButtonRef = useRef();

  const handleChange = (event) => {
    const newNote = Object.assign(note, {
      [event.target.name]: event.target.value,
    });
    console.log("your note", newNote);
    setNote(newNote);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(
      postNote({
        // title, description,
        note,
      })
    );
    // setTitle("");
    // setDescription("");
  };

  // if (newNoteStatus === "success") {
  //   return <Redirect to="/" />;
  // }

  return (
    <>
      <div className="w-full max-w-md  mx-auto">
        <button
          type="button"
          onClick={openModal}
          className="inline-flex justify-between items-center px-4 py-2 border border-yellow-400 rounded-sm shadow-sm text-sm  text-white bg-yellow-400 hover:bg-MainYellow focus:outline-none focus:ring-2  focus:ring-yellow-500"
        >
          <span className="text-3xl font-bold leading-tight text-white">
            Add Note
          </span>
          <PencilAltIcon className="w-10 h-10 text-white" aria-hidden="true" />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          initialFocus={cancelButtonRef}
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-sm">
                <form onClick={handleSubmit} className="space-y-8">
                  <div className="space-y-8 sm:space-y-5">
                    <div>
                      <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                          <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                          >
                            Title
                          </label>
                          <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <div className="max-w-lg flex rounded-md shadow-sm">
                              <input
                                type="text"
                                name="title"
                                id="title"
                                autoComplete="title"
                                onChange={handleChange}
                                // value={note.title}
                                className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-sm sm:text-sm border-gray-300"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                          <label
                            htmlFor="about"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                          >
                            Description
                          </label>
                          <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <textarea
                              id="about"
                              name="description"
                              rows={3}
                              onChange={handleChange}
                              // value={note.description}
                              className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-sm"
                              defaultValue={""}
                            />
                            <p className="mt-2 text-sm text-gray-500">
                              Write a breif description.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-5">
                    <div className="flex justify-end">
                      <button
                        onClick={closeModal}
                        ref={cancelButtonRef}
                        className="bg-white py-2.5 px-4 border border-red-400 rounded-sm shadow-sm text-sm font-medium text-white 
                bg-red-400 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        onClick={closeModal}
                        className="ml-3 inline-flex justify-center py-2.5 px-4 border border-transparent shadow-sm text-sm font-medium rounded-sm text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CreateNote;
