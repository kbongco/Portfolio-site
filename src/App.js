
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import NavBar from './Components/NavBar/NavBar';
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import ContactMe from './Components/ContactMe/ContactMe'

function App() {
  return (
    <div>
    <NavBar />
      <AboutMe />
      <div class='divider'/>
      <Skills />
      <div class='divider' />
      <Projects />
      <div class='divider' />
      <ContactMe />
    </div>
  );
}

export default App;
