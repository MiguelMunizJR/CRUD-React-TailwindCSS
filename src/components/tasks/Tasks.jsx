import { Transition } from "@headlessui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalDelete from "../../utilities/container/ModalDelete";
import SearchBar from "../../utilities/container/SearchBar";
import HeaderUser from "../container/HeaderUser";
import TasksCard from "./TasksCard";

const Tasks = ({
  isShowTasksForm,
  setIsShowTasksForm,
  isLoading,
  setIsLoading,
  setUpdate,
  showDelete,
  setShowDelete
}) => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    !tasks && setIsLoading(true);
    // getAllTasks();
  }, []);

  const getAllTasks = () => {
    setIsLoading(true);
    const URL = "https://crud-api-express.onrender.com/api/v1/tasks";

    axios
      .get(URL)
      .then((res) => {
        setTasks(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {/* Form Animation */}
      <Transition
        as="section"
        className={"fixed inset-0 z-50"}
        show={isShowTasksForm}
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {/* <FormModal
          setIsShowForm={setIsShowForm}
          getAllUsers={getAllUsers}
          update={update}
          setUpdate={setUpdate}
        /> */}
        <section className="w-screen h-screen opacity-30 dark:opacity-30 absolute inset-0 bg-slate-800 dark:bg-gray-800 z-10"></section>
      </Transition>
      {/* Modal Delete Confirm */}
      <Transition
        as="section"
        className={"fixed inset-0 z-50"}
        show={showDelete}
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ModalDelete 
          setShowDelete={setShowDelete} 
          // setIsDelete={setIsDelete} 
        />
        {/* MODAL DELETE CONFIRM HERE! */}
        <section className="w-screen h-screen opacity-30 dark:opacity-50 absolute inset-0 bg-slate-800 dark:bg-gray-800 z-10"></section>
      </Transition>
      <section className="w-full h-screen flex flex-col justify-between bg-zinc-200 dark:bg-containerDark">
        <article className="w-full h-14 md:mt-3 flex justify-between bg-navBar md:bg-transparent">
          <section className="w-full md:hidden ml-5 flex gap-4 items-center text-gray-300">
            <button className="">
              <i className="fa-solid fa-bars"></i>
            </button>
            <h1 className="font-default text-lg font-medium">CRUD Manager</h1>
          </section>
          <SearchBar placeholder="Search for tasks..."/>
          <HeaderUser
            setIsShowTasksForm={setIsShowTasksForm}
            setUpdate={setUpdate}
          />
        </article>
        <TasksCard
          tasks={tasks}
          getAllTasks={getAllTasks}
          isShowTasksForm={isShowTasksForm}
          setIsShowTasksForm={setIsShowTasksForm}
          isLoading={isLoading}
        />
      </section>
    </>
  );
};

export default Tasks;
