"use client";
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ProjectsGridProps } from "@/lib/interfaces";
import { urlFor } from "@/lib/sanity";


const ProjectsGrid = ({
  isComponent,
  AllProjects,
  AllCategories, // This is an array of CategoryTypes
}: ProjectsGridProps) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState(AllProjects);
  const projectsRef = useRef<HTMLDivElement[]>([]);

  // Extract titles from CategoryTypes
  const filters: string[] = AllCategories.map((category) => category.title);

  const handleFilterButtonClick = (selectedCategory: string) => {
    if (selectedFilters.includes(selectedCategory)) {
      const updatedFilters = selectedFilters.filter(
        (el) => el !== selectedCategory
      );
      setSelectedFilters(updatedFilters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  const filterProjects = () => {
    let tempProjects = AllProjects;

    if (selectedFilters.length > 0) {
      tempProjects = AllProjects.filter((project) =>
        selectedFilters.includes(project.category)
      );
    }

    if (isComponent) {
      tempProjects = tempProjects.slice(0, 8);
    }

    setFilteredProjects(tempProjects);
  };

  useEffect(() => {
    filterProjects();
  }, [selectedFilters]);

  useEffect(() => {
    if (projectsRef.current && projectsRef.current.length > 0) {
      gsap.fromTo(
        projectsRef.current.filter(Boolean),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.5, ease: "power1.out" }
      );
    }
  }, [filteredProjects]);

  function truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }
  

  return (
    <section className="w-full text-center max-container">
      {isComponent && (
        <h1 className="text-2xl lg:text-4xl uppercase my-6 font-bold tracking-wider">
          nos résalisations
        </h1>
      )}
      <div className="container">
        <div className="buttons-container mb-24 grid grid-cols-2 lg:flex gap-6 justify-center max-container margin-x">
          {filters.map((filter, idx) => (
            <button
              onClick={() => handleFilterButtonClick(filter)} // Use filter (string)
              className={`px-4 py-1 font-thin text-lg tracking-widest transition-colors rounded-full duration-300 ${
                selectedFilters.includes(filter) ? "bg-secondary " : ""
              }`}
              key={`filters-${idx}`}
            >
              {filter} {/* Display filter title */}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 items-start my-12">
          {filteredProjects.map((project, idx) => (
            <div
              key={`project-${idx}`}
              className="relative flex flex-col items-center"
              ref={(el) => {
                if (el) projectsRef.current[idx] = el;
              }}
            >
              <div
                className={`w-full ring-1 ring-secondary ${
                  idx % 2 === 0 ? "h-[150px]" : "h-[350px]"
                } flex justify-center items-center`}
              >
                <Image
                  src={urlFor(project.mainImage).url()}
                  alt={project.title}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="tracking-wider text-2xl font-thin uppercase mt-4">
                {`0${idx + 1}`}. {truncateText(project.title, 30)}
              </p>
              <p className=" py-1 px-3 bg-secondary top-0 tracking-widest text-sm font-thin text-white rounded-full  mt-2">
                {project.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
