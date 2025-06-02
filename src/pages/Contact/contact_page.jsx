import { animate } from "animejs";
import { useEffect, useRef } from "react";
import { LogoGithub, LogoWhatsapp, Mail } from "react-ionicons";

function ContactMePage() {
  const el = useRef(null);

  useEffect(() => {
    const animation = animate(el.current, {
      translateX: [100, 0],
      scale: [0, 1],
      autoplay: false,
      opacity: [0, 1],
      duration: 1000,
      easing: "easeInOutSine",
    });

    const animation2 = animate(".footer-icon", {
      translateY: (_) => {
        return [_.className.replace(/\d?\D/gm, "") + "px", 0];
      },
      scale: [0, 1],
      autoplay: false,
      opacity: [0, 1],
      duration: 500,
    });

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          animation.seek(entry.intersectionRatio.toFixed(2) * 1000);
          animation2.seek(
            Math.max(entry.intersectionRatio.toFixed(2) - 0.25, 0) * 1000
          );
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
    <div id="contactMe" className="h-screen w-full bg-grey-900" ref={el}>
      <div className="w-full h-full flex flex-col justify-center items-center text-center">
        <div>
          <h2 className="text-2xl">Contact Me</h2>
          <p className="font-bold text-lg text-green-600 font-['Share_Tech',_'Outfit'!important]">
            Any plans? or do you want to collaborate?
          </p>
        </div>
        <div className="flex flex-row gap-4 m-2">
          <LogoGithub
            width="30px"
            height="30px"
            style={{
              fill: "#00ff1a",
            }}
            className={"footer-icon footerIcon_" + 300}
          ></LogoGithub>
          <LogoWhatsapp
            width="30px"
            height="30px"
            style={{
              fill: "#00ff1a",
            }}
            className={"footer-icon footerIcon_" + 200}
          ></LogoWhatsapp>
          <Mail
            width="30px"
            height="30px"
            style={{
              fill: "#00ff1a",
            }}
            className={"footer-icon footerIcon_" + 100}
          ></Mail>
        </div>
      </div>
    </div>
  );
}

export default ContactMePage;
