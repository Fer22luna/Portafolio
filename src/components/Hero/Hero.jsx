import Button from 'react-bootstrap/Button';
import './Hero.css'



export const Hero = () => {


  return (
    <section  id='hero'>
      <div className=" hero">
        <div className="">
          <h1 className="fs-6">
            Hello, my name is.
          </h1>
        </div>
        <div>
          <h2 className=''>Fernando Gabriel Luna. </h2>
        </div>
        <div className=''>
          <h3>I try to build things. </h3>
        </div>
        <div className=''>
          <p className=" fs-6 ">
           Soy un desarrollador web Front-end preparado para mi primera oportunidad ,<br /> Estudiante entusiaste y autodidacta.
          </p>
        </div>
        <div className="mt-5" >
          <a href='#contact'  className='fs-6'>Work with me</a>
        </div>
      </div>
    </section >


  )
}