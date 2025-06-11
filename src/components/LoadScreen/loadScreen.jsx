import { useEffect, useRef, useState } from "react";
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
      delay: (_, i) => i * 200,
    });

    const onLoad = () => {
      if (!loaded.current) {
        startApp();
        loaded.current = true;
      }
    };

    if (document.readyState === "complete") {
      onLoad(); // already loaded
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return isLoading ? (
    <div className="loadscreen bg-black fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 rounded-full border-gray-500 border-t-transparent"></div>
    </div>
  ) : (
    <div>{/* Your main app goes here */}</div>
  );
}

export default LoadScreen;
