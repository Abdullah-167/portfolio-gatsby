import { GatsbyImage, MainImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';


const PortfoliTab = () => {

    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [activeTab, setActiveTab] = useState(DataA[0].id);

    return (
        <div className={`pt-12 px-5 z[1000] ${isHomePage ? 'pb-[160px] md:pb-[340px] ' : ' py-20'}`}>
            <div className="max-w-6xl mx-auto relative ">
                <h2 className={`text-[32px]  font-bold pb-5 ${isHomePage ? 'text-[#3D8095]' : 'text-[#4E4B8B]'}`}>Portafolio</h2>
                <div className="">
                    <div className="flex gap-4  justify-between  max-w-[800px] mx-auto lg:max-w-full overflow-x-scroll lg:overflow-auto pb-7 ">
                        {DataA.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div
                                        className={`px-2 py-2 rounded cursor-pointer border text-center  ${activeTab === item.id ? "bg-white border-white" : isHomePage ? " bg-transparent text-black border-[#3D8095]" : " bg-transparent text-black  border-blue-500"
                                            }  `}
                                        onClick={() => setActiveTab(item.id)}
                                    >
                                        <h1
                                            className={` whitespace-nowrap text-sm ${activeTab === item.id ? "text-[#3D8095]" : "text-[#3D8095]"
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
                                <div className={`transition-all duration-500 ${activeTab === item.id ? 'opacity-100' : 'opacity-0'}`} key={index}>
                                    {activeTab === item.id && (
                                        <div className={`flex flex-wrap justify-center md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`} >
                                            {item.data.map((newitem, idx) => {
                                                return (
                                                    <div key={idx} className="">
                                                        <Link to={newitem.link}>  <MainImage src={newitem.img} alt="Logo" width={350} height={70} /></Link>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )
                                    }
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PortfoliTab;


const DataA = [
    {
        id: 1,
        btnHeading: 'Consultoría y asesoría',
        data: [
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
        ]

    },
    {
        id: 2,
        btnHeading: 'Desarrollo de software',
        data: [
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
        ]

    },
    {
        id: 3,
        btnHeading: 'Cloud Computing',
        data: [
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
        ]

    },
    {
        id: 4,
        btnHeading: 'Automatización de procesos',
        data: [
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
        ]

    },
    {
        id: 5,
        btnHeading: 'Ciencia de datos',
        data: [
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
        ]

    },
    {
        id: 6,
        btnHeading: 'Servicios gestionados',
        data: [
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
            {
                img: '/export.svg',
                link: '/agexport',
                text: 'asdasddasd',
            },
        ]

    },

];
