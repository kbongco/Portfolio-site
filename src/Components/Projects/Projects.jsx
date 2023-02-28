import ProjectTab from "./ProjectTab/ProjectTab"
import UnderConstruction from "../UnderConstruction/UnderConstruction";


export default function Projects(props) {
  const displayProjectSection = false;
  const allProjects =  props ;
  console.log(allProjects.projects)
  const allNames = allProjects?.projects?.fields?.map((proj) => proj);
  const allTest = allProjects?.projects.map((proj) => proj.fields.Name);
  return (
    <div id='projects'>
      <h1 className=" text-xl text-center">Projects</h1>
      {displayProjectSection === false && (
        <UnderConstruction/>
      )}
      {allProjects.length !== 0 && displayProjectSection && (
        <div><ProjectTab /> 
          <div>
          {allProjects.projects.map((proj) => 
          <div className="card w-45 bg-base-100 shadow-xl">
          <div className="card-body">
                <h2 className="card-title">{ proj.fields.Name}</h2>
                <p>{proj.fields.Description }</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div> */}
          </div>
            </div>)}
            </div>
        </div>
      )}
    </div>
  );
}