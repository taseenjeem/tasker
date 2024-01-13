import { FaArrowDown } from "react-icons/fa";
import heroImg from "../../../assets/hero.svg";

const HeroSection = () => {
  return (
    <section className="hero min-h-screen">
      <div className="flex justify-center items-center gap-4 max-w-[80rem] flex-col lg:flex-row-reverse">
        <img src={heroImg} className="lg:max-w-lg rounded-lg drop-shadow-2xl" />
        <div className="lg:w-1/2">
          <h1 className="lg:text-5xl text-4xl font-bold">What is TASKER?</h1>
          <p className="py-6">
            Tasker is a sleek task management web app that simplifies
            organization and boosts productivity. With an intuitive interface,
            it allows easy task prioritization, progress tracking, and seamless
            collaboration. Stay on top of your to-do list effortlessly with
            Tasker.
          </p>
          <button className="btn btn-primary font-semibold">
            Get Started <FaArrowDown />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
