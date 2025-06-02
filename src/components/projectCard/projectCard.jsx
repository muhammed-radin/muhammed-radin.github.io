import "./projectCard.css";

export default function ProjectCard({ name, des, link, img }) {
  return (
    <div className="projectCard flex flex-col relative m-1 min-w-[300px] w-[300px] max-sm:min-w-full max-sm:max-w-full p-5 pb-3 rounded-2xl text-center justify-center items-start">
      <div>
        <img
          src={img}
          alt=""
          className="w-full h-full rounded-lg m-1 shadow-2xl"
        />
      </div>
      <div className="flex flex-col text-left items-start justify-center m-1 my-2">
        <h4 className="font-normal text-green-400 text-[22px] mt-2 font-['Share_Tech',_monospace_!important]">
          {name}
        </h4>

        <p className="text-[clamp(14px,_1.2vw,_24px)] h-[3em] w-full overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]" style={{
          lineHeight: 1.5
        }}>{des}</p>

        <button
          className={
            "p-2 px-5 mt-4 bg-[#222] text-white rounded-lg " +
            (Boolean(link) === false
              ? "shadow-[2px_2px_7px_inset_#000] cursor-not-allowed"
              : "shadow-[3px_3px_5px_0px_inset_#cccccc5c,_2px_2px_5px_#00000094] cursor-pointer")
          }
          onClick={() =>
            Boolean(link) === true ? window.open(link, "_blank") : null
          }
        >
          {Boolean(link) === false ? "Not Previewable" : "Open Project"}
        </button>
      </div>
    </div>
  );
}
