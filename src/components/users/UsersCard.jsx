import { useState } from "react";
import UserListRender from "../../utilities/users/UserListRender";

const UsersCard = ({ getAllUsers, users }) => {
  const [isSort, setIsSort] = useState(false);
  const [reload, setReload] = useState(false);

  const setSort = () => {
    setIsSort(!isSort);
  };

  return (
    <section className="w-11/12 h-4/6 mb-10 mx-auto flex flex-col justify-center gap-6">
      <article className="w-full flex justify-between items-center">
        <div className="flex items-center">
          <h2 className="font-default text-2xl font-normal">Users</h2>
          <i className="fa-solid fa-users pl-2 text-md"></i>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button
            className="bg-gray-100 rounded-lg px-3 py-1 text-md shadow-md shadow-gray-300 transition ease-in-out duration-150 hover:shadow-xl active:ring-2 active:ring-itemsNavH"
            onClick={() => setReload(true)}
            onAnimationEnd={() => setReload(false)}
          >
            <i
              className={`${reload && "animate-reload"} fa-solid fa-rotate`}
            ></i>
          </button>
          <button
            onClick={setSort}
            className="mr-12 bg-gray-100 rounded-lg px-3 py-1 text-md shadow-md shadow-gray-300 transition ease-in-out duration-150 hover:shadow-xl active:ring-2 active:ring-itemsNavH"
          >
            {isSort ? (
              <i className="fa-solid fa-arrow-up-short-wide"></i>
            ) : (
              <i className="fa-solid fa-arrow-down-wide-short"></i>
            )}
          </button>
        </div>
      </article>
      <article className="w-full h-5/6 bg-gray-100 drop-shadow-md rounded-md overflow-y-auto">
        <table className="table-fixed w-full text-center">
          <thead>
            {/* Refactorizar los headers con un componente map */}
            <tr>
              <th className="text-sm font-medium text-slate-400 py-3">Name</th>
              <th className="text-sm font-medium text-slate-400 py-3">Email</th>
              <th className="text-sm font-medium text-slate-400 py-3">
                Firstname
              </th>
              <th className="text-sm font-medium text-slate-400 py-3">
                Lastname
              </th>
              <th className="text-sm font-medium text-slate-400 py-3">
                Birthday
              </th>
              <th className="text-sm font-medium text-slate-400 py-3">
                Edit / Delete
              </th>
            </tr>
          </thead>
          <tbody>
            <UserListRender getAllUsers={getAllUsers} users={users} />
          </tbody>
        </table>
      </article>
    </section>
  );
};

export default UsersCard;
