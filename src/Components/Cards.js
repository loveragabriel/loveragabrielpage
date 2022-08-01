import React from 'react'

export const Cards = () => {
    let name = 'Gabriel';
    let lastName = 'Lovera';
    let city = 'Buenos Aires';
    let email = 'loveragabriel20@gmail.com'
    let langages = 'Spanish/English'

  return (
    <div className='cards'>
        <span className='card-info'>
            <p className='titles'>First Name</p>
            <p>{name}</p>
        </span>
        <span className='card-info'>
            <p className='titles'>Last Name</p>
            <p>{lastName}</p>
        </span>
        <span className='card-info'>
            <p  className='titles'>Address</p>
            <p>{city}</p>
        </span>
        <span className='card-info'>
            <p className='titles'>Langages</p>
            <p>{langages}</p>
        </span>       
    </div>
  )
}
