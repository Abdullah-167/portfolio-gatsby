import React from "react";

const Form = () => {
  return (
    <section className="pt-[90px] pb-40 min-h-[80vh]">
      <div className="container">
        <h2 className="text-[#4E4B8B] text-lg md:text-[32px] font-bold mb-5 md:mb-20">
          Contáctenos
        </h2>
        <div className="max-w-[715px] mx-auto">
          {formsData.map((item, index) => {
            return <span className="w-full">{item.input}</span>;
          })}
          <div className="btn bg-[#A25FA5] transition-all font-semibold text-white text-center py-3 rounded cursor-pointer">
            Enviar
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;

const formsData = [
  {
    input: (
      <input
        type={"text"}
        placeholder={"Nombre"}
        className={`w-full border-[1.5px] border-[#3D8095] placeholder:text-[#3D8095] max-w-[715px] rounded outline-none px-3 py-3 mb-5 flex-grow`}
      />
    ),
  },
  {
    input: (
      <input
        type={"text"}
        placeholder={"Correo electrónico"}
        className={`w-full border-[1.5px] border-[#3D8095] placeholder:text-[#3D8095] max-w-[715px] rounded outline-none px-3 py-3 mb-5 flex-grow`}
      />
    ),
  },
  {
    input: (
      <textarea
        placeholder={"Mensaje"}
        className={`w-full border-[1.5px] border-[#3D8095] placeholder:text-[#3D8095] max-w-[715px] rounded outline-none px-3 py-3 mb-5 flex-grow h-32`}
      />
    ),
  },
];
