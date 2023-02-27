import ProjectTab from "./ProjectTab/ProjectTab"
import UnderConstruction from "../UnderConstruction/UnderConstruction";

export default function Projects() {
  const noProjects = true;
  return (
    <div>
      <h1 className="text-center">Projects</h1>
      {noProjects && (
        <UnderConstruction/>
      )}
      {!noProjects && <ProjectTab />}
    </div>
  );
}