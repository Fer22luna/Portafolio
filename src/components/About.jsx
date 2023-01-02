import Button from 'react-bootstrap/Button';




export const About = () => {

  return (
    <section className='about '>
      <div className="text-start hero">
        <div className="  items-center ">
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi,<br /> incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
        </div>
        <div className="">
          <Button variant=''>Work with me</Button>
        {/*  <Button variant=''>See my Past Work</Button> */}
        </div>
      </div>
    </section >


  )
}