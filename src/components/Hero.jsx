import React from 'react'
import { TypeAnimation } from 'react-type-animation'



const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>EL ARTE AL ALCANCE DE TU MANO</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Diseño Gráfico Especializado.</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Estilo para tu</p>
          <TypeAnimation className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-1' 
          sequence={[
            'pagina web',
            1000,
            'empresa',
            1000,
            'tienda',
            1000,
            'portafolio',
            1000
            ]}
            repeat={Infinity} />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500 '>Diseños atractivos y funcionales que reflejan la personalidad y los valores de tu marca.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Comienza ahora</button>
      </div>
    </div>
  )
}

export default Hero