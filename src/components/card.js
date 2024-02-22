import React from 'react'
import './card.css'
const Card = ({type,activeCard,indi}) => {
  return (
    <article indi={indi} className={`${activeCard === indi ? 'cardPop' : 'card'} `} >
     <h1 className='w-full text-9xl'>{type}</h1>
   
    </article>
  );
}

export default Card