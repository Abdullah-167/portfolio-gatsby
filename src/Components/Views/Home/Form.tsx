import { StaticImage, MainImage } from 'gatsby-plugin-image'
import React from 'react'

const Form = () => {
    return (
        <section className='form-bg py-5 md:py-10'>
            <div className='flex flex-wrap md:flex-nowrap gap-40 items-center justify-between container'>
                <div>
                    <StaticImage src={'../../../images/logo.svg'} className="min-h-[]" alt="Logo" width={260} height={120} /> 
                </div>
                <div className='-mt-40 md:-mt-0'>
                    <h2 className='text-[#CEA8CF] text-[32px] font-bold pb-5'>Contáctenos</h2>
                    {formsData.map((item, index) => {
                        return (
                            <span className='w-full'>{item.input}</span>
                        )
                    })}
                    <div className='btn bg-[#A25FA5] font-semibold text-white text-center py-2 rounded cursor-pointer'>Enviar</div>
                </div>
            </div>
        </section>
    )
}

export default Form;


const formsData = [
    {
        input: (
            <input type={'text'} placeholder={'Nombre'} className={`w-full bg-[#C5EEFB] focus:bg-white rounded outline-none px-3 py-3 mb-5 flex-grow`} />

        )
    },
    {
        input: (
            <input type={'text'} placeholder={'Correo electrónico'} className={`w-full bg-[#C5EEFB] focus:bg-white rounded outline-none px-3 py-3 mb-5 flex-grow`} />

        )
    },
    {
        input: (
            <textarea placeholder={'Mensaje'} className={`w-full bg-[#C5EEFB] focus:bg-white rounded outline-none px-3 py-3 mb-5 flex-grow h-32`} />

        )
    },
]