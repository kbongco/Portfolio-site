import { SiLinkedin } from 'react-icons/si'
import { AiFillGithub } from "react-icons/ai";
import { HiDocumentText } from 'react-icons/hi'

export default function AboutMe() {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://i.ibb.co/kMqKFC5/20230202kathleen-1.jpg" className="max-w-sm rounded-full w-70 h-96 shadow-2xl" />
    <div>
      <h1 id='about-me'className="text-3xl font-bold">Kathleen Bongco: Software Engineer</h1>
      <p className="py-5">Hello! My name is Kathleen and I am a former food scientist turned software engineer! A lot of my experience has been working in front end development, specificially with React, Angular, Typescript. I also have been dabbling with Backend languages such as Python, Ruby, and Elixir. Outside of coding I am a huge Anime Nerd, I attend lots of anime and pop-culture conventions where I also volunteer and occasionally am a panelist at. I am also a competitive powerlifter that competes in the USAPL where I am also a state referee in the state of New Jersey!</p>
      <div class='flex justify-between max-w-sm '>
            <a href='http://github.com/kbongco'><AiFillGithub alt='github-link' style={{ fontSize: '2em', color: '#3CB371' }} /></a>
            <a href='https://www.linkedin.com/in/kathleen-bongco-11843197/'><SiLinkedin alt='linkedin-link' style={{ fontSize: '2em', color: '#3CB371' }} /></a>
            <a href='https://docs.google.com/document/d/1qqsqbkLhXPJEDHC8BDghOnHxLbmKW0t73wzDdb3iruI/edit?usp=sharing'><HiDocumentText alt='download-resume' style={{ fontSize: '2em', color: '#3CB371' }} /></a>
      </div>
    </div>
  </div>
</div>
  )
}