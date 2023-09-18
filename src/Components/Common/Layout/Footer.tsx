import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-[#18154C] text-white  py-7'>
            <div className='flex sm:flex-row flex-col-reverse justify-between container items-center'>
                <span className='text-sm'>Guatemala, 2023</span>
                <div className='flex gap-5 sm:pb-0 pb-6'>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className='cursor-pointer'>{item.icon}</div>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}

export default Footer;


const data = [
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0C7.16333 0 0 7.16333 0 16C0 24.8367 7.16333 32 16 32C24.8367 32 32 24.8367 32 16C32 7.16333 24.8367 0 16 0ZM12.0833 22.6317H8.84333V12.205H12.0833V22.6317ZM10.4433 10.925C9.42 10.925 8.75833 10.2 8.75833 9.30333C8.75833 8.38833 9.44 7.685 10.485 7.685C11.53 7.685 12.17 8.38833 12.19 9.30333C12.19 10.2 11.53 10.925 10.4433 10.925ZM23.9167 22.6317H20.6767V16.8533C20.6767 15.5083 20.2067 14.595 19.035 14.595C18.14 14.595 17.6083 15.2133 17.3733 15.8083C17.2867 16.02 17.265 16.32 17.265 16.6183V22.63H14.0233V15.53C14.0233 14.2283 13.9817 13.14 13.9383 12.2033H16.7533L16.9017 13.6517H16.9667C17.3933 12.9717 18.4383 11.9683 20.1867 11.9683C22.3183 11.9683 23.9167 13.3967 23.9167 16.4667V22.6317Z" fill="white" />
            </svg>
        )
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0C7.19999 0 0 7.21285 0 16.0964C0 24.1285 5.85599 30.7952 13.504 32V20.755H9.43999V16.0964H13.504V12.5462C13.504 8.51406 15.888 6.29719 19.552 6.29719C21.296 6.29719 23.12 6.60241 23.12 6.60241V10.5703H21.104C19.12 10.5703 18.496 11.8072 18.496 13.0763V16.0964H22.944L22.224 20.755H18.496V32C22.2663 31.4022 25.6995 29.4707 28.1758 26.5543C30.6522 23.6379 32.0085 19.9287 32 16.0964C32 7.21285 24.8 0 16 0Z" fill="white" />
            </svg>
        )
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_205_116)">
                    <path d="M16.2191 -0.000487822C7.35074 -0.0972742 0.0816527 7.00913 0.00165434 15.8577C-0.0790162 24.7197 7.05159 31.9215 15.9872 31.9995C24.783 31.98 31.8961 24.9469 32.0003 16.181C32.1045 7.36536 25.0015 0.0976428 16.2191 -0.000487822ZM26.1524 25.9262C24.3144 25.9262 22.4758 25.9228 20.6399 25.9322C20.5417 25.9404 20.4432 25.9219 20.3548 25.8786C20.2664 25.8353 20.1913 25.7688 20.1377 25.6862C18.3051 23.2114 16.4676 20.7405 14.6252 18.2733C14.5997 18.2384 14.5701 18.2061 14.5338 18.1617C14.3509 18.3419 14.1654 18.5126 13.996 18.6994C11.787 21.0644 9.58061 23.4288 7.37696 25.7924C7.32184 25.8509 7.2378 25.9188 7.1652 25.9201C6.63883 25.9309 6.11178 25.9262 5.52759 25.9262L13.7533 17.1132L5.53364 6.08361C5.65935 6.07823 5.74876 6.07084 5.83817 6.07084C7.65326 6.07084 9.46162 6.07487 11.2734 6.06479C11.3672 6.05755 11.4613 6.07577 11.5456 6.11753C11.63 6.15929 11.7015 6.22304 11.7527 6.30205C13.4848 8.62224 15.2215 10.9391 16.9626 13.2525C17.0151 13.3197 17.0722 13.387 17.1435 13.4763L17.6725 12.9118C19.7538 10.6848 21.8365 8.45958 23.9205 6.23618C24.0169 6.14268 24.1434 6.08647 24.2774 6.07756C24.7433 6.05942 25.2105 6.07017 25.7483 6.07017L17.9004 14.4993C20.7508 18.2948 23.5971 22.0863 26.4697 25.9121C26.3359 25.9188 26.2438 25.9262 26.1524 25.9262Z" fill="white" />
                    <path d="M10.4038 7.34837C9.66434 7.39273 8.92486 7.36047 8.12756 7.36047C8.3763 7.68779 8.58537 7.96135 8.79242 8.23423C12.8398 13.6113 16.8866 18.9901 20.9327 24.3707C20.9763 24.4351 21.0363 24.4868 21.1064 24.5206C21.1766 24.5544 21.2544 24.569 21.332 24.5629C22.1004 24.5548 22.8694 24.5629 23.6378 24.5629C23.7178 24.5629 23.7978 24.5528 23.9067 24.5454C23.8435 24.454 23.8106 24.4023 23.7723 24.3532C22.7773 23.0269 21.782 21.7008 20.7861 20.3749C17.6624 16.2014 14.5409 12.0253 11.4216 7.84642C11.144 7.47271 10.8683 7.32081 10.4038 7.34837Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_205_116">
                        <rect width="32" height="32" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        )
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM25.9048 11.84C25.9048 8.67048 23.3295 6.09524 20.16 6.09524H11.84C10.3164 6.09524 8.85519 6.70049 7.77784 7.77784C6.70049 8.85519 6.09524 10.3164 6.09524 11.84V20.16C6.09524 23.3295 8.67048 25.9048 11.84 25.9048H20.16C21.6836 25.9048 23.1448 25.2995 24.2222 24.2222C25.2995 23.1448 25.9048 21.6836 25.9048 20.16V11.84ZM9.12056 9.12056C9.78927 8.45186 10.6962 8.07619 11.6419 8.07619H20.3581C22.3291 8.07619 23.9238 9.67086 23.9238 11.6419V20.3581C23.9238 21.3038 23.5481 22.2107 22.8794 22.8794C22.2107 23.5481 21.3038 23.9238 20.3581 23.9238H11.6419C9.67086 23.9238 8.07619 22.3291 8.07619 20.3581V11.6419C8.07619 10.6962 8.45186 9.78927 9.12056 9.12056ZM22.0755 9.92453C21.8433 9.69235 21.5284 9.5619 21.2 9.5619C20.8716 9.5619 20.5567 9.69235 20.3245 9.92453C20.0923 10.1567 19.9619 10.4716 19.9619 10.8C19.9619 11.1284 20.0923 11.4433 20.3245 11.6755C20.5567 11.9077 20.8716 12.0381 21.2 12.0381C21.5284 12.0381 21.8433 11.9077 22.0755 11.6755C22.3077 11.4433 22.4381 11.1284 22.4381 10.8C22.4381 10.4716 22.3077 10.1567 22.0755 9.92453ZM19.5019 12.4981C18.5731 11.5694 17.3135 11.0476 16 11.0476C14.6865 11.0476 13.4269 11.5694 12.4981 12.4981C11.5694 13.4269 11.0476 14.6865 11.0476 16C11.0476 17.3135 11.5694 18.5731 12.4981 19.5019C13.4269 20.4306 14.6865 20.9524 16 20.9524C17.3135 20.9524 18.5731 20.4306 19.5019 19.5019C20.4306 18.5731 20.9524 17.3135 20.9524 16C20.9524 14.6865 20.4306 13.4269 19.5019 12.4981ZM13.8989 13.8989C14.4561 13.3416 15.2119 13.0286 16 13.0286C16.7881 13.0286 17.5439 13.3416 18.1011 13.8989C18.6584 14.4561 18.9714 15.2119 18.9714 16C18.9714 16.7881 18.6584 17.5439 18.1011 18.1011C17.5439 18.6584 16.7881 18.9714 16 18.9714C15.2119 18.9714 14.4561 18.6584 13.8989 18.1011C13.3416 17.5439 13.0286 16.7881 13.0286 16C13.0286 15.2119 13.3416 14.4561 13.8989 13.8989Z" fill="white" />
            </svg>
        )
    },
]