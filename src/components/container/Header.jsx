import { Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import LoginButtons from "../../utilities/login/LoginButtons";
import UserMenu from "../../utilities/navbar/UserMenu";
import NavBar from "../navbar/NavBar";

const Header = ({ showSideBar, setShowSideBar, activePage, userSession }) => {
  
  const handleSidebar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <>
      {/* Sidebar Animation */}
      <Transition
        as="section"
        className={"fixed inset-0 z-30"}
        show={showSideBar}
        enter="transition-all duration-200"
        enterFrom=" -translate-x-44"
        enterTo="translate-x-44"
        leave="transition-all duration-400"
        leaveFrom="translate-x-44"
        leaveTo="-translate-x-44"
      >
        <NavBar activePage={activePage} />
        <Transition.Child
          as="section"
          className={"fixed inset-0 z-10"}
          enter="transition-opacity"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <section
            onClick={handleSidebar}
            className="w-screen h-screen opacity-10 absolute inset-0 bg-gray-400 z-10"
          ></section>
        </Transition.Child>
      </Transition>
      {/* Header */}
      <article className="w-full h-14 px-4 flex justify-between items-center bg-gray-50 z-40 fixed top-0 left-0">
        <section className="w-full flex gap-4 items-center text-gray-800">
          {userSession && (
            <button onClick={handleSidebar}>
              <i className="fa-solid fa-bars"></i>
            </button>
          )}
          <NavLink to="/">
            <h1 className="font-default text-xl font-semibold drop-shadow-xl">
              SM Manager
            </h1>
          </NavLink>
        </section>
        {userSession ? <UserMenu userSession={userSession} /> : <LoginButtons />}
      </article>
    </>
  );
};

export default Header;
