import { useState, Fragment, useRef } from "react";
import { useDispatch } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import { PencilIcon } from "@heroicons/react/solid";
import { updateNote } from "../redux/editNoteSlice";

const EditNote = (props) => {
  const noteInfo = props;
  const dispatch = useDispatch();
  // const [isOpen, setIsOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [completion, setCompletion] = useState(complete);
  const [note, setNote] = useState({
    id: noteInfo?.id,
    title: noteInfo?.title,
    description: noteInfo?.description,
    complete: noteInfo?.complete,
  });

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const cancelButtonRef = useRef();

  // const handleTitle = (event) => {
  //   setTitle(event.target.value);
  // };

  // const handleDescription = (event) => {
  //   setDescription(event.target.value);
  // };

  // const handleCompletion = () => {
  //   if (complete === false) {
  //     setCompletion(true);
  //   } else if (complete === true) {
  //     setCompletion(false);
  //   }
  // };

  const handleEdit = (event) => {
    if (noteInfo?.complete === false) {
      const editNote = Object.assign(note, {
        [event.target.name]: event.target.value,
        complete: true,
      });
      console.log("your note", editNote);
      setNote(editNote);
    } else if (noteInfo?.complete === true) {
      const editNote = Object.assign(note, {
        [event.target.name]: event.target.value,
        complete: false,
      });
      console.log("your note", editNote);
      setNote(editNote);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(
      updateNote({
        // id, title, description, completion
        note,
      })
    );
  };

  return (
    <>
      <div className="max-w-md mx-auto">
        <button
          type="button"
          onClick={openModal}
          className="inline-flex items-center px-3.5 py-2.5  border border-green-400 rounded-sm shadow-sm text-sm  text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2  focus:ring-green-500"
        >
          <PencilIcon className="w-5 h-5 text-white" aria-hidden="true" />
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
                                onChange={handleEdit}
                                value={noteInfo?.title}
                                className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-sm sm:text-sm border-gray-300"
                                defaultValue={noteInfo.title}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                          <label
                            htmlFor="about"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                          >
                            Completion
                          </label>
                          <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <div className="flex justify-left">
                              {noteInfo.complete === false ? (
                                <button
                                  // onClick={closeModal}
                                  // ref={cancelButtonRef}
                                  className="bg-white py-2.5 px-3 border border-gray-400 rounded-sm shadow-sm text-sm font-medium text-white 
                bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                                >
                                  <span className="text-2xl font-bold leading-tight text-white">
                                    Uncomplete
                                  </span>
                                </button>
                              ) : (
                                <button
                                  type="submit"
                                  className="ml-3 inline-flex justify-center py-2.5 px-3 border border-transparent shadow-sm text-sm font-medium rounded-sm text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                                >
                                  <span className="text-2xl font-bold leading-tight text-white">
                                    Complete
                                  </span>
                                </button>
                              )}
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
                              name="task_Detail"
                              rows={3}
                              onChange={handleEdit}
                              value={noteInfo?.description}
                              className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-sm"
                              defaultValue={noteInfo?.description}
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

export default EditNote;
