import React from "react";
import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";
import { IntroDataTypes } from "@/lib/interfaces";

export const revalidate = 1

async function getIntroData() {
  const query = `
    * [_type ==  "introduction"] {
        paragraph1,
        paragraph2,
        paragraph3,
        image1,
        image2,
        image3
    }
  `;
  const data = await client.fetch(query);
  return data;
}

async function Introduction() {
  const data : IntroDataTypes[] = await getIntroData()
  return (
    <section className="relative padding-x lg:px-0 w-full section-spacing">
      <section className="max-container">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <p className="lg:text-3xl text-2xl font-thin my-24 leading-relaxed">
              <span className="text-secondary">“</span> {data[0].paragraph1}
              <span className="text-secondary">”</span>
            </p>
            <div className=" h-[700px] bg-slate-300">
              <Image
                src={urlFor(data[0].image2).url()} width={1000} height={1000}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="absolute margin-x -left-20 z-10 top-1/4  w-24 h-24 bg-effect blur-3xl" />
          <div className="flex-1 lg:block flex flex-col-reverse lg:flex-row">
            <Image src={urlFor(data[0].image1).url()} width={1000} height={1000} alt="" className="w-full h-2/3 object-cover" />
            <p className="lg:text-3xl text-2xl font-thin lg:my-24 my-16 leading-relaxed">
              <span className="text-secondary">“</span> {data[0].paragraph2}
              <span className="text-secondary">”</span>{" "}
            </p>
          </div>
        </div>
        <div className="absolute margin-x -right-20 z-10 top-1/2  w-24 h-24 bg-effect blur-3xl" />

        <div className="flex flex-col lg:flex-row gap-16 lg:my-24 my-16">
          <p className="flex-1 lg:text-3xl text-2xl font-thin  leading-relaxed">
            <span className="text-secondary">“</span> {data[0].paragraph3}
            <span className="text-secondary">”</span>{" "}
          </p>
          <div className="flex-1 h-[600px] bg-slate-300 ">
            <Image src={urlFor(data[0].image3).url()} width={1000} height={1000} alt="testing" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="absolute margin-x -left-20 z-10 bottom-10  w-24 h-24 bg-effect blur-3xl" />
      </section>
    </section>
  );
}

export default Introduction;
