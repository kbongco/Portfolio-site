import ProjectTab from "./ProjectTab/ProjectTab"
import UnderConstruction from "../UnderConstruction/UnderConstruction";

export default function Projects() {
  const noProjects = true;
  return (
    <div id='projects'>
      <h1 className=" text-xl text-center">Projects</h1>
      {noProjects && (
        <UnderConstruction/>
      )}
      {!noProjects && <ProjectTab />}
    </div>
  );
}