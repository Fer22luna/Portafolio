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
                <div className="about_me_text">Hola !! Mi nombre es <span>Fernando Gabriel Luna</span> soy un estudiante de Licenciatura en Física en la FAMAF / UNC . En la carrera tuve contacto con la programación viendo desde Fortran , Python y Julia, mas orientado al calculo numérico y estadístico . Luego realizando algunos cursos y de manera autodidacta me forme en desarrollo web Front-End con React. También realice proyectos usando NODE JS manejando bases de datos MongoDb y MySql en entornos académicos como el XAcademy en Santex. 

Además me he formado como desarrollador en JAVA con SPRING gracias la beca Globant University de la mano de EGG. En el mismo he aprendido SPRING MVC & API REST , e implementaciones con SPRING Security.

Busco un entorno de trabajo en donde pueda aportar valor y adquirir mas skills y capacitarme para desarrollarme mejor en el mundo IT.
                </div>
                <div className="about_me_img" ></div>
            </div>


        </section>
    )
}