import React from 'react'
import './Home.css'
import red from "../Images/red.png";
function Home() {
  return (
    <>
    <section>
      <p id='primaryText'>Discover the World with Our Flights</p>
      <p id='secondaryText'>Fly with comfort and convenience</p>
      <div className='buttonGroup'>
          <button className='firstButton'>Book Now</button>
          <button className='secondButton'>Explore</button>
      </div>
      </section>
      <img src={red} alt='red' className='flightAnimation' id='flightAni'/>
  </>
  )
}

export default Home