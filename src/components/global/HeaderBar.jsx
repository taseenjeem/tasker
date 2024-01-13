import { FaEvernote } from "react-icons/fa6";

const HeaderBar = () => {
  return (
    <nav className="py-4 shadow-xl w-full flex justify-center items-center">
      <h1 className="text-4xl font-bold lg:tracking-[2rem] md:tracking-[1rem] tracking-[0.5rem] text-center text-primary">
        TASKER
      </h1>
      <FaEvernote className="text-4xl font-bold text-primary" />
    </nav>
  );
};

export default HeaderBar;
