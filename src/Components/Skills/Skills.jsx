import ProgrammingSkills from "./ProgrammingLanguages/ProgrammingSkills";

export default function Skills() {
  return (
    <div>
      <h1 className='pb-1 text-center text-lg'>Skills</h1>
      <div className="flex sm:flex-col">
          <ProgrammingSkills/>
        <div className="divider md:divider-horizontal" />
        <h1>Test</h1>
      </div>
    </div>
  );
}