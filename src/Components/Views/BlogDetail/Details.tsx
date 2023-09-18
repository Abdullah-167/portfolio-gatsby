import React from "react";
import { StaticImage } from "gatsby-plugin-image";


const Details = () => {
  return (
    <div>
      <div className="py-16">
        <h2 className="text-[#4E4B8B] text-lg md:text-[32px] font-bold container mb-5">
          Blog{" "}
        </h2>
        <p className=" text-sm text-[#18154C] hidden md:block font-semibold text-center pb-5">
          CLOUD COMPUTING
        </p>
        <h1 className=" text-2xl md:text-[32px] font-semibold text-[#3D8095] text-center max-w-[599px] mx-auto pt-5 md:pt-0 pb-8 px-5">
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <div className="flex justify-between max-w-[599px] mx-auto text-sm text-[#242425] font-normal pb-12 sm:pb-20 px-5">
          <span>Nombre Apellido</span>
          <p>04 de junio 2023</p>
        </div>
        <StaticImage
          src={"../../../images/laptop.png"}
          alt={""}
          class="w-full object-cover"
        />

        <div className="pb-0 sm:b-16">
          {blog.map((item, index) => {
            return (
              <div className="max-w-[599px] mx-auto px-5" key={index}>
                <h2 className=" font-bold text-center text-base py-14 text-[#646467]">
                  {item.mainHeading}
                </h2>
                {item.innerData.map((newItem, idx) => {
                  return (
                    <div>
                      <p className="pb-6 text-xs sm:text-base text-[#646467]">
                        {newItem.text}
                      </p>
                      <p className=" font-bold pb-3 text-[#646467]">
                        {newItem.heading}
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className=" container">
          <h2 className="text-base text-[#3D8095] font-medium pb-7">
            Te puede interesar
          </h2>
          <div className="flex lg:flex-nowrap flex-wrap justify-center lg:justify-between gap-7">
            {data.map((newitem, idx) => {
              return (
                <div
                  key={idx}
                  className="flex md:flex-nowrap flex-wrap gap-5 bg-white shadow-md p-4"
                >
                  <div className="px-2">{newitem.img}</div>
                  <div>
                    <h2 className="text-[#3D8095] text-[20px] leading-6 font-semibold pb-3">
                      {newitem.heading}
                    </h2>
                    <p className="text-sm pb-3 text-[#646467]">
                      {newitem.para}
                    </p>
                    <p className="text-sm font-semibold pb-3">{newitem.date}</p>
                    <div className="text-[#A25FA5] text-sm font-semibold cursor-pointer">
                      {newitem.btn}
                    </div>
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

export default Details;

const blog = [
  {
    mainHeading:
      "Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. ",
    innerData: [
      {
        text: "Lorem ipsum dolor sit amet consectetur. Egestas consequat morbi fermentum molestie mi in ut. Non ipsum lorem elementum enim turpis. Nullam mauris arcu netus eget mauris quisque. A mi eget at id. Integer netus ultrices mattis tincidunt aenean habitant in. Convallis mauris facilisis in morbi elit leo nulla. Adipiscing nunc hac massa sed nec cursus euismod arcu. Fermentum placerat volutpat purus eget. Non convallis ut suscipit consectetur mattis nibh. Dolor donec diam at mi fermentum arcu tempus at id. Augue dictum risus tellus egestas arcu.",
      },
      {
        heading: "Nullam dolor praesent purus",
        text: "Arcu mattis pharetra blandit eget tellus non. Mauris est volutpat velit bibendum nibh sem semper. Vitae ac proin amet ornare volutpat diam cras ultricies nibh. Velit aliquam vitae at mollis et. Sed consequat urna cum ultrices. Vulputate ac sed nibh lectus suspendisse pretium. Fermentum arcu tristique nibh nunc sem quis ac mauris. Enim pulvinar nibh tristique purus in nulla. Felis consectetur a pharetra sapien. Nullam dolor praesent nunc lobortis ut pellentesque. Massa sagittis varius mauris tortor. Amet ornare cras aliquet dui. Commodo viverra aliquam etiam nisl tortor mauris. Augue nec auctor eu posuere morbi quis.",
      },
      {
        text: "Porttitor varius volutpat ac varius. Nibh aliquam quam ut mauris condimentum laoreet. Porttitor velit nunc quisque habitant condimentum. Enim ornare adipiscing viverra neque sed bibendum. Ultrices faucibus molestie vitae sollicitudin est gravida dui vitae. Augue aliquet orci eu elementum potenti nascetur elit porttitor. Mollis tempor mi leo nisl id vulputate. Tristique neque amet auctor sed dignissim.",
      },
    ],
  },
];

const data = [
  {
    img: (
      <StaticImage
        src={"../../../images/laptop.png"}
        alt="Logo"
        className="lg:max-w-[200px] min-w-[200px] w-full object-cover lg:min-h-[180px] lg:max-h-[180px]"
        width={400}
        height={400}
      />
    ),
    heading: "Lorem ipsum dolor sit amet  consectetur",
    para: "Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. ",
    date: "04 de junio 2023",
    btn: "Leer",
  },
  {
    img: (
      <StaticImage
        src={"../../../images/laptop.png"}
        alt="Logo"
        className="lg:max-w-[200px] min-w-[200px] w-full object-cover lg:min-h-[180px] lg:max-h-[180px]"
        width={400}
        height={400}
      />
    ),
    heading: "Lorem ipsum dolor sit amet  consectetur",
    para: "Lorem ipsum dolor sit amet consectetur. Nisl nunc quis augue aliquam at felis rutrum. ",
    date: "04 de junio 2023",
    btn: "Leer",
  },
];
