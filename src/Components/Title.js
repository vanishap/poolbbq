import React from 'react';
import Bbq from '../assets/Bbq.jpg';


const Title = () => {
  return (
    <div className='title'>
      <img className = 'image' src={Bbq} alt='bbq'/>
      <h3 >Villages @ Cupertino BBQ Booking </h3>
    </div>
  )
}

export default Title
