import "./projectCard.css";

export default function ProjectCard({ name, des, link, img }) {
  return (
    <div className="projectCard flex flex-col relative m-1 w-[300px] max-sm:w-full p-5 pb-3 rounded-2xl text-center justify-center items-start">
      <h4 className="font-bold text-2xl m-1 my-1.5">{name}</h4>
      <div>
        <img
          src={img}
          alt=""
          className="w-full h-full rounded-lg m-1 shadow-2xl"
        />
      </div>
      <div className="flex flex-col text-left items-start justify-center m-1 my-5">
        <p className="text-[clamp(14px,_1.2vw,_24px)]">
          {des}
        </p>

        <button className="p-2 px-5 mt-5 bg-[#000000] text-white rounded-lg" onClick={() => window.open(link, "_blank")}>Open Project</button> 
      </div>
    </div>
  );
}
