import React from "react";
import { habilidades } from "../../Api/habilidades";
import { BsKeyboard } from "react-icons/bs";
import { BsCpu } from "react-icons/bs";
import "./Skills.css"





export const Skills = () => {

    return (
        <section id="skills" className="skills">
            <div className="d-flex flex-column justify-content-center align-items-center mt-5 pt-5">
            <BsCpu size={40}  className="mb-3"/>
            <h1 className=" text-center">Skills & Technologies</h1>
            </div>
            <div className=" d-flex flex-wrap justify-content-center mt-5  map_container  ">
                {habilidades.map((skill) => (
                    <div key={skill} className=" ms-3 mt-3">
                        <div className="bg-dark col d-flex justify-content-start align-items-center container_skills ">
                            <BsKeyboard className="mx-2 ms-3 skills_icon bg-dark" /> 
                            {skill}
                        </div>
                    </div>
                ))}
            </div>
        </section>
                



    )
}