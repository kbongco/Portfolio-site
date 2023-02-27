import ProjectTab from "./ProjectTab/ProjectTab"

export default function Projects() {
  const noProjects = true;
  return (
    <div>
      <h1 className="text-center">Projects</h1>
      {noProjects && (
        <div>
          <h3>Under Construction</h3>
          <p>
            The projects you are currently looking for is in another castle. In
            the meantime, checkout my github, where you can take a look at some
            of the projects that I've played and built in the past.
          </p>
          <div class='flex justify-center mt-8'>
            <button className="btn btn-primary">GitHub</button>
          </div>
        </div>
      )}
      {!noProjects && <ProjectTab />}
    </div>
  );
}