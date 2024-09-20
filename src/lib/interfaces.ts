export interface ProjectCellTypes {
    mainImage: any;
    title: string;
    category: string; // category is a string since you're fetching category->title
  }
  
  export interface CategoryTypes {
    title: string;
  }
  
  export interface ProjectsGridProps {
    isComponent?: boolean;
    AllProjects: ProjectCellTypes[]; // Ensure AllProjects matches the ProjectCellTypes interface
    AllCategories: CategoryTypes[]; // Change to CategoryTypes[]
  }
  