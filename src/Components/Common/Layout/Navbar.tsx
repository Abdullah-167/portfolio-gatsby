import { GatsbyImage, MainImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { CgMenuLeft } from 'react-icons/cg';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';

const Navbar = () => {
    const [toggelTab, setToggelTab] = useState<boolean>(false);
    const location = useLocation();

    const handleMenu = () => {
        setToggelTab(!toggelTab);
    };

    useEffect(() => {
        if (toggelTab) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [toggelTab]);


    const isHomePage = location.pathname === '/';

    return (
        <nav className={`py-6  ${isHomePage ? ' bg-transparent' : ' nav-bg'}`}>
            <div className='flex justify-between items-center container'>
                <div>
                    <Link to='/'><MainImage src="/logo.svg" alt="Logo" width={150} height={70} /> </Link>
                </div>
                <div className='hidden md:flex gap-8 items-center'>
                    {links.map((item, index) => {
                        return (
                            <Link to={item.url}><span
                                key={index}
                                className={`text-sm cursor-pointer text-white`}
                            >
                                {item.link}
                            </span>
                            </Link>
                        )
                    })}
                </div>
                <div className={`md:hidden flex text-white cursor-pointer ${toggelTab ? 'text-3xl' : 'text-4xl'}`} onClick={() => handleMenu()}>
                    {toggelTab ? (
                        <RxCross1 />
                    ) : (
                        <CgMenuLeft />
                    )}
                </div>
            </div>
            <div className={`w-full absolute top-28 py-5 transition-all duration-700 shadow-md bg-white z-[1100]  max-w-[300px] min-h-[300px] ${toggelTab ? ' -right-0 opacity-100 ' : ' opacity-0 -right-[800px]'}`}>
                {toggelTab && (
                    <div className='flex flex-col gap-8 items-center'>
                        {links.map((item, index) => {
                            return (
                                <Link to={item.url}><span
                                    key={index}
                                    className={`text-sm cursor-pointer text-black`}
                                >
                                    {item.link}
                                </span>
                                </Link>
                            )
                        })}
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;

const links = [
    {
        link: 'SERVICIOS',
        url: '/service',
    },
    {
        link: 'PORTAFOLIO',
        url: '/portfolio',
    },
    {
        link: 'NOSOTROS',
        url: '/nosotros',
    },
    {
        link: 'BLOG',
        url: '/blog',
    },
    {
        link: 'CONTACTO',
        url: '/contact',
    },
]
