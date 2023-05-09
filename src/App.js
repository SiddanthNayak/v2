import "./App.css";
import About from "./sections/about-me";
import { Hero } from "./sections/hero";
import { Jobs } from "./sections/jobs";
import { Project } from "./sections/projects";
import { PortfolioProvider } from "./context/context";
import { projectsData, experienceData } from "./mock/data";
import { useEffect, useState } from "react";
import { Contact } from "./sections/contact";
import { Layout } from "./components/layout";

function App() {
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const location = window.location;

  useEffect(() => {
    setProjects(projectsData);
    setExperience(experienceData);
    if (location.hash) {
      window.location.href = "";
    }
    // eslint-disable-next-line
  }, []);

  return (
    <PortfolioProvider value={{ projects, experience }}>
      <Layout location={location}>
        <Hero />
        <About />
        <Jobs />
        <Project />
        <Contact />
      </Layout>
    </PortfolioProvider>
  );
}

export default App;
