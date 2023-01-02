import { BsPerson } from "react-icons/bs";

export const AboutMe = () => {

    return (
        <section id="aboutMe" className="about_me">
            <div className="about_me_title ms-5 mt-5 d-flex flex-column justify-content-center align-items-center pt-5">
                <BsPerson size={40} className="mb-1" />
                <h1 className="text-center">About Me.</h1>
            </div>
            <div className="about_me_content d-flex flex-colum m- align-items-start justify-content-center">
                <div className="about_me_text">Hola !! Mi nombre es <span>Fernando Gabriel Luna</span> soy un estudiante de desarrollo web, con un perfil enfocado en el desarrollo front-end.Soy estudiante de la Lic. en Fisica en la FAMAF. Por motivos de necesidad laboral tuve que frenar mis estudios. Ahora aspiro
                a  tener una carrera en donde pueda trabajar mi creatividad creando cosas. Actualmente me estoy formando en Back-End y en desarrollo de aplicaciones con React Native. Cuando no estoy en la computadora, disfruto leer, entrenar y escalar.
                </div>
                <div className="about_me_img" ></div>
            </div>


        </section>
    )
}