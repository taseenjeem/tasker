import HeroSection from "../components/page/landing-page/hero-section/HeroSection";
import TaskBoard from "../components/page/landing-page/task-board/TaskBoard";

const LandingPage = () => {
  return (
    <main className="container mx-auto px-4 md:px-10 lg:px-20">
      <HeroSection />
      <TaskBoard />
    </main>
  );
};

export default LandingPage;
