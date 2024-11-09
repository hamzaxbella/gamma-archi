import React from "react";

const Map = () => {
  return (
    <section className="padding-x lg:px-0 max-container  mt-44 mb-10">
      <div className="text-center flex flex-col items-center">
        <h1 className="text-2xl lg:text-4xl uppercase my-6 font-bold tracking-widest">
          parlons-en!
        </h1>
      </div>
      <div className="w-full rounded-3xl overflow-hidden mt-6 ">
      <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3236.859337665299!2d-5.812964924207933!3d35.778831472555865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDQ2JzQzLjgiTiA1wrA0OCczNy40Ilc!5e0!3m2!1sen!2sma!4v1731169553156!5m2!1sen!2sma" width="600" height="450" style={{"border" : 0}}  loading="lazy"></iframe>
      </div>
    </section>
  );
};

export default Map;
