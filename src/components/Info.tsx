import React from "react";

const Info = () => {
  return (
    <div className="w-full hidden lg:block">
      <div className="absolute margin-x -left-20 z-10 -top-10  w-20 h-20 bg-effect blur-3xl" />
      <div className=" border-b-thin h-10 ">
        <div className="h-full flex justify-between gap-16 items-center margin-x">
          <p className="font-extralight">karaayaarchitecture@gmail.com</p>
          <div className="h-full border-r-thin" />
          <p className="font-extralight">05.39.93.45.39</p>
          <div className="h-full border-r-thin" />
          <p className="font-extralight">
            35, rue Mossa Ibn Noussair, 1ᵉʳ étage, n° 1, 90020 Tanger, Maroc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
