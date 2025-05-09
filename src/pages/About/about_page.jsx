import HomePage from "../Home/home_page";
import "./about.css";
import ProfilePhoto from "../../assets/radin_pic.jpg";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import { animate, utils } from "animejs";

function AboutMePage() {
  const { ref, inView, entry } = useInView();
  const statusView = useInView();
  const counterVec = { yrs: 0, projects: 0, langs: 0 };
  const [yearExp, setYearExp] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [langs, setLangs] = useState(0);
  const titleAnimation = useRef(null);

  useEffect(() => {
    if (inView) {
      titleAnimation.current = animate(
        [".loadtitletext", ".introductiontext"],
        {
          opacity: [0, 1],
          scale: [0.8, 1],
          duration: 700,
          translateY: [50, 0],
          delay: (v, i) => i * 200,
          easing: "easeInOutQuad",
        }
      );

      animate(".about-avatar", {
        opacity: [0, 1],
        duration: 1000,
        translateX: [-50, 0],
        delay: (v, i) => i * 200,
        easing: "easeInOutQuad",
      });
    }
  }, [inView]);

  useEffect(() => {
    if (statusView.inView) {
      animate(".status-box", {
        opacity: [0, 1],
        duration: 1000,
        translateY: [50, 0],
        delay: (v, i) => i * 200,
        easing: "easeInOutQuad",
      });

      animate(counterVec, {
        yrs: [99, 5],
        projects: [99, 9],
        langs: [99, 6],
        modifier: utils.round(0).padStart(2, "0"),
        delay: (v, i) => i * 200,
        onUpdate: () => {
          setYearExp(counterVec.yrs);
          setProjectCount(counterVec.projects);
          setLangs(counterVec.langs);
        },
      });
    }
  }, [statusView.inView]);

  return (
    <div
      id="aboutMe"
      className="py-7 relative min-lg:p-5 transition-all duration-300 min-xl:h-screen"
      ref={ref}
      style={
        statusView.inView ? { background: "#000" } : { background: "inherit" }
      }
    >
      <div className="flex justify-evenly max-md:flex-col max-md:items-center max-md:justify-center">
        <div className="primary-div w-1/2 max-md:w-full">
          <div className="p-3  flex justify-center items-center">
            <img
              src={ProfilePhoto}
              alt=""
              className="p-4 w-[50%] max-sm:w-full min-[480px]:w-[70%] min-xl:w-1/2  rounded-4xl about-avatar"
            />
          </div>
        </div>
        <div className="secondary-div w-1/2 p-7 max-md:w-full max-md:p-5">
          <div className="text-wrap m-5">
            <h3 className="font-bold text-3xl text-[min(1.6rem,8vw)] whitespace-break-spaces">
              {"About Me".split(" ").map((char, index) => {
                return (
                  <span key={index} className="inline-block loadtitletext">
                    {char}{" "}
                  </span>
                );
              })}
            </h3>
            <p className="text-amber-500 mb-3 introductiontext">
              My Introduction
            </p>
            <p className="text-gray-400 introductiontext">
              {`As a seasoned developer with over 5 years of experience, I have
              honed my skills in a variety of programming languages including
              HTML, CSS, JavaScript, TypeScript, Arduino, and the basics of C++.
              My expertise spans multiple areas of development, including Web
              Development, IoT, and Game Development. I am proficient in popular
              frameworks such as React and Express, as well as 3D development
              using PlayCanvas. Throughout my career, I have consistently
              demonstrated my ability to bring innovative ideas to life through code.`
                .split(" ")
                .map((w, i) => {
                  return (
                    <span
                      key={i}
                      className={
                        "hover:text-amber-400" +
                        " cursor-pointer skeleton-slide-word transition-all"
                      }
                      style={{
                        opacity: 0,
                        animation: "fadeIn 5s 1",
                        animationDelay: `${i * 0.01}s`,
                        animationPlayState: inView ? "running" : "paused",
                      }}
                      onAnimationEnd={(e) => {
                        e.target.style.opacity = 1;
                      }}
                    >
                      {w + " "}
                    </span>
                  );
                })}
            </p>
          </div>
          <div
            className="flex flex-row justify-evenly items-center my-10"
            ref={statusView.ref}
          >
            <div className="flex flex-col text-wrap text-center status-box">
              <h3 className="text-2xl text-amber-300 font-bold">{yearExp}+</h3>
              <p className="text-sm">
                Years of
                <br /> Experience
              </p>
            </div>
            <div className="flex flex-col text-wrap text-center status-box">
              <h3 className="text-2xl text-amber-300 font-bold">
                {projectCount}+
              </h3>
              <p className="text-sm">
                Projects <br /> Completed
              </p>
            </div>
            <div className="flex flex-col text-wrap text-center status-box">
              <h3 className="text-2xl text-amber-300 font-bold">{langs}+</h3>
              <p className="text-sm text-gray-300">
                Languages
                <br /> Knowns
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;
