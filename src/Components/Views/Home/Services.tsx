import { Link } from 'gatsby';
import React from 'react'
import { useLocation } from '@reach/router';
import { StaticImage } from 'gatsby-plugin-image';



const Services = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <section className={`sm:block hidden overflow-hidden z-[1000] ${isHomePage ? 'services-bg pb-48 -mt-7' : 'py-20 min-h-screen'}`}>
            <div className='container'>
                <h2 className={`text-[32px] font-bold pb-6 text-[#0E333F] ${isHomePage ? ' mt-20' : ''}`}>Servicios</h2>
                <div className=' flex flex-wrap justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-16 px-7'>
                    {data.map((item, index) => {
                        return (
                            <Link to={item.link}>
                                <div className='card-show image-show pointer-events-none'>
                                    <div className={`bg-white py-28 px-6 relative min-h-[404px] max-h-[404px] max-w-[375px] rounded ${isHomePage ? 'shadow-md lg:shadow-none' : ' shadow-md'}`}
                                        key={index}
                                    >
                                        <h2 className='text-lg font-bold text-center pb-7'>{item.heading}</h2>
                                        <p className='text-sm font-normal text-center '>{item.para}</p>
                                    </div>
                                    <span className='relative'>
                                        {item.img}
                                        <span className='absolute text-white font-semibold inset-x-0 text-sm px-5 bottom-6 '>{item.imgText}</span>
                                    </span>
                                </div>
                            </Link>
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
        link: '/consultoría-y-asesoría',
        img: (
            <StaticImage className=' min-h-[404px] max-h-[404px]' width={400} height={404} src='../../../images/card1.png' alt={''} />
        ),
        imgText: 'Consultoría y Asesoría en proyectos de tecnología y ciencia de datos'
    },
    {
        heading: 'Desarrollo de software',
        para: `Creamos, adaptamos e implementamos software personalizado o de terceros según las necesidades y requisitos de la organización.`,
        link: '/desarrollo-de-software',
        img: (
            <StaticImage className=' min-h-[404px] max-h-[404px] object-cover' width={400} height={404} src='../../../images/card2.png' alt={''} />
        ),
        imgText: 'Consultoría y Asesoría en proyectos de tecnología y ciencia de datos'
    },

    {
        heading: 'Automatización de Procesos',
        para: `Desarrollamos proyectos para que la tecnología pueda reemplazar las actividades manuales y repetitivas por procesos automatizados que se ejecutan de forma eficiente, precisa y consistente.`,
        link: '/automatización-de-procesos',
        img: (
            <StaticImage className=' min-h-[404px] max-h-[404px] object-cover' width={400} height={404} src='../../../images/card3.png' alt={''} />
        ),
        imgText: 'Consultoría y Asesoría en proyectos de tecnología y ciencia de datos'
    },
    {
        heading: 'Cloud Computing(GCP, AWS, Azure)',
        para: `La computación en la nube permite acceder a recursos informáticos y servicios a través de internet, eliminando la necesidad de infraestructura local y proporcionando flexibilidad, escalabilidad y accesibilidad a los usuarios.`,
        link: '/cloud-computing',
        img: (
            <StaticImage className='min-h-[404px] max-h-[404px] object-cover' width={400} height={404} src='../../../images/card4.png' alt={''} />
        ),
        imgText: 'Consultoría y Asesoría en proyectos de tecnología y ciencia de datos'
    },
    {
        heading: `Ciencia de Datos (Data Science)`,
        para: `Nuestro objetivo es proporcionar soluciones y conocimientos basados en datos para impulsar la toma de decisiones efectiva y obtener ventajas competitivas en el mercado.`,
        link: '/ciencia-de-datos',
        img: (
            <StaticImage className='min-h-[404px] max-h-[404px] object-cover' width={400} height={404} src='../../../images/card5.png' alt={''} />
        ),
        imgText: 'Consultoría y Asesoría en proyectos de tecnología y ciencia de datos'
    },
    {
        heading: 'Servicios Gestionados (Managed Services)',
        para: `Se refieren a la externalización de la gestión y operación de ciertos aspectos de las tecnologías de la información (TI) de una organización a un proveedor de servicios especializado.`,
        link: '/servicios-gestionados',
        img: (
            <StaticImage className='min-h-[404px] max-h-[404px] object-cover' width={400} height={404} src='../../../images/card6.png' alt={''} />
        ),
        imgText: 'Consultoría y Asesoría en proyectos de tecnología y ciencia de datos'
    },
]