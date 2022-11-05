import React from 'react'

// @ts-ignore
import img from './error.gif';

const ErrorMessage: React.FC = () => {
  return (
    <>
      <img style={{ display: 'block', width: '250px', height: '250px', objectFit: 'contain', margin: '0 auto' }} src={img} alt="Error" />
      <p style={{textAlign: 'center', fontWeight: 600, fontSize: '25px', marginTop: '10px'}}>Упс... Сталася помилка</p>
    </>
  )
}

export default ErrorMessage;