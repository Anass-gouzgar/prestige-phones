import React from 'react'

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-10 mb-10">
      <blockquote className='text-3xl text-center max-w-[600px] font-bold'>
        « Depuis 3 ans le niveau de qualité et de services est identique, bravo
        super entreprise en croissance constante et avec une amabilité au top »
      </blockquote>
      <h1 className="font-bold text-MainOrange text-xl text-center">
        William Cassin, directeur de Dynastore
      </h1>
    </div>
  );
}

export default Testimonial