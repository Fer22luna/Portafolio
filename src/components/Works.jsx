import { projects } from "../Api/projects"
import { BsCodeSquare } from "react-icons/bs";


export const Works = () => {



  return (
    <section className="projects">
      <div className="container mt-5 text-center ">
        <div className="">
          <BsCodeSquare size={40} className="m-3" />
          <h1 className=" mb-4 ">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Aqui les dejo algunas Aplicaciones y trabajos que he realizado.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => {
            return <div className="d-flex flex-lg-wrap justify-content-between align-items-center mt-5 mx-5 contenedor_map ">
            <a href="https://blagdaross-libros.000webhostapp.com/index.html">  <img className="img" src={project.image} /></a>
              <div className=" box text-end d-flex flex-column  align-items-end">
                <h1 className="fs-6 mt-4">Project. # {project.id}</h1>
                <h2 className=" mb-3 fs-4">
                  {project.title}
                </h2>
                <div className="paragraph_box">
                  <p className="m-3 fs-6">{project.description}</p>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>

  )
}
