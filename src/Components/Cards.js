import React from 'react'

export const Cards = () => {
    let name = 'Gabriel';
    let lastName = 'Lovera';
    let city = 'Buenos Aires';
    let email = 'loveragabriel20qgmail.com'
    let langages = 'Spanish(Native) - English (Upper Intermedite)'

  return (
    <div>
        <div className='card-info'>
            <p>First Name</p>
            <p>{name}</p>
        </div>
        <div className='card-info'>
            <p>Last Name</p>
            <p>{lastName}</p>
        </div>
        <div className='card-info'>
            <p>Address</p>
            <p>{city}</p>
        </div>
        <div className='card-info'>
            <p>Email</p>
            <p>{email}</p>
        </div>
        <div className='card-info'>
            <p>Langages</p>
            <p>{langages}</p>
        </div>
    </div>
  )
}
