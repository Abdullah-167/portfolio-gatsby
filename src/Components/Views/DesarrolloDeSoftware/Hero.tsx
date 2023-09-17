import { MainImage, StaticImage } from 'gatsby-plugin-image'
import React from 'react'


const Hero = () => {
    return (
        <header className='py-10'>
            <div className=' container'>
                <h2 className='text-[#4E4B8B] text-[32px] font-bold'>Servicios </h2>
                {text.map((item, index) => {
                    return (
                        <div key={index} className='pb-7'>
                            <h1 className='text-[32px] text-[#3D8095] font-bold  text-center pb-7'>{item.heading}</h1>
                            {item.innerData.map((newItem, idx) => {
                                return (
                                    <div className='max-w-[618px] mx-auto'
                                        key={idx}>
                                        <p className='pb-1 text-base font-bold text-[#3D8095]'>{newItem.heading}</p>
                                        <p className='pb-5 text-base font-normal text-[#646467]'>{newItem.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </header>
    )
}

export default Hero

const text = [
    {
        heading: 'Desarrollo de Software ',
        innerData: [
            {
                text: 'Creamos, adaptamos e implementamos software personalizado o de terceros según las necesidades y requisitos de la organización. Desarrollamos todo el ciclo de vida del software, desde la concepción de la idea hasta la implementación final del producto. El desarrollo implica una serie de pasos, que pueden incluir:'
            },
            {
                heading: 'Análisis de requisitos: ',
                text: 'En esta etapa, se recopilan y analizan los requisitos del cliente. Los analistas trabajan en estrecha colaboración con el cliente para comprender sus necesidades y expectativas, y definir los objetivos del software a desarrollar.'
            },
            {
                heading: 'Diseño del software: ',
                text: 'Basándose en los requisitos recopilados, se crea un diseño detallado del software. Esto incluye la definición de la arquitectura del sistema, la estructura de datos, los componentes y las funcionalidades que se incluirán en el software.'
            },
            {
                heading: 'Desarrollo del software: ',
                text: 'Los desarrolladores escriben el código del software utilizando lenguajes de programación y herramientas adecuados. Implementan las funcionalidades definidas en el diseño y aseguran que el software cumpla con los requisitos establecidos.'
            },
            {
                heading: 'Pruebas y depuración:  ',
                text: 'Después de desarrollar el software, se lleva a cabo un proceso de pruebas exhaustivas para identificar y corregir cualquier error o defecto. Se realizan pruebas funcionales, de rendimiento y de calidad para garantizar que el software funcione de manera esperada y cumpla con los estándares de calidad establecidos.'
            },
            {
                heading: 'Implementación y despliegue: ',
                text: 'Una vez que el software ha sido probado y depurado satisfactoriamente, se implementa en el entorno de producción. Esto implica la instalación y configuración del software en los sistemas del cliente, asegurándose de que esté listo para su uso.'
            },
            {
                heading: 'Mantenimiento y soporte: ',
                text: 'Después de la implementación, se brinda soporte continuo para el software. Esto puede incluir la resolución de problemas, la aplicación de actualizaciones y mejoras, y la capacitación del personal del cliente para utilizar el software de manera efectiva.'
            },
            {
                text: 'El servicio de desarrollo puede ser proporcionado como una solución integral o en trabajo conjunto con los equipos internos. Se enfoca en crear soluciones tecnológicas que satisfagan las necesidades específicas de cada cliente, ya sea en forma de aplicaciones web, aplicaciones móviles, sistemas empresariales como ERP, CRM, CMS, e-commerce, entre otros.'
            }
        ]
    }
]