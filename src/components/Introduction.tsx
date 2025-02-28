import React from "react";
import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";
import { IntroDataTypes } from "@/lib/interfaces";

export const revalidate = 1;

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
  const data: IntroDataTypes[] = await getIntroData()
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden">
      <section className="max-container px-4 lg:px-0">
        {/* First Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-32">
          <div className="flex-1 lg:sticky lg:top-32 lg:h-fit">
            <p className="text-2xl lg:text-3xl font-thin leading-relaxed animate-fadeIn">
              <span className="text-secondary">"</span> 
              {data[0].paragraph1}
              <span className="text-secondary">"</span>
            </p>
          </div>
          <div className="flex-1">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-lg shadow-xl">
              <Image
                src={urlFor(data[0].image2).url()}
                width={1000}
                height={1000}
                alt="Introduction visual"
                className="object-cover w-full h-full transition-transform hover:scale-105 duration-700"
              />
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-32">
          <div className="flex-1">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-lg shadow-xl">
              <Image
                src={urlFor(data[0].image1).url()}
                width={1000}
                height={1000}
                alt="Secondary visual"
                className="object-cover w-full h-full transition-transform hover:scale-105 duration-700"
              />
            </div>
          </div>
          <div className="flex-1 lg:sticky lg:top-32 lg:h-fit">
            <p className="text-2xl lg:text-3xl font-thin leading-relaxed animate-fadeIn">
              <span className="text-secondary">"</span>
              {data[0].paragraph2}
              <span className="text-secondary">"</span>
            </p>
          </div>
        </div>

        {/* Third Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="flex-1 lg:sticky lg:top-32 lg:h-fit">
            <p className="text-2xl lg:text-3xl font-thin leading-relaxed animate-fadeIn">
              <span className="text-secondary">"</span>
              {data[0].paragraph3}
              <span className="text-secondary">"</span>
            </p>
          </div>
          <div className="flex-1">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg shadow-xl">
              <Image
                src={urlFor(data[0].image3).url()}
                width={1000}
                height={1000}
                alt="Final visual"
                className="object-cover w-full h-full transition-transform hover:scale-105 duration-700"
              />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="fixed left-0 top-1/4 w-32 h-32 bg-effect blur-[100px] opacity-50" />
        <div className="fixed right-0 top-1/2 w-32 h-32 bg-effect blur-[100px] opacity-50" />
        <div className="fixed left-0 bottom-1/4 w-32 h-32 bg-effect blur-[100px] opacity-50" />
      </section>
    </section>
  );
}

export default Introduction;
