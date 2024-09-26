import PageTitle from "@/components/PageTitle";
import { ProjectDetailProps, SingleProjectType } from "@/lib/interfaces";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import React from "react";
import DynamicGallery from "@/components/DynamicGallery";
import TruncatedText from "@/components/TruncatedText";
import ScrollRestoration from '@/components/ScrollRestoration'
import { title } from "process";
export const revalidate = 30 // revalidate the data every 30 seconds


// Fetch project data
async function getProject(slug: string) {
  const query = `
    * [_type == 'project' && slug.current == '${slug}'] {
        title,
        description,
        mainImage,
        gallery
    }[0]
  `;
  const project = await client.fetch(query);
  return project;
}

export async function generateMetadata({params : {slug} }: ProjectDetailProps) {
  const project = await getProject(slug)
  if(!project) {
    return {
      title : "Not Found",
      description : "Not Found"
    }
  }
  return {
    title : project.title,
    description : project.description,
    alternates : {
      canonical : `/projects/${slug}`
    }
  }
}


export default async function ProjectDetailPage({
  params,
}: ProjectDetailProps) {
  const project: SingleProjectType = await getProject(params.slug);

  return (
    <section className="relative min-h-[1000px] z-10 max-container ">
      <ScrollRestoration />
      <PageTitle title={`${project.title}`} maxCharacter />
      <div id="wrapper" className="padding-x lg:px-0 section-spacing">
        <div className="flex flex-col lg:flex-row gap-16   items-center">
          <div className="flex-1">
            <Image
              className="w-full h-auto object-cover"
              src={urlFor(project.mainImage)
                .width(1200) // Adjust width as needed
                .quality(80)
                .auto("format") // Automatically choose best format
                .url()}
              alt="Main project image"
              width={1200}
              height={800}
              layout="responsive"
            />
          </div>
          <div className="flex-1">
            <TruncatedText
              text={project.description}
              maxLength={600} // Adjust this number as per your requirement
            />
          </div>
        </div>
        <DynamicGallery project={project} />
      </div>
    </section>
  );
}
