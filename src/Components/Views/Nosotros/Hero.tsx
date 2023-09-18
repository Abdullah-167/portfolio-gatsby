import { MainImage, StaticImage } from 'gatsby-plugin-image'
import React from 'react'


const Hero = () => {
    return (
        <header className='py-10'>
            <div className=' container'>
                <h2 className='text-[#4E4B8B] 
text-[18px] sm:text-[32px] font-bold'>Nosotros </h2>
                {text.map((item, index) => {
                    return (
                        <div key={index} className='pb-7'>
                            <h1 className='text-[32px] text-[#3D8095] font-bold  text-center pb-7'>{item.heading}</h1>
                            {item.innerData.map((newItem, idx) => {
                                return (
                                    <div className='max-w-[618px] mx-auto'
                                        key={idx}>
                                        <p className='pb-1 text-base  text-center font-bold text-[#3D8095]'>{newItem.heading}</p>
                                        <p className='pb-5 text-base  text-center font-normal text-[#646467]'>{newItem.text}</p>
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
        heading: 'Quiénes somos ',
        innerData: [
            {
                text: 'Lorem ipsum dolor sit amet consectetur. Phasellus ut sagittis a accumsan bibendum scelerisque quis bibendum. Euismod habitasse est amet viverra faucibus. Eget nec vitae posuere integer blandit nunc ipsum. In eget porta velit odio natoque senectus amet tristique. Non dignissim risus vitae quam. Faucibus auctor ridiculus dui gravida netus condimentum. '
            },
            {
                heading: 'MISIÓN',
                text: 'Etiam egestas aliquam dictum ut ut. Sed libero tristique viverra habitasse eu tortor in ornare. Tempor quisque bibendum aliquam sagittis sapien dignissim. Porta viverra senectus aenean duis egestas. Nisl amet aliquam dolor velit. Adipiscing amet eu augue sed velit consectetur sit. Libero vel egestas tincidunt in egestas. '
            },
            {
                heading: 'VISIÓN',
                text: 'Nisl amet aliquam dolor velit. Adipiscing amet eu augue sed velit consectetur sit. Libero vel egestas tincidunt in egestas. Arcu sed cursus scelerisque quisque arcu pellentesque vel. Varius mauris amet sed et nunc ut ipsum vitae. Iaculis in nunc egestas maecenas.'
            },

        ]
    }
]