import { CategoryTypes, ProjectCellTypes } from "@/lib/interfaces";
import { client } from "@/lib/sanity";
import ProjectsGrid from "./ProjectsGrid";

export const revalidate = 30 // revalidate the data every 30 seconds

async function getProjects() {
  const query = `
    *[_type == 'project'] {
      mainImage,
      description,
      title,
      gallery,
      "currentSlug": slug.current,
      "category": category->title  // category is a string
    }
  `;
  const projects = await client.fetch(query);
  return projects as ProjectCellTypes[]; // Cast to ProjectCellTypes[]
}

async function getCategories() {
  const query = `
    * [_type == 'category'] {
      title,
    }
  `;
  const categories = await client.fetch(query);
  return categories as CategoryTypes[]; // Cast to CategoryTypes[]
}

interface projectsComponentProps {
  isComponent? : boolean
}
export default async function Projects({isComponent} : projectsComponentProps) {
  const projects: ProjectCellTypes[] = await getProjects();
  const categories: CategoryTypes[] = await getCategories(); // Ensure it is CategoryTypes[]

  return (
    <section className="padding-x lg:px-0 max-container">
      <ProjectsGrid
        isComponent={isComponent}
        AllProjects={projects}
        AllCategories={categories}
      />
    </section>
  );
}
