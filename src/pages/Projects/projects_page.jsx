import createScrollSnap from "scroll-snap";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import ProjectCard from "../../components/projectCard/projectCard";
import projectsData from "./projects";
import { animate } from "animejs";

function ProjectsPage() {
  const statusView = useInView();
  const scrollEl = useRef(null);

  useEffect(function () {
    createScrollSnap(scrollEl.current, {
      showArrows: true,
      snapDestinationX: "300px",
    });
  }, []);

  const el = useRef(null);

  useEffect(() => {
    const animation = animate(el.current, {
      autoplay: false,
      opacity: [0, 1],
      duration: 1000,
      easing: "easeInOutSine",
    });

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          animation.seek(entry.intersectionRatio.toFixed(2) * 1000);
        });
      },
      {
        root: document.querySelector(".scroll-container"),
        threshold: Array.from({ length: 1000 }, (_, i) => i / 1000),
      }
    );

    observer.observe(el.current);
  }, []);



  return (
    <div
      id="projects"
      className=" w-full p-8 px-[10%] max-sm:p-[10px] max-sm:px-[15px] transition-all duration-[200ms] my-[80px]"
      ref={el}
      // style={
      //   statusView.inView
      //     ? { background: "#010c0d" }
      //     : { background: "inherit" }
      // }
    >
      <div className="text-right mb-3">
        <h1 className="text-[clamp(_20px,_9vw,_40px)] font-bold">
          My Projects
        </h1>
        <h4
          className="text-[clamp(_16px,_4vw,_28px)] text-gray-400"
          ref={statusView.ref}
        >
          Recent works of me.
        </h4>
      </div>

      <div className="min-h-[80vh] justify-center items-center flex flex-col w-full relative">
        <div
          className="flex gap-3 flex-row m-3 p-4 max-sm:m-1 max-sm:p-1 overflow-scroll scroll-hidden scroll-smooth w-[inherit]" 
          ref={scrollEl}
        >
          {projectsData.map(function (v, i) {
            return (
              <ProjectCard
                key={i}
                name={v.name}
                des={v.des}
                link={v.link}
                img={v.img}
              ></ProjectCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
