import createScrollSnap from "scroll-snap";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import ProjectCard from "../../components/projectCard/projectCard";

import SampleAppScreenShot from "../../assets/app_scr.JPG";


const projectsData = [
  { name: "Extendable Editor", des: "Web codespace with awsome features. that support extensions", link: false, img: SampleAppScreenShot },
]

function ProjectsPage() {
  const statusView = useInView();
  const scrollEl = useRef(null);

  useEffect(function () {
    createScrollSnap(scrollEl.current, {
      showArrows: true,
      snapDestinationX: "105px",
    });
  }, []);

  return (
    <div
      id="projects"
      className="h-screen w-full p-8 px-[10%] transition-all duration-[200ms] my-[80px]"
      // style={
      //   statusView.inView
      //     ? { background: "#010c0d" }
      //     : { background: "inherit" }
      // }
    >
      <div className="text-right m-3">
        <h1 className="text-[clamp(_20px,_9vw,_40px)] font-bold">
          My Projects
        </h1>
        <h4 className="text-[clamp(_16px,_4vw,_28px)] text-gray-400" ref={statusView.ref}>
          Recent works of me.
        </h4>
      </div>

      <div className="flex gap-3 flex-row m-3 p-4 max-sm:m-1 max-sm:p-1 overflow-scroll scroll-hidden scroll-smooth" ref={scrollEl}>
        {(projectsData.map(
          function (v, i) {
            return (
              <ProjectCard key={i} name={v.name} des={v.des} link={v.link} img={v.img}></ProjectCard>
            );
          }
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
