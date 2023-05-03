import React from 'react'
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
    FaWhatsappSquare

} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div className='mr-5'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>LOREM DESIGN</h1>
            <p className='py-4'>Somos una empresa de diseño gráfico enfocada en crear soluciones visuales efectivas y atractivas para marcas 
            y empresas de todo tipo. Nuestro objetivo es proporcionar un servicio excepcional a nuestros clientes y crear 
            diseños de alta calidad que cumplan con sus necesidades y objetivos.</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaWhatsappSquare size={30} />
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Ideas</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Soporte</h6>
                <ul>
                    <li className='py-2 text-sm'>Precios</li>
                    <li className='py-2 text-sm'>Información</li>
                    <li className='py-2 text-sm'>FAQ</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Compañia</h6>
                <ul>
                    <li className='py-2 text-sm'>Acerca de nosotros</li>
                    <li className='py-2 text-sm'>Nuestro blog</li>
                    <li className='py-2 text-sm'>Integrantes</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Seguridad</li>
                    <li className='py-2 text-sm'>Acuerdo de privacidad</li>
                    <li className='py-2 text-sm'>Terminos de licencia</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer