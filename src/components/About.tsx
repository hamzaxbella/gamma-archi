import React from "react";
import Image from "next/image";
import { avatar, lexus } from "../../public/images";
import { shape } from "../../public/icons";
const About = () => {
  return (
    <section className="section-spacing max-container ">
      <div className="flex flex-col lg:flex-row gap-12 items-center bg-none">
        <div className="flex-1 flex ">
          <div className="max-h-[620px] max-w-[500px]">
            <Image
              src={avatar}
              alt="avatar"
              className="w-full  h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl leading-10 font-bold uppercase">
            KAA - KARA AYA ARCHITECTURE
          </h3>
          <p className="text-2xl tracking-wider  font-thin leading-loose mt-4">
            réalise des projets allant de villas à établissements publics,
            social et habitations. Le cabinet basé à Tanger, prend part à divers
            projets architecturaux sur tout le territoire marocain mais aussi à
            l'internationale.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 my-24">
        <div className="flex-1">
          <p className="text-2xl tracking-wider leading-loose font-thin">
            Chez Kara Aya Architecture, nous nous engageons à concevoir des
            espaces qui reflètent vraiment qui vous êtes et ce dont vous avez
            besoin. Nous sommes une équipe passionnée d'architectes, de
            designers, et de planificateurs qui aiment ce qu'ils font—et nous
            sommes dédiés à vous aider à créer quelque chose de spécial.
          </p>
        </div>
        <div className="flex-1 w-full h-[700px]">
          <Image src={lexus} className="w-full h-full object-cover" alt="texture" />
        </div>
      </div>
      <div className="relative">
        <Image src={shape} className="absolute top-[-50px] lg:top-[-150px] left-[-150px] opacity-25" width={400} height={400} alt="texture" />
        <p className="text-2xl font-thin leading-loose tracking-wider">
          Notre vision est simple : nous voulons repousser les limites de ce qui
          est possible en architecture. Que ce soit à travers des conceptions
          innovantes, des pratiques durables, ou simplement une perspective
          nouvelle, nous cherchons toujours à améliorer chaque projet par
          rapport au précédent. Pour nous, il ne s'agit pas seulement de
          construire des murs et des toits—il s'agit de créer des espaces qui
          rendent la vie meilleure.
        </p>
      </div>
    </section>
  );
};

export default About;
