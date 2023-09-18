import React from "react";
import { StaticImage } from "gatsby-plugin-image";


const Hero = () => {
  return (
    <header className="py-10">
      <div className=" container">
        {text.map((item, index) => {
          return (
            <div key={index} className="pb-7">
              <h1 className="text-[#3D8095] text-[20px] font-semibold pb-7">
                {item.heading}
              </h1>
              {item.para.map((newItem, idx) => {
                return (
                  <p
                    className="pb-5 text-base font-normal text-[#646467]"
                    key={idx}
                  >
                    {newItem.text}
                  </p>
                );
              })}
            </div>
          );
        })}
        <div className="mx-auto flex justify-center">
          <StaticImage
            width={900}
            height={200}
            src="../../../images/agexport.png"
            alt={""}
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;

const text = [
  {
    heading: "Agexport - Brain",
    para: [
      {
        text: "Lorem ipsum dolor sit amet consectetur. Elit nulla nibh malesuada vitae nec sodales pellentesque tempor. Justo aliquam tristique placerat dolor. Eget elementum sit egestas risus viverra morbi vulputate mauris. Egestas ac suscipit magna at proin habitant. Maecenas amet consectetur nulla neque tincidunt vitae. Auctor nullam lectus lectus sapien dictum odio facilisi. Non velit ut nec a. Urna egestas ac imperdiet nunc. Risus odio nam cras ullamcorper in id elit accumsan. Egestas eu felis donec dui. Tortor sapien neque bibendum at nisl mauris cursus.",
      },
      {
        text: "Felis nibh hac adipiscing suspendisse turpis arcu dui. Diam suscipit sit purus vestibulum mattis turpis enim. Fringilla ut aliquet ut enim phasellus pretium pretium at. Ipsum eu neque vel accumsan adipiscing magna nibh nunc at. Arcu turpis aliquet id in dolor. Magna commodo magna nunc maecenas",
      },
      {
        text: "Scelerisque pellentesque imperdiet augue sagittis aliquam placerat sed nunc nunc. Pellentesque blandit sit lobortis nibh eget ultricies id. Cursus cursus fringilla vestibulum adipiscing at non ornare. Vel nullam sagittis massa suspendisse tincidunt arcu ultrices. Sed vel nec quam pulvinar. Massa imperdiet non eget etiam vitae. Fringilla est aliquet magna sed lectus ut at phasellus. Facilisis nec potenti consectetur lacus nibh dictum id vulputate. Aenean posuere mauris sed sit purus nullam in odio leo. Nibh leo vitae eget in morbi libero accumsan. Pulvinar non purus eget a elit eget. Magna dictum mauris sit tincidunt. Cras lobortis et at elementum dictumst faucibus varius velit. Rutrum egestas venenatis eget facilisis vitae pulvinar aliquam viverra rhoncus.",
      },
    ],
  },
];
