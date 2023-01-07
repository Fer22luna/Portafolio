import { projects } from "../../Api/projects"
import { BsCodeSquare } from "react-icons/bs";
import "./Works.css"

export const Works = () => {



  return (
    <section className="projects">
      <div className="container mt-5 text-center ">
        <div className="mt-5 projects_title">
          <BsCodeSquare size={40} className="mt-5 mb-3" />
          <h1 className=" mb-4 ">
            Apps I've Built
          </h1>
          <p className="">
            Aqui les dejo algunas Aplicaciones y trabajos que he realizado.
          </p>
        </div>
        <div className=" mt-5">
          {projects.map((project) => {
            return <div className="contenedor_map ">
            <a href={project.link}>  <img className="img" src={project.image} /></a>
              <div className=" box ">
                <h1 className="fs-6 mt-4">Project. # {project.id}</h1>
                <h2 className=" mb-3 fs-5">
                  {project.title}
                </h2>
                <div className="paragraph_box bg-dark">
                  <p className="m-3 fs-6 bg-dark">{project.description}</p>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>

  )
}
