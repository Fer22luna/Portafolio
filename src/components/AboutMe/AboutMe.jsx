import { BsPerson } from "react-icons/bs";
import './AboutMe.css'

export const AboutMe = () => {

    return (
        <section id="aboutMe" className="about_me">
            <div className="about_me_title pt-5">
                <BsPerson size={40} className=" mt-5" />
                <h1 className="text-center mt-3 ">About Me.</h1>
            </div>
            <div className="about_me_content ">
                <div className="about_me_text">Hola !! Mi nombre es <span>Fernando Gabriel Luna</span> Estudiante de Licenciatura en Física en la FAMAF. Tuve que frenar mis estudios por necesidades laborales.
                    En la carrera tuve contacto con la programación viendo algo básico de Fortran , Python y Julia, mas orientado al calculo numérico y estadistico. Luego realizando algunos cursos y de manera autodidacta me forme en desarrollo web Front-End con React JS. Actualmente me continuo formando en back-end con Node Js Y MongoDb . Aspiro a mi primer trabajo en el sector IT, busco adquirir mas skills y capacitarme para desarrollarme mejor en el mundo IT.
                </div>
                <div className="about_me_img" ></div>
            </div>


        </section>
    )
}