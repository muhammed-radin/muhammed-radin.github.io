import { useEffect, useRef, useState } from "react";
import LangCard from "../../components/langCard/langCard";
import "./skills.css";
import { animate } from "animejs";
// import { useInView } from "react-intersection-observer";

function SkillsPage() {
  const [isSmallDevice, setSMLDevice] = useState(false);
  const animationManager = useRef(null);
  const el = useRef(null);

  useEffect(() => {
    if (!isSmallDevice) {
      animationManager.current = animate(
        ["#skills .title", "#skills .subtitle", ".langCard"],
        {
          duration: 600,
          translateY: ["50px", "0px"],
          delay: (v, i) => i * 100,
          opacity: [0, 1],
          autoplay: false,
        }
      );
    } else {
      animationManager.current = animate(
        ["#skills .title", "#skills .subtitle", ".langCard"],
        {
          duration: 600,
          autoplay: false,
          translateX: (v, i) => {
            if (i % 2 == 0) {
              return ["100px", "0px"];
            } else {
              return ["-100px", "0px"];
            }
          },
          delay: (v, i) => i * 100,
          opacity: [0, 1],
        }
      );
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          console.log(!isSmallDevice);

          if (!isSmallDevice) {
            // animationManager.current.seek(
            //   entry.intersectionRatio.toFixed(2) * 2400
            // );
            if (entry.isIntersecting) animationManager.current.play();
          } else {
            if (entry.isIntersecting) animationManager.current.play();
          }
        });
      },
      {
        root: document.querySelector(".scroll-container"),
        threshold: Array.from({ length: 1000 }, (_, i) => i / 1000),
      }
    );

    observer.observe(el.current);

    updateRes();
    window.onresize = function () {
      updateRes();
    };
  }, []);

  function updateRes() {
    if (window.innerWidth <= 800) {
      setSMLDevice(true);
    } else {
      setSMLDevice(false);
    }
  }

  return (
    <div
      id="skills"
      className=" w-full p-2 flex justify-center items-center flex-col text-start my-10"
      ref={el}
    >
      <div className="m-4 my-7 p-3 w-1/2 max-sm:w-[90%] flex flex-col align-middle justify-center items-start">
        <h1 className="text-[clamp(_20px,_10vw,_40px)] font-bold text-amber-400 title">
          Skills
        </h1>
        <h3 className="text-[clamp(_16px,_10vw,_32px)] mx-3 subtitle">
          What I Know?
        </h3>
      </div>
      <div className="flex justify-center items-center flex-col w-full text-start">
        <div className="flex gap-5 justify-evenly items-center flex-wrap w-2/3 h-full">
          <LangCard
            lang="HTML"
            image="https://img.icons8.com/color/58/html-5--v1.png"
            progress={97}
            color="#ff4800"
            shadow="#ffa50059"
          />
          <LangCard
            lang="JavaScript"
            image="https://img.icons8.com/color/58/javascript--v1.png"
            progress={93}
            color="yellow"
            shadow="#ffbd0057"
          />
          <LangCard
            lang="CSS"
            image="https://img.icons8.com/color/58/css3--v1.png"
            progress={95}
            color="#38afff"
            shadow="#38afff60"
          />
          <LangCard
            lang="Typescript"
            image="https://img.icons8.com/color/58/typescript--v1.png"
            progress={88}
            color="#673ab7"
            shadow="#673ab750"
          />
          <LangCard
            lang="ReactJS"
            image="https://img.icons8.com/external-tal-revivo-color-tal-revivo/58/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
            progress={86}
            color="#00ffb0"
            shadow="#00ffb050"
          />
          <LangCard
            lang="TailwindCSS"
            image="https://img.icons8.com/color/58/tailwind_css.png"
            progress={86}
            color="#00574f"
            shadow="#00574f"
          />
          <LangCard
            lang="Firebase"
            image="https://img.icons8.com/color/58/firebase.png"
            progress={86}
            color="#ff6f00"
            shadow="#ff6f0050"
          />
          <LangCard
            lang="Express"
            image="https://img.icons8.com/officel/58/express-js.png"
            progress={30}
            color="#afc0d3"
            shadow="#afc0d350"
          />
          <LangCard
            lang="Arduino"
            image="https://img.icons8.com/color/58/arduino--v1.png"
            progress={60}
            color="#8bc34a"
            shadow="#8bc34a50"
          />
          <LangCard
            lang="NodeJS"
            image="https://img.icons8.com/fluency/48/node-js.png"
            progress={60}
            color="#21a366"
            shadow="#21a36650"
          />
          <LangCard
            lang="Sass"
            image="https://img.icons8.com/color/58/sass--v1.png"
            progress={60}
            color="#ed6191"
            shadow="#ed619150"
          />
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
