import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiNodejs } from 'react-icons/di';
import { DiRuby } from 'react-icons/di';
import { DiRor } from 'react-icons/di';
import { DiGit } from 'react-icons/di';
import { DiAngularSimple } from 'react-icons/di'
import { SiTypescript } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { DiSass } from 'react-icons/di'
import { SiFlask } from 'react-icons/si'
import { SiElixir } from 'react-icons/si'

export default function ProgrammingSkills() {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
        <h2 className='text-lg'>Programming Languages</h2>
        <div class='flex flex-wrap'>
          <DiHtml5 alt='html' style={{ fontSize: '2em', color: '#3CB371' }} />
          <DiCss3 alt='css 'style={{ fontSize: '2em', color: '#3CB371' }} />
          <DiJavascript alt='javascript' style={{ fontSize: '2em', color: '#3CB371' }} />
          <DiReact alt ='react'style={{ fontSize: '2em', color: '#3CB371' }} />
          <DiPython alt='python'style={{ fontSize: '2em', color: '#3CB371' }} />
          <DiMysql alt='mysql'style={{ fontSize: '2em', color: '#3CB371' }} />
          <DiNodejs alt='nodejs'style={{fontSize:'2em', color: '#3CB371'}}/>
          <DiRuby alt='ruby'style={{fontSize:'2em', color: '#3CB371'}}/>
          <DiRor alt='rubyonrails'style={{fontSize:'2em', color: '#3CB371'}}/>
          <DiGit alt='git'style={{ fontSize: '2em', color: '#3CB371' }} />
          <DiAngularSimple alt='angular' style={{ fontSize: '2em', color: '#3CB371'}} />
          <SiTypescript alt='typescript' style={{ fontSize: '2em', color: '#3CB371' }} />
          <SiTailwindcss alt='tailwind'style={{ fontSize: '2em', color: '#3CB371' }} />
          <DiSass alt='sass'style={{ fontSize: '2em', color: '#3CB371' }} />
          <SiFlask alt='flask' style={{ fontSize: '2em', color: '#3CB371' }} />
          <SiElixir alt='elixir' style={{ fontSize: '2em', color: '#3CB371' }} />
        </div>
  </div>
</div>
  )
}