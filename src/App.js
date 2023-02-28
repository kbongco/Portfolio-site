
import './App.css';
import { useEffect, useState } from 'react'
import AboutMe from './Components/AboutMe/AboutMe';
import NavBar from './Components/NavBar/NavBar';
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import ContactMe from './Components/ContactMe/ContactMe'
import axios from 'axios';

function App() {
  const [projects, updateUseProjects] = useState([]);
  const [getProjects, updateGetProjects] = useState(false);
  
  useEffect(() => {
    const getProjects = async () => {
      const projects = await axios(
        'https://api.airtable.com/v0/apphHMoEZnvmWJsqG/Table%201',
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          }
        }
      );

      updateUseProjects(projects.data.records);
    };
    getProjects();
  }, [getProjects])

  return (
    <div>
    <NavBar />
      <AboutMe />
      <div class='divider'/>
      <Skills />
      <div class='divider' />
      <Projects projects={projects} />
      <div class='divider' />
      <ContactMe />
    </div>
  );
}

export default App;
