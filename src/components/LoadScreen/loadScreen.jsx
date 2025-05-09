import { useEffect, useState } from "react";
import "./loadScreen.css";

function LoadScreen() {
  const [isLoading, setIsLoading] = useState(false); // set true after test

  // remove after test:-
  document.body.style.setProperty("--load-anim-state", "running");
  /////////////////


  const handleLoading = () => {
    setIsLoading(false);
    document.body.style.setProperty("--load-anim-state", "running");
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return isLoading ? (
    <div className="bg-white fixed top-0 left-0 w-screen h-screen text-7xl text-gray-800 text-start flex justify-center items-center flex-col">
      <div>
        <b className="text-gray-600 text-6xl loadtext">HI, iam</b>
        <br />
        <h2 className="text-gray-900 loadtitle" id="lastElem_load">
          Muhammed Radin
        </h2>
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default LoadScreen;
