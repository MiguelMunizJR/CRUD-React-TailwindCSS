import ButtonNavBar from "../../utilities/navbar/ButtonNavBar";
import ListNav from "../../utilities/navbar/ListNav";

const NavBar = ({
  setIsShowUsersForm,
  setIsShowTasksForm,
  setUpdate,
  activePage
}) => {
  return (
    <nav className="hidden md:flex md:w-52 h-screen pt-5 flex-col items-center justify-between bg-gray-100 dark:bg-navBarDark dark:drop-shadow-2xl drop-shadow-2xl shadow-black">
      <section className="w-full flex flex-col justify-between">
        <h1 className="w-full pb-5 flex justify-center text-gray-900 text-xl font-default font-medium">
          SM Manager
        </h1>
        <ListNav />
      </section>
      <ButtonNavBar
        setIsShowUsersForm={setIsShowUsersForm}
        setIsShowTasksForm={setIsShowTasksForm}
        setUpdate={setUpdate}
        activePage={activePage}
      />
    </nav>
  );
};

export default NavBar;
