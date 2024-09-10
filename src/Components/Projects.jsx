import React from "react";
import "../Components/Global.css";
import project1 from "../Components/SocialLinks/e commerce ss.png"
import project2 from "../Components/SocialLinks/My-Portfolio.png"



const Projects = ({bgcolor,darkmode}) => {
  return (
    <>
      {/* <div className="p-3"> */}
        <div className={` ${darkmode==="dark" ? `bg-${bgcolor}` : `bg-white`} p-10 rounded-lg`}>
          <h1 className={`text-3xl font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>Projects</h1>

          <div className="flex gap-5 flex-wrap my-5">
          <a href="https://amazing-toffee-71729d.netlify.app">
            <div
              className="ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg"
              style={{background:`${bgcolor==="white" ? "#FFF4F4" :"black"}`,  border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}
            >
              <img
                src={project1}
                className="rounded-lg transition delay-150"
              />
              <div>

                <h1 className={`text-md font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>E-commerce Clothing Website (Reactjs,Tailwind,Firebase)</h1>
              </div>
            </div>
            </a>

            <a href="https://lighthearted-zuccutto-7672ad.netlify.app/" target="_blank">
            <div
              className="ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg"
              style={{background:`${bgcolor==="white" ? "#FFF4F4" :"black"}`,  border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}
            >
              <img
                src={project2}
                className="rounded-lg transition delay-150"
              />
              <div>

                <h1 className={`text-md font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>My Portfolio Website (Reactjs,Tailwind,Javascript)</h1>
              </div>
            </div>
            </a>
            
            <div
              className="ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg"
              style={{background:`${bgcolor==="white" ? "#FFF4F4" :"black"}`,  border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}
            >
              <img
                src="https://media.licdn.com/dms/image/D4D05AQHD3mSUi1vMEA/feedshare-thumbnail_720_1280/0/1687878350821?e=2147483647&v=beta&t=PQdgHocFCS_yoMH2sXlXUrsHWn-ZsX0KyCyh4b8khOc"
                className="rounded-lg transition delay-150"
              />
              <div>

                <h1 className={`text-md font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>Anaplan Utility (Reactjs,Nodejs,MySQL)</h1>
              </div>
            </div>

            <div
              className="ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg"
              style={{background:`${bgcolor==="white" ? "#FFF4F4" :"black"}`,  border:`${bgcolor==="white" ? "none" :"1px solid #A6A6A6"}`}}
            >
              <img
                src="https://cdn.plainconcepts.com/wp-content/uploads/2022/09/power-bi.jpg"
                className="rounded-lg transition delay-150"
              />
              <div>

                <h1 className={`text-md font-bold ${bgcolor==="white" ? "text-black" :"text-white"}`}>Power BI 2.0 (Data Reconciliation)</h1>
              </div>
            </div>
            
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Projects;
