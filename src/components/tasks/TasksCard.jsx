import React, { useState } from "react";
import ButtonNewHeader from "../../utilities/container/ButtonHeader";
import TaskListRender from "../../utilities/tasks/TaskListRender";

const TasksCard = ({
  tasks,
  getAllTasks,
  // isShowForm,
  setIsShowForm,
  isLoading,
}) => {
  const [isSort, setIsSort] = useState(false);
  const [reload, setReload] = useState(false);

  const setSort = () => {
    setIsSort(!isSort);
  };

  const reloadUsers = () => {
    getAllTasks();
    setReload(true);
  };

  const usersReady = () => {
    if (tasks) {
      setReload(false);
    }
    setReload(false);
  };
  return (
    <section className="w-full h-5/6 mt-10 mx-auto relative z-0 flex flex-col justify-center gap-4">
      <article className="w-full flex justify-between items-center">
        <div className="sm:ml-3 md:ml-6 lg:ml-8 flex items-center text-gray-900 dark:text-gray-300">
          <h2 className="ml-4 font-default text-3xl">Tasks</h2>
          <i className="fa-solid fa-list-check pl-2 text-md"></i>
        </div>
        <div className="mr-4 sm:mr-8 md:mr-10 lg:mr-24 flex justify-center items-center gap-3">
          <div className="mr-2 md:hidden">
            <ButtonNewHeader
              setIsShowForm={setIsShowForm}
              // setUpdate={setUpdate}
            />
          </div>
          <button
            className="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded p-2 text-md shadow-md transition ease-in-out duration-150 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-black active:ring-2 active:ring-itemsNavH"
            onClick={reloadUsers}
            onAnimationEnd={usersReady}
          >
            <i
              className={`${reload && "animate-reload"} fa-solid fa-rotate`}
            ></i>
          </button>
          <button
            onClick={setSort}
            className="bg-gray-100 dark:bg-gray-800 dark:text-gray-300  rounded p-2 text-md shadow-md transition ease-in-out duration-150 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-black active:ring-2 active:ring-itemsNavH"
          >
            {isSort ? (
              <i className="fa-solid fa-arrow-up-short-wide"></i>
            ) : (
              <i className="fa-solid fa-arrow-down-wide-short"></i>
            )}
          </button>
        </div>
      </article>
      <article className="w-11/12 mx-auto mb-4 rounded h-full md:h-5/6 md:rounded-lg bg-gray-100 dark:bg-gray-800 drop-shadow-md dark:drop-shadow-lg dark:shadow-black z-0 overflow-y-auto">
        {reload || isLoading ? (
          <div className="w-full h-full flex flex-col justify-center items-center text-neutral-400 dark:text-gray-600 animate-pulse">
            <i className="fa-solid fa-bars-progress text-8xl"></i>
            <h2 className="font-default text-2xl ">Loading Data ...</h2>
          </div>
        ) : (
          <>
            <article className="mx-auto">
              <TaskListRender />
            </article>
            {/* <UsersCardsRender
              users={users}
              getAllUsers={getAllUsers}
              setUpdate={setUpdate}
              setIsShowForm={setIsShowForm}
              setShowDelete={setShowDelete}
              isDelete={isDelete}
              setIsDelete={setIsDelete}
            /> */}
          </>
        )}
      </article>
    </section>
  );
};

export default TasksCard;