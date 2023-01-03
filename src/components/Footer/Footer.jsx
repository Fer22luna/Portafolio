import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import "./Footer.css"

export const Footer = () => {

   return (
      <footer className=" footer ">
         <h3 className="footer__item fs-6"> Build by Fernando. G. Luna</h3>
         <h3 className="footer__item fs-6"> fer22luna@gmail.com</h3>
         <div className="footer__item fs-6">
            <a href="https://github.com/Fer22luna"><BsGithub size={40} color={"#00FFF6"} /> </a>
            <a href="https://www.linkedin.com/in/fernando-gabriel-luna-front-end-developer/"><BsLinkedin className=" ms-3" size={40} color={"#00FFF6"} /> </a>
         </div>
      </footer>

   )

}