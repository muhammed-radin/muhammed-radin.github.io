// import { Link } from "react-router-dom";
import "./Nav.css";
import { useContext, useEffect, useState } from "react";
import { SectionContext, sections } from "../../App";


function Nav(props) {
  const currentSection = useContext(SectionContext);
  const [isSmallDevice, setSMLDevice] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  function updateRes(){
    if (window.innerWidth <= 800){
      setSMLDevice(true)
    } else {
      setSMLDevice(false)
    }
  }

  useEffect(function (){
    updateRes()
    window.onresize = function (){
      updateRes()
    }
  }, [])

  function triggerMenu(){
    setOpenMenu(!openMenu);
  }
  

  return (
    // portfolio nav
    <nav className="flex justify-between items-center flex-row p-4 px-6 bg-[#222] rounded-full m-4 mx-auto w-[85%] max-[840px]:w-[96%] min-xl:w-[80%] shadow-black shadow-2xl relative">
      <div className="flex flex-col overflow-hidden h-[34px]">
        <h2 className="text-2xl font-bold text-white max-sm:text-lg max-md:text-lg first-title">
          Muhammmed{" "}
          <span className="text-cyan-500 text-shadow-[0px_0px_3px] text-shadow-blue-400">
            Radin.
          </span>
        </h2>
        <h2 className="text-2xl font-bold text-white max-sm:text-lg max-md:text-lg second-title">
          <span className="text-cyan-500">&lt;</span>
          Port
          <span className="text-cyan-100">Folio</span>
          <span className="text-cyan-500">/&gt;</span>
        </h2>
      </div>
      <ul className={"flex gap-1 text-center "+ (isSmallDevice && openMenu ? "options-box" : "")}>
        <li className="max-[720px]:visible min-[720px]:hidden">
          <button
          onClick={triggerMenu} 
          className="p-2 px-3 hover:bg-linear-180 bg-[#2f333a] from-cyan-800 to-cyan-600 shadow-cyan-900 hover:shadow-md rounded-full">
            {(isSmallDevice && openMenu ?"Close"  : "Menu")}
          </button>
        </li>

        {Object.keys(sections).map((sectionKey) => (
          <li
            className="max-[720px]:hidden hover:scale-95 transition-transform"
            key={sectionKey}
          >
            <a
              href={`#${sectionKey}`}
              className={
                "p-2 px-3 hover:bg-linear-180 from-cyan-800 to-cyan-600 shadow-cyan-900 hover:shadow-md rounded-full " +
                (currentSection == sectionKey
                  ? "text-green-600 font-bold hover:text-green-400 hover:from-transparent hover:to-transparent hover:shadow-transparent"
                  : "text-white")
              }
              onClick={()=>{props.toChange(sectionKey); setOpenMenu(false)}}
            >
              {sections[sectionKey]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
