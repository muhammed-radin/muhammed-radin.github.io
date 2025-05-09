import { animate } from "animejs";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./langCard.css";

export default function LangCard({
  lang,
  image,
  progress,
  color,
  shadow
}) {
  const vec = { progressValue: 0 };
  const [progressValue, setProgressValue] = useState(0);
  const { ref, inView } = useInView();
  const progressBar = useRef(null);

  useEffect(() => {

    if (inView) {
      animate(vec, {
        progressValue: progress,
        duration: 1200,
        onRender: () => {
          setProgressValue(vec.progressValue);
        },
      });
    }
  }, [inView]);

  useEffect(() => {

    document.querySelectorAll(".langCard_" + lang).forEach((el) => {


      el.style.setProperty("--card-theme-color", `${color}`);
      el.style.setProperty("--card-shadow-color", `${shadow}`);

      el.addEventListener("mousemove", (e) => {
        el.style.setProperty("--skewX-card", `${e.x / 50}`);
        el.style.setProperty("--skewY-card", `${e.y / 50}`);
      });

      el.addEventListener("mouseleave", (e) => {
        el.style.setProperty("--skewX-card", `${0}`);
        el.style.setProperty("--skewY-card", `${0}`);
      });
    });
  }, []);

  return (
    <div
      className={
        "langCard langCard_" +
        lang +
        " bg-[#080808] hover:scale-[1.1] transition-all hover:bg-[#1b1b1b] cursor-pointer rounded-lg w-max"
      }
      ref={ref}
    >
      <div className="flex flex-row p-2 px-3">
        <div className="card-icon">
          <img src={image} alt={lang} className="w-10 max-w-10 max-h-10 m-1" />
        </div>
        <div className="m-1 mx-2">
          <h3 className="font-bold">{lang}</h3>
          <progress
            value={progressValue}
            max="100"
            className="appearance-none h-1 custom-progress-bar"
            ref={progressBar}
          ></progress>
        </div>
      </div>
    </div>
  );
}
