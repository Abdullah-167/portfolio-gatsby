import { GatsbyImage, MainImage, StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";

const Blog = () => {

    const DataA = [
        {
            id: 1,
            btnHeading: 'Consultoría y asesoría',
            data: [
                {
                    img: '../../images/women.png',
                    heading: 'Beneficios de implementar Cloud Computing en tu empresa',
                    para: 'Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. Urna at tortor volutpat sit risus tortor. Risus diam sit tellus tristique elit urna nisl. Aliquam sed volutpat dictum nec.',
                    date: '04 de junio 2023',
                    btn: 'Leer'
                },
                {
                    img: '../../images/women.png',
                    heading: 'Beneficios de implementar Cloud Computing en tu empresa',
                    para: 'Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. Urna at tortor volutpat sit risus tortor. Risus diam sit tellus tristique elit urna nisl. Aliquam sed volutpat dictum nec.',
                    date: '04 de junio 2023',
                    btn: 'Leer'
                },
                {
                    img: '../../images/women.png',
                    heading: 'Beneficios de implementar Cloud Computing en tu empresa',
                    para: 'Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. Urna at tortor volutpat sit risus tortor. Risus diam sit tellus tristique elit urna nisl. Aliquam sed volutpat dictum nec.',
                    date: '04 de junio 2023',
                    btn: 'Leer'
                },
                {
                    img: '../../images/women.png',
                    heading: 'Beneficios de implementar Cloud Computing en tu empresa',
                    para: 'Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. Urna at tortor volutpat sit risus tortor. Risus diam sit tellus tristique elit urna nisl. Aliquam sed volutpat dictum nec.',
                    date: '04 de junio 2023',
                    btn: 'Leer'
                },

            ]

        },
        {
            id: 2,
            btnHeading: 'Desarrollo de software',
            data: [
                {
                    img: '../../images/women.png',
                    heading: 'Beneficios de implementar Cloud Computing en tu empresa',
                    para: 'Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. Urna at tortor volutpat sit risus tortor. Risus diam sit tellus tristique elit urna nisl. Aliquam sed volutpat dictum nec.',
                    date: '04 de junio 2023',
                    btn: 'Leer'
                },
                {
                    img: '../../images/women.png',
                    heading: 'Beneficios de implementar Cloud Computing en tu empresa',
                    para: 'Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. Urna at tortor volutpat sit risus tortor. Risus diam sit tellus tristique elit urna nisl. Aliquam sed volutpat dictum nec.',
                    date: '04 de junio 2023',
                    btn: 'Leer'
                },
                {
                    img: '../../images/women.png',
                    heading: 'Beneficios de implementar Cloud Computing en tu empresa',
                    para: 'Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. Urna at tortor volutpat sit risus tortor. Risus diam sit tellus tristique elit urna nisl. Aliquam sed volutpat dictum nec.',
                    date: '04 de junio 2023',
                    btn: 'Leer'
                },
                {
                    img: '../../images/women.png',
                    heading: 'Beneficios de implementar Cloud Computing en tu empresa',
                    para: 'Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. Urna at tortor volutpat sit risus tortor. Risus diam sit tellus tristique elit urna nisl. Aliquam sed volutpat dictum nec.',
                    date: '04 de junio 2023',
                    btn: 'Leer'
                },

            ]

        },
        {
            id: 3,
            btnHeading: 'Cloud Computing',
            data: [
                {
                    img: '../../images/women.png',
                    heading: 'Beneficios de implementar Cloud Computing en tu empresa',
                    para: 'Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. Urna at tortor volutpat sit risus tortor. Risus diam sit tellus tristique elit urna nisl. Aliquam sed volutpat dictum nec.',
                    date: '04 de junio 2023',
                    btn: 'Leer'
                },
                {
                    img: '../../images/women.png',
                    heading: 'Beneficios de implementar Cloud Computing en tu empresa',
                    para: 'Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. Urna at tortor volutpat sit risus tortor. Risus diam sit tellus tristique elit urna nisl. Aliquam sed volutpat dictum nec.',
                    date: '04 de junio 2023',
                    btn: 'Leer'
                },
                {
                    img: '../../images/women.png',
                    heading: 'Beneficios de implementar Cloud Computing en tu empresa',
                    para: 'Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. Urna at tortor volutpat sit risus tortor. Risus diam sit tellus tristique elit urna nisl. Aliquam sed volutpat dictum nec.',
                    date: '04 de junio 2023',
                    btn: 'Leer'
                },
                {
                    img: '../../images/women.png',
                    heading: 'Beneficios de implementar Cloud Computing en tu empresa',
                    para: 'Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. Urna at tortor volutpat sit risus tortor. Risus diam sit tellus tristique elit urna nisl. Aliquam sed volutpat dictum nec.',
                    date: '04 de junio 2023',
                    btn: 'Leer'
                },
            ]

        },
        {
            id: 4,
            btnHeading: 'Automatización de procesos',
            data: [
                {
                    img: '../../images/women.png',
                    heading: 'Beneficios de implementar Cloud Computing en tu empresa',
                    para: 'Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. Urna at tortor volutpat sit risus tortor. Risus diam sit tellus tristique elit urna nisl. Aliquam sed volutpat dictum nec.',
                    date: '04 de junio 2023',
                    btn: 'Leer'
                },
                {
                    img: '../../images/women.png',
                    heading: 'Beneficios de implementar Cloud Computing en tu empresa',
                    para: 'Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. Urna at tortor volutpat sit risus tortor. Risus diam sit tellus tristique elit urna nisl. Aliquam sed volutpat dictum nec.',
                    date: '04 de junio 2023',
                    btn: 'Leer'
                },
                {
                    img: '../../images/women.png',
                    heading: 'Beneficios de implementar Cloud Computing en tu empresa',
                    para: 'Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. Urna at tortor volutpat sit risus tortor. Risus diam sit tellus tristique elit urna nisl. Aliquam sed volutpat dictum nec.',
                    date: '04 de junio 2023',
                    btn: 'Leer'
                },
                {
                    img: '../../images/women.png',
                    heading: 'Beneficios de implementar Cloud Computing en tu empresa',
                    para: 'Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. Urna at tortor volutpat sit risus tortor. Risus diam sit tellus tristique elit urna nisl. Aliquam sed volutpat dictum nec.',
                    date: '04 de junio 2023',
                    btn: 'Leer'
                },
            ]

        },
        {
            id: 5,
            btnHeading: 'Ciencia de datos',
            data: [
                {
                    img: '../../images/women.png',
                    heading: 'Beneficios de implementar Cloud Computing en tu empresa',
                    para: 'Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. Urna at tortor volutpat sit risus tortor. Risus diam sit tellus tristique elit urna nisl. Aliquam sed volutpat dictum nec.',
                    date: '04 de junio 2023',
                    btn: 'Leer'
                },
                {
                    img: '../../images/women.png',
                    heading: 'Beneficios de implementar Cloud Computing en tu empresa',
                    para: 'Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. Urna at tortor volutpat sit risus tortor. Risus diam sit tellus tristique elit urna nisl. Aliquam sed volutpat dictum nec.',
                    date: '04 de junio 2023',
                    btn: 'Leer'
                },
                {
                    img: '../../images/women.png',
                    heading: 'Beneficios de implementar Cloud Computing en tu empresa',
                    para: 'Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. Urna at tortor volutpat sit risus tortor. Risus diam sit tellus tristique elit urna nisl. Aliquam sed volutpat dictum nec.',
                    date: '04 de junio 2023',
                    btn: 'Leer'
                },

            ]

        },
        {
            id: 6,
            btnHeading: 'Servicios gestionados',
            data: [
                {
                    img: '../../images/women.png',
                    heading: 'Beneficios de implementar Cloud Computing en tu empresa',
                    para: 'Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. Urna at tortor volutpat sit risus tortor. Risus diam sit tellus tristique elit urna nisl. Aliquam sed volutpat dictum nec.',
                    date: '04 de junio 2023',
                    btn: 'Leer'
                },
                {
                    img: '../../images/women.png',
                    heading: 'Beneficios de implementar Cloud Computing en tu empresa',
                    para: 'Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. Urna at tortor volutpat sit risus tortor. Risus diam sit tellus tristique elit urna nisl. Aliquam sed volutpat dictum nec.',
                    date: '04 de junio 2023',
                    btn: 'Leer'
                },
                {
                    img: '../../images/women.png',
                    heading: 'Beneficios de implementar Cloud Computing en tu empresa',
                    para: 'Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. Urna at tortor volutpat sit risus tortor. Risus diam sit tellus tristique elit urna nisl. Aliquam sed volutpat dictum nec.',
                    date: '04 de junio 2023',
                    btn: 'Leer'
                },
                {
                    img: '../../images/women.png',
                    heading: 'Beneficios de implementar Cloud Computing en tu empresa',
                    para: 'Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. Urna at tortor volutpat sit risus tortor. Risus diam sit tellus tristique elit urna nisl. Aliquam sed volutpat dictum nec.',
                    date: '04 de junio 2023',
                    btn: 'Leer'
                },

            ]

        },

    ];

    const [activeTab, setActiveTab] = useState(DataA[0].id);

    return (
        <div className={`px-5 opacity-100 z[1000] -mt-16 lg:-mt-0 pt-14 pb-14`}>
            <div className="max-w-6xl mx-auto relative ">
                <h2 className=" text-[32px] text-[#3D8095] font-bold pb-5">Blog</h2>
                <div className=" pb-10">
                    <div className="flex gap-4  justify-between  max-w-[800px] mx-auto lg:max-w-full overflow-x-scroll lg:overflow-auto pb-7 ">
                        {DataA.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div
                                        className={`px-2 py-2 rounded cursor-pointer border-[1.5px] text-center  ${activeTab === item.id ? "bg-[#4E4B8B] border-[#4E4B8B]" : " bg-transparent text-[#4E4B8B] border-[#4E4B8B]"
                                            }`}
                                        onClick={() => setActiveTab(item.id)}
                                    >
                                        <h1
                                            className={` whitespace-nowrap text-sm font-semibold ${activeTab === item.id ? "text-white" : "text-[#4E4B8B]"
                                                }`}
                                        >
                                            {item.btnHeading}
                                        </h1>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="">
                        {DataA.map((item, index) => {
                            return (
                                <div className={`transition-all duration-500 ${activeTab === item.id ? 'opacity-100' : 'opacity-0'}`}
                                    key={index} >
                                    {activeTab === item.id && (
                                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8`} >
                                            {item.data.map((newitem, idx) => {
                                                return (
                                                    <div key={idx} className="flex md:flex-nowrap flex-wrap gap-5 bg-white shadow-md p-4">
                                                        <img src={newitem.img} alt="Logo" className="lg:max-w-[200px] min-w-[200px] w-full object-cover lg:min-h-[250px] lg:max-h-[200px]" width={400} height={400} />
                                                        <div>
                                                            <h2 className="text-[#3D8095] text-[20px] leading-6 font-semibold pb-3">{newitem.heading}</h2>
                                                            <p className="text-sm pb-3">{newitem.para}</p>
                                                            <p className="text-sm font-semibold pb-3">{newitem.date}</p>
                                                            <div className="text-[#A25FA5] text-sm font-semibold cursor-pointer">{newitem.btn}</div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <p className="text-[#A25FA5] text-[16px] font-semibold cursor-pointer underline">Ver todos</p>
            </div>
        </div >
    );
};

export default Blog;