'use client'
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { AllProjects } from "@/constants";
import Image from "next/image";

const Projects = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState(AllProjects);
  const projectsRef = useRef<HTMLDivElement[]>([]); // Ref for the project items

  const filters: string[] = [
    "État",
    "Architecture",
    "Aminagement",
    "Réhabilitation",
  ];

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

  useEffect(() => {
    filterProjects();
  }, [selectedFilters]);

  useEffect(() => {
    // Ensure elements exist before animating
    if (projectsRef.current && projectsRef.current.length > 0) {
      gsap.fromTo(
        projectsRef.current.filter(Boolean), // Filter out any null refs
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.5, ease: "power1.out" }
      );
    }
  }, [filteredProjects]);

  const filterProjects = () => {
    if (selectedFilters.length > 0) {
      const tempProjects = AllProjects.filter((project) =>
        selectedFilters.includes(project.category)
      );
      setFilteredProjects(tempProjects);
    } else {
      setFilteredProjects(AllProjects);
    }
  };

  const truncateText = (text: string, limit: number) => {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text;
  };

  return (
    <section className="w-full text-center max-container">
      <h1 className="text-2xl lg:text-4xl uppercase my-6 font-bold tracking-wider">
        nos résalisations
      </h1>
      <div className="container">
        <div className="buttons-container mb-24 grid grid-cols-2 lg:flex gap-6 justify-center max-container margin-x">
          {filters.map((category, idx) => (
            <button
              onClick={() => handleFilterButtonClick(category)}
              className={`px-4 py-1 font-thin text-lg tracking-widest transition-colors rounded-full duration-300 ${
                selectedFilters.includes(category) ? "bg-secondary " : ""
              }`}
              key={`filters-${idx}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 items-start my-12">
          {filteredProjects.map((project, idx) => (
            <div
              key={`project-${idx}`}
              className="flex flex-col items-center"
              ref={(el) => {
                if (el) projectsRef.current[idx] = el;
              }} // Ensure the ref is set only if the element is available
            >
              <div
                className={`w-full ${
                  idx % 2 === 0 ? "h-[150px]" : "h-[350px]"
                } flex justify-center items-center`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover "
                />
              </div>
              <p className="tracking-wider text-2xl font-thin uppercase mt-4">
                {`0${idx + 1}`}. {truncateText(project.title, 30)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="font-thin text-xl lg:text-3xl py-2 lg:py-1 px-6 transition-all ring-1 text-secondary ring-secondary duration-300 w-fit hover:bg-secondary hover:text-white hover:px-10 rounded-full">
          VOIR TOUT
        </button>
      </div>
    </section>  
  );
};

export default Projects;
