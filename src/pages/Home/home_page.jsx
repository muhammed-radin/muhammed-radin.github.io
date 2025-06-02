import { Typewriter } from "react-simple-typewriter";
import ProfileImage from "../../assets/avatar.png";
import { ChevronDownOutline } from "react-ionicons";

function HomePage() {
  const text =
    "I have a passion for building intuitive, user-friendly interfaces that provide an enjoyable and seamless user experience.";

  return (
    <div
      id="home"
      className=" flex flex-row justify-center items-center max-sm:items-start max-sm:flex-col-reverse max-sm:justify-end "
    >
      <div className="w-1/2 max-md:w-[90%] text-wrap m-5">
        <h3 className="font-bold text-3xl max-md:text-2xl text-[min(1.6rem,8vw)]">
          Hi, Iam
        </h3>
        <h2 className="text-5xl max-md:text-3xl text-[min(1.8rem,10vw)]">
          Muhammed Radin.
        </h2>
        <p className="text-green-600">
          <Typewriter
            words={[
              "Frontend Developer.",
              "Fullstack Developer",
              "Game Developer",
              "MERN Stack Developer"
            ]}
            loop={false}
            cursor={true}
            cursorColor="var(--color-cyan-500)"
            cursorStyle={<b>_</b>}
          />
        </p>
        <br />
        <p className="animate-fadewriter text-[min(1.21rem,5vw)] whitespace-break-spaces">
          {text.split(" ").map((val, index) => {
            return (
              <span
                style={{
                  opacity: 0,
                  display: "inline-block",
                  animation: "fadeInUp 0.3s ease-in-out 1",
                  animationDelay: 120 * index + "ms",
                  animationPlayState: "var(--load-anim-state)",
                }}
                onAnimationEnd={(e) => {
                  e.target.style.opacity = 1;
                }}
                key={index}
              >
                {val + " "}
              </span>
            );
          })}
        </p>
        <br />
        <button className="flex flex-row items-center justify-center text-center gap-2 border-2 p-2 px-4 rounded-full text-green-600 text-[min(1.21rem,5vw] hover:bg-[#00c95129]">
          Scroll Down{" "}
          <ChevronDownOutline
            width="20px"
            height="20px"
            style={{
              animation: "fadeInDown 1s ease-in-out infinite",
            }}
          ></ChevronDownOutline>
        </button>
      </div>
      <div className="flex flex-row justify-center min-sm:w-max">
        <img
          src={ProfileImage}
          className="w-[18rem] max-sm:w-[85%] max-md:w-[50%] m-5 max-md:m-5 rounded-3xl min-md:rounded-[50%] min-md:mb-[250px] shadow-[0px_0px_70px_1px_#102d38] border-4 border-cyan-950 bg-[#053142]"
        />
      </div>
    </div>
  );
}

export default HomePage;
