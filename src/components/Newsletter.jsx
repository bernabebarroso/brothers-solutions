import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-5xl sm:text-4xl text-2xl font-bold py-2'>¿Quieres estar al tanto de todas las novedades?</h1>
                <p>Registrate en nuestro boletín informativo y mantente actualizado.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Ingresa tu email' />
                    <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Notificarme</button>
                </div>
            <p>Nos preocupamos por la protección de tu información. Lee nuestro <span className='text-[#00df9a]'>Acuerdo de privacidad.</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter