import Button from 'react-bootstrap/Button';
import "./Contact.css"

export const Contact = () => {

  return (

    <section id="contact" className="contact  ps-0 pb-5" >
  <div>
    <h1 className='fs-6'> Contact. </h1>
  </div>
  <div>
    <h2> Si me necesitas escribime!!</h2>
  </div>
  <div>
    <p className='fs-6'> En estos precisos momentos, mientras lees esto estoy buscando nuevas oportunidades. <br />
    Cualquier cosa si quieren contactamente o para hacerme algun comentario o saludar es mas que bienvenido.
    </p>
  </div >
  <Button variant='' className='mt-4'>Contact me</Button>
    </section>

  )
}