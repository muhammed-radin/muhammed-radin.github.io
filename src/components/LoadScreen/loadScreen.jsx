import { useEffect, useRef, useState } from "react";
// import "./loadScreen.css";
import { animate } from "animejs";

function LoadScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const loaded = useRef(false);

  const startApp = () => {
    setIsLoading(false);
    document.body.style.setProperty("--load-anim-state", "running");
  };

  useEffect(() => {
    animate([".loadtext", ".loadtitle"], {
      opacity: [0, 1],
      translateY: [100, 0],
      delay: (_, i) => i * 200
    });

    const onLoad = () => {
      if (!loaded.current) {
        startApp();
        loaded.current = true;
      }
    };

    document.addEventListener("DOMContentLoaded", onLoad);
    window.addEventListener("load", onLoad);
    return () => {
      document.removeEventListener("DOMContentLoaded", onLoad);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return isLoading ? (
    <div className="loadscreen bg-zinc-900 fixed top-0 left-0 w-screen h-screen text-[clamp(32px,10vw,72px)] text-gray-800 text-start flex justify-center items-center flex-col">
      <div className="loadbg">
        <b className="text-gray-500 text-6xl loadtext">LOADING</b>
        <br />
        <h2 className="text-gray-300 loadtitle" id="lastElem_load">
          Please Wait...
        </h2>
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default LoadScreen;
