import { NavLink } from "react-router-dom";

const TimelineNav = ({ activePage, actualPage, prevPag, actualIcon, prevIcon }) => {

  if (activePage === "/auth/login" || activePage === "/auth/register") {
    return (
      <article className="min-h-max mt-16 ml-4 flex items-center gap-3 text-gray-600">
        <div className="flex items-center gap-1 text-sm">
          <i className={actualIcon}></i>
          <p>{actualPage}</p>
        </div>
      </article>
    );
  } else {
    return (
      <article className="min-h-max mt-16 ml-4 flex items-center gap-3 text-gray-600">
        <NavLink to="/" className="flex items-center gap-1 text-sm">
          <i className={prevIcon}></i>
          <p>{prevPag}</p>
        </NavLink>
        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
        <div className="flex items-center gap-1 text-sm">
          <i className={actualIcon}></i>
          <p>{actualPage}</p>
        </div>
      </article>
    );
  }
};

export default TimelineNav;