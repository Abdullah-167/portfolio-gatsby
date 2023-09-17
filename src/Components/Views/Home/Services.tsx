import { Link } from 'gatsby';
import React from 'react'
import { useLocation } from '@reach/router';


const Services = () => {

    const isHomePage = location.pathname === '/';


    return (
        <section className={` ${isHomePage ? 'services-bg pt-10 md:pb-44' : 'py-20'}`}>
            <div className='container'>
                <h2 className='text-[32px] font-bold pb-6'>Servicios</h2>
                <div className=' flex flex-wrap justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-16 px-7'>
                    {data.map((item, index) => {
                        return (
                            <div className={`bg-white pt-10 pb-10 px-6 relative max-w-[340px]  ${isHomePage ? 'shadow-md lg:shadow-none' : ' shadow-md'}`}
                                key={index}
                            >  <Link to={item.link}>
                                    <h2 className='text-lg font-bold text-center pb-3'>{item.heading}</h2>
                                    <p className='text-sm font-normal text-center '>{item.para}</p>
                                </Link>
                            </div>

                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services;


const data = [
    {
        heading: 'Consultoría y Asesoría en proyectos de tecnología y ciencia de datos',
        para: `Brinda orientación, conocimientos y experiencia especializada en el ámbito de la tecnología y la ciencia de datos para ayudar a las organizaciones a implementar proyectos exitosos en estas áreas.`,
        link: '/consultoría-y-asesoría'
    },
    {
        heading: 'Desarrollo de software',
        para: `Creamos, adaptamos e implementamos software personalizado o de terceros según las necesidades y requisitos de la organización.`,
        link: '/desarrollo-de-software'
    },

    {
        heading: 'Automatización de Procesos',
        para: `Desarrollamos proyectos para que la tecnología pueda reemplazar las actividades manuales y repetitivas por procesos automatizados que se ejecutan de forma eficiente, precisa y consistente.`,
        link: '/automatización-de-procesos'
    },
    {
        heading: 'Cloud Computing(GCP, AWS, Azure)',
        para: `La computación en la nube permite acceder a recursos informáticos y servicios a través de internet, eliminando la necesidad de infraestructura local y proporcionando flexibilidad, escalabilidad y accesibilidad a los usuarios.`,
        link: '/cloud-computing'
    },
    {
        heading: `Ciencia de Datos (Data Science)`,
        para: `Nuestro objetivo es proporcionar soluciones y conocimientos basados en datos para impulsar la toma de decisiones efectiva y obtener ventajas competitivas en el mercado.`,
        link: '/ciencia-de-datos'
    },
    {
        heading: 'Servicios Gestionados (Managed Services)',
        para: `Se refieren a la externalización de la gestión y operación de ciertos aspectos de las tecnologías de la información (TI) de una organización a un proveedor de servicios especializado.`,
        link: '/servicios-gestionados'
    },
]