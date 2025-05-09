// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import "animate.css";
import LoadScreen from "./components/LoadScreen/loadScreen";
import { createContext, useCallback, useState, useEffect, useRef } from "react";
// import Section from "./components/Section/section";
import HomePage from "./pages/Home/home_page";
import AboutMePage from "./pages/About/about_page";
import { InView } from "react-intersection-observer";
import SkillsPage from "./pages/Skills/skills_page";
import ProjectsPage from "./pages/Projects/projects_page";
import ContactMePage from "./pages/Contact/contact_page";

const sections = {
  home: "Home",
  aboutMe: "About Me",
  skills: "Skills",
  projects: "Projects",
  contactMe: "Contact Me",
};

const sectionKeys = Object.keys(sections);

const SectionContext = createContext(sectionKeys[0]);

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const changeSection = useCallback(
    function (sectionIndex) {
      setCurrentPage(sectionIndex);
    },
    [currentPage]
  );
  let scrollContainer = useRef(null);

  // useEffect(() => {
  //   let { bind, unbind } = createScrollSnap(scrollContainer.current, {
  //     snapDestinationY: "100vh",
  //     showArrows: true,
  //     treshold: 0.001,
  //     timeout: 300,
  //   });

  //   bind();
  //   return () => unbind();
  // }, []);

  const containerRef = useRef(null);
  const pages = [
    <HomePage />,
    <AboutMePage />,
    <SkillsPage />,
    <ProjectsPage />,
    <ContactMePage />,
  ];

  

  return (
    <SectionContext.Provider value={currentPage}>
      <Nav toChange={changeSection} />

      <main>
        <div className="app-container" ref={containerRef}>
          <div className="scroll-container" ref={scrollContainer}>
            {pages.map((page, index) => (
              <section
                key={index}
                className={`page ${sectionKeys[index]} ${
                  index === currentPage ? "active" : ""
                }`}
              >
                <InView
                  as="div"
                  onChange={(inView, entry) => {
                    const childElem = entry.target.children[0];
                    childElem.intersection = inView;

                    setTimeout(function () {
                      for (let i = 0; i < sectionKeys.length; i++) {
                        let elId = sectionKeys[i];
                        let elem = document.getElementById(elId);

                        if (elem) {
                          if (elem.intersection === true) {
                            setCurrentPage(elId);
                            break;
                          }
                        }
                      }
                    }, 500);
                  }}
                >
                  {page}
                </InView>
              </section>
            ))}
          </div>
        </div>
      </main>
      <LoadScreen />
    </SectionContext.Provider>
  );
}

export default App;
export { sections, SectionContext };
