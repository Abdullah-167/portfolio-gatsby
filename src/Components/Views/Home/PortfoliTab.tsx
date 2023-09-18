import { GatsbyImage, MainImage, StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import { RxCross1 } from "react-icons/rx";


const PortfoliTab = () => {

    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [activeTab, setActiveTab] = useState(DataA[0].id);

    const [activeModalIndex, setActiveModalIndex] = useState(-1); // Initially, no modal is open

    const handelModale = (index: any) => {
        setActiveModalIndex(index);
    }

    return (
        <div className={`z-[100]  px-5  ${isHomePage ? ' py-28 sm:py-48 port-bg  ' : ' py-20'}`}>
            <div className="max-w-6xl mx-auto relative ">
                <h2 className={`text-[18px] sm:text-[32px]  font-bold pb-5 ${isHomePage ? 'text-[#3D8095]' : 'text-[#4E4B8B]'}`}>Portafolio</h2>
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
                                <div>
                                    <div className={`transition-all duration-500 ${activeTab === item.id ? 'opacity-100' : 'opacity-0'}`} key={index}>
                                        {activeTab === item.id && (
                                            <div className={`flex flex-wrap justify-center md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`} >
                                                {item.data.map((newitem, idx) => {
                                                    return (
                                                        <div className="" key={idx} >
                                                            <div className="card-show image-show max-w-[332px] cursor-pointer" onClick={() => handelModale(idx)}>
                                                                <span>  <MainImage src={newitem.img} alt="Logo" width={350} height={70} />  </span>
                                                                <div className=" bg-white text-center py-16 px-6 shadow-md min-h-[273px]">
                                                                    <h2 className="text-lg text-[#A25FA5] font-semibold pb-5">{newitem.headingText}</h2>
                                                                    <p className="text-base text-[#646467] font-normal">{newitem.Para}</p>
                                                                </div>
                                                            </div>
                                                            {activeModalIndex === idx && (<div className=' container w-full h-full absolute inset-0 top-44 bg-white max-h-[500px] overflow-y-scroll'>
                                                                <div className="py-10">
                                                                    {newitem.modale.map((modaleItem, modaleIndex) => {
                                                                        return (
                                                                            <div key={modaleIndex} className='pb-7'>
                                                                                <div className="flex justify-between">
                                                                                    <h1 className='text-[#3D8095] text-[20px] font-semibold pb-7'>{modaleItem.heading}</h1>
                                                                                    <span className="text-3xl cursor-pointer" onClick={() => setActiveModalIndex(-1)}> <RxCross1 /> </span>                                                                                </div>
                                                                                <div>
                                                                                    {modaleItem.modaleData.map((innerModale, innerModIdx) => {
                                                                                        return (
                                                                                            <div key={innerModIdx}>
                                                                                                <p className="text-base text-[#646467] font-normal pb-5">{innerModale.text}</p>
                                                                                                <div className="flex justify-center">{innerModale.img}</div>
                                                                                            </div>
                                                                                        )
                                                                                    })}
                                                                                </div>
                                                                            </div>

                                                                        )
                                                                    })}
                                                                </div>
                                                            </div>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )
                                        }
                                    </div>
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
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Ma Da Ladla Viger Gya',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
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
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
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
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
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
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
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
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
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
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
            {
                img: '/export.svg',
                link: '/agexport',
                headingText: 'asdasddasd',
                Para: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit!`,
                modale: [
                    {
                        heading: 'Agexport - Brain',
                        modaleData: [
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.'
                            },
                            {
                                text: 'Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas'
                            },
                            {
                                text: 'Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.'
                            },
                            {
                                img: (
                                    <StaticImage width={900} height={200} src='../../../images/agexport.png' alt={''} />
                                )
                            }
                        ]
                    }
                ]
            },
        ]

    },

];
