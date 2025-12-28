import { useFetchProjects } from "./fetchProjects";

const Projects = () => {
  const { loading, projects } = useFetchProjects;
  console.log(loading, projects);
  if (loading) {
    <section className="projects">
      <h2>Loading...</h2>
    </section>;
  }
  return <h2>Projects</h2>;
};
export default Projects;
