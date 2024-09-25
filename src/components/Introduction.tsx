import React from "react";
import Image from "next/image";
import { intro1, intro2, intro3 } from "../../public/images";

const Introduction = () => {
  return (
    <section className="relative padding-x lg:px-0 w-full section-spacing">
      <section className="max-container">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <p className="lg:text-3xl text-2xl font-thin my-24 leading-relaxed">
              <span className="text-secondary">“</span> Kara Aya Architecture est une entreprise qui
              réunit architectes, scénographes, urbanistes, designers
              d'intérieur, et techniciens. <span className="text-secondary">”</span>
            </p>
            <div className=" h-[700px] bg-slate-300" >
            <Image src={intro1} alt="" className="object-cover w-full h-full"  />
            </div> 
          </div>
          <div className="absolute margin-x -left-20 z-10 top-1/4  w-24 h-24 bg-effect blur-3xl" />
          <div className="flex-1 lg:block flex flex-col-reverse lg:flex-row">
            <Image src={intro2} alt="" />
            <p className="lg:text-3xl text-2xl font-thin lg:my-24 my-16 leading-relaxed">
            <span className="text-secondary">“</span> Nous sommes dédiés à la conception de projets innovants et de qualité, alliant expertise en technologies constructives, stratégies environnementales, et ambitions entrepreneuriales. <span className="text-secondary">”</span>            </p>
          </div>
        </div>
        <div className="absolute margin-x -right-20 z-10 top-1/2  w-24 h-24 bg-effect blur-3xl" />

        <div className="flex flex-col lg:flex-row gap-16 lg:my-24 my-16">
            <p className="flex-1 lg:text-3xl text-2xl font-thin  leading-relaxed">
            <span className="text-secondary">“</span> Avec plus de 30 ans d'expérience, Kara Aya Architecture est une société familiale réunissant des architectes chevronnés. Au-delà de notre héritage, notre vision transcende le simple rôle d'architecte, combinant rigueur technique et créativité artistique. Respecter les réglementations tout en conciliant art et technique demande un effort constant. La gestion du temps, le perfectionnisme, et la rapidité sont nos priorités. <span className="text-secondary">”</span>            </p>
            <div className="flex-1 h-[600px] bg-slate-300 ">
            <Image src={intro3} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="absolute margin-x -left-20 z-10 bottom-10  w-24 h-24 bg-effect blur-3xl" />

      </section>
    </section>
  );
};

export default Introduction;
