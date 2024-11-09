import Image from "next/image";
import { shape } from "../../public/icons";
import { client, urlFor } from "@/lib/sanity";
import { AboutDataTypes } from "@/lib/interfaces";

export const revalidate = 1

async function GetAboutData() {
  const query = `
    * [_type ==  "about"] {
      paragraph1,
      paragraph2,
      paragraph3,
      image1,
      image2,
    }
  `;
  const data = await client.fetch(query);
  return data;
}

async function About() {
  const data: AboutDataTypes[] = await GetAboutData();
  return (
    <section className="relative padding-x lg:px-0 section-spacing max-container ">
      <div className="relative flex flex-col lg:flex-row gap-12 items-center bg-none">
        <div className="absolute margin-x -right-40 z-10 top-1/2  w-24 h-24 bg-effect blur-3xl" />

        <div className="flex-1 flex ">
          <div className="max-h-[620px] max-w-[500px]">
            <Image
              src={urlFor(data[0].image1).url()}
              width={1000}
              height={1000}
              alt="avatar"
              className="w-full  h-full object-cover"
            />
          </div>
        </div>
        <div className="relative flex-1">
          <Image
            src={shape}
            className="absolute top-[-50px] right-[-150px] opacity-25"
            width={400}
            height={400}
            alt="texture"
          />

          <h3 className="text-2xl leading-10 font-bold uppercase">
            KAA - KARA AYA ARCHITECTURE
          </h3>
          <p className="text-2xl tracking-wider  font-thin leading-loose mt-4">
            {data[0].paragraph1}
          </p>
        </div>
      </div>
      <div className="relative flex flex-col-reverse lg:flex-row items-center gap-12 my-24">
        <div className="absolute margin-x -left-40 z-10 top-12  w-20 h-20 bg-effect blur-3xl" />

        <div className="flex-1">
          <p className="text-2xl tracking-wider leading-loose font-thin">
            {data[0].paragraph2}
          </p>
        </div>
        <div className="flex-1 w-full h-[700px]">
          <Image
            src={urlFor(data[0].image2).url()}
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
            alt="texture"
          />
        </div>
      </div>
      <div className="relative">
        <Image
          src={shape}
          className="absolute top-[-50px] lg:top-[-150px] left-[-150px] opacity-25"
          width={400}
          height={400}
          alt="texture"
        />
        <p className="text-2xl font-thin leading-loose tracking-wider">
          {data[0].paragraph3}
        </p>
      </div>
      <div className="absolute margin-x -right-40 z-10 -bottom-24  w-20 h-20 bg-effect blur-3xl" />
    </section>
  );
}

export default About;
