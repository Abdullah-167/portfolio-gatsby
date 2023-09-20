import { StaticImage } from "gatsby-plugin-image";
import React, { useState, useRef } from "react";
import { useLocation } from "@reach/router";
import { RxCross1 } from "react-icons/rx";
import useClickOutside from "../../../hooks/useClickOutside";
const PortfoliTab = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [activeTab, setActiveTab] = useState(DataA[0].id);

  const [activeModalIndex, setActiveModalIndex] = useState(-1);

  const handelModale = (index: any) => {
    setActiveModalIndex(index);
  };
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => {
    setActiveModalIndex(-1);
  });
  return (
    <div
      className={`z-[100] relative px-5  ${isHomePage ? "py-28 sm:pb-80" : " pt-20 min-h-screen"
        }`}
    >
      {isHomePage && (
        <div className="custom_gradient absolute inset-0 skew-y-6 -top-28"></div>
      )}
      <div className="max-w-6xl mx-auto relative ">
        <h2
          className={`text-[18px] sm:text-[32px]  font-bold mb-10 ${isHomePage ? "text-[#3D8095]" : "text-[#4E4B8B]"
            }`}
        >
          Portafolio
        </h2>
        <div className="">
          <div className="flex gap-4  justify-between  max-w-[800px] mx-auto lg:max-w-full overflow-x-scroll lg:overflow-auto pb-7 ">
            {DataA.map((item, index) => {
              return (
                <div key={index}>
                  <div
                    className={`px-2 py-2 rounded cursor-pointer border text-center  ${activeTab === item.id
                      ? "bg-white border-white"
                      : isHomePage
                        ? " bg-transparent text-black border-[#3D8095]"
                        : " bg-transparent text-black  border-blue-500"
                      }  `}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <h1
                      className={`whitespace-nowrap text-sm ${activeTab === item.id
                        ? "text-[#3D8095]"
                        : "text-[#3D8095]"
                        }`}
                    >
                      {item.btnHeading}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            {DataA.map((item, index) => {
              return (
                <div>
                  <div
                    className={`transition-all duration-500 ${activeTab === item.id ? "opacity-100" : "opacity-0"
                      }`}
                    key={index}
                  >
                    {activeTab === item.id && (
                      <div
                        className={`flex flex-wrap justify-center md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`}
                      >
                        {item.data.map((newitem, idx) => {
                          return (
                            <div key={idx}>
                              <div
                                className="overflow-hidden cursor-pointer max-w-[332px] rounded relative group "
                                onClick={() => handelModale(idx)}
                              >
                                <div className="relative ">
                                  <div className="rounded-xl w-full block z-50 opacity-100 group-hover:opacity-0 transition duration-300 ease-in-out cursor-pointer absolute inset-x-0 -bottom-2 pt-30 text-white ">
                                    <div className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-4 translate-y-0 pb-[28px] transition duration-300 ease-in-out text-center">
                                      <div className="font-bold text-2xl text-[#A25FA5]">
                                        {newitem.headingText}
                                      </div>
                                    </div>
                                  </div>
                                  <div className=""> {newitem.img} </div>
                                  <div className="absolute left-2 top-2 inset-y-0 rounded service-hover  group-hover:bg-white max-w-[312px] max-h-[272px]">
                                    <div className="transform-gpu p-4 items-center flex min-h-[400px] space-y-3 text-xl opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 translate-y-0 pb-10 transition duration-300 ease-in-out">
                                      <div>
                                        <div className="font-bold text-[#A25FA5] text-center mb-8">
                                          {newitem?.headingText}
                                        </div>
                                        <div className="opacity-60 text-[#646467] text-sm text-center">
                                          {newitem?.Para}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {activeModalIndex === idx && (
                                <div
                                  ref={dropdownRef}
                                  className="container w-full h-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] shadow-2xl rounded-sm  bg-white max-h-[500px] overflow-y-scroll"
                                >
                                  <div className="py-10">
                                    {newitem.modale.map(
                                      (modaleItem, modaleIndex) => {
                                        return (
                                          <div
                                            key={modaleIndex}
                                            className="pb-7"
                                          >
                                            <div className="flex justify-between">
                                              <h1 className="text-[#3D8095] text-[20px] font-semibold pb-7">
                                                {modaleItem.heading}
                                              </h1>
                                              <span
                                                className="text-3xl cursor-pointer"
                                                onClick={() =>
                                                  setActiveModalIndex(-1)
                                                }
                                              >
                                                {" "}
                                                <RxCross1 />{" "}
                                              </span>{" "}
                                            </div>
                                            <div>
                                              {modaleItem.modaleData.map(
                                                (innerModale, innerModIdx) => {
                                                  return (
                                                    <div key={innerModIdx}>
                                                      <p className="text-base text-[#646467] font-normal pb-5">
                                                        {innerModale.text}
                                                      </p>
                                                      <div className="flex justify-center">
                                                        {innerModale.img}
                                                      </div>
                                                    </div>
                                                  );
                                                }
                                              )}
                                            </div>
                                          </div>
                                        );
                                      }
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfoliTab;

const DataA = [
  {
    id: 1,
    btnHeading: "Consultoría y asesoría",
    data: [
      {
        img: <StaticImage src={"../../../images/Frame-8.png"} alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src={"../../../images/Frame-36.png"} alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Ma Da Ladla Viger Gya",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/Frame-37.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    btnHeading: "Desarrollo de software",
    data: [
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    btnHeading: "Cloud Computing",
    data: [
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    btnHeading: "Automatización de procesos",
    data: [
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    btnHeading: "Ciencia de datos",
    data: [
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    btnHeading: "Servicios gestionados",
    data: [
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
      {
        img: <StaticImage src="../../../images/Frame-37.png" alt="Logo" />,
        link: "/agexport",
        headingText: "AGEXPORT",
        Para: `Lorem ipsum dolor sit amet consectetur. Purus arcu aenean faucibus imperdiet mauris. Lectus sed ultricies laoreet adipiscing.`,
        modale: [
          {
            heading: "Agexport - Brain",
            modaleData: [
              {
                text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
              },
              {
                text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
              },
              {
                text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
              },
              {
                img: (
                  <StaticImage src="../../../images/agexport.png" alt={""} />
                ),
              },
            ],
          },
        ],
      },
    ],
  },
];
