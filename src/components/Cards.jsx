import React from 'react'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h2 className='text-2xl font-bold text-center py-8'>Plan Básico (mensual)</h2>
                <p className='text-center text-4xl font-bold'>$2500</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>2 diseños personalizado</p>
                    <p className='py-2 border-b mx-8'>Sin mantenimiento o actualización</p>
                    <p className='py-2 border-b mx-8'>Apto para un usuario</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Empieza ahora</button>
            </div>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <h2 className='text-2xl font-bold text-center py-8'>Plan Premium (mensual)</h2>
                <p className='text-center text-4xl font-bold'>$4000</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>4 diseños personalizados</p>
                    <p className='py-2 border-b mx-8'> 1 mantenimiento mensual</p>
                    <p className='py-2 border-b mx-8'>Apto para dos usuarios</p>
                </div>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Empieza ahora</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h2 className='text-2xl font-bold text-center py-8'>Plan Enterprise (mensual)</h2>
                <p className='text-center text-4xl font-bold'>$5500</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>8 diseños personalizados</p>
                    <p className='py-2 border-b mx-8'> 3 mantenimientos o actualizaciones mensuales</p>
                    <p className='py-2 border-b mx-8'>Apto para tres o mas usuarios</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Empieza ahora</button>
            </div> 
        </div>
    </div>
  )
}

export default Cards