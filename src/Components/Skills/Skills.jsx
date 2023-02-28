import ProgrammingSkills from "./ProgrammingLanguages/ProgrammingSkills";
import FunSkills from './OtherFunSkills/FunSkills'

export default function Skills() {
  return (
    <div id="skills">
      <h1 className="pb-1 text-center text-2xl">Skills</h1>
      <div className="flex sm:flex-col md: items-center">
          <ProgrammingSkills />
        <div className="divider" />
          <FunSkills />
      </div>
    </div>
  );
}