import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Info = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>PROYECTOS ADAPTABLES</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Elige tu modelo ideal.</h1>
                <p>Trabajamos en estrecha colaboración contigo para entender tus necesidades y objetivos, 
                y luego creamos un diseño personalizado que se adapte perfectamente a tus necesidades. 
                Nos aseguramos de que el diseño sea fácil de navegar y que proporcione una excelente experiencia de usuario.</p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Comienza ahora</button>
            </div>
        </div>
    </div>
  )
}

export default Info