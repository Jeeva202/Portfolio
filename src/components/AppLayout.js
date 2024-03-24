import React from 'react'
import Navbar from './navbar/Navbar'
import HeroSection from './hero/HeroSection'
import About from './about/About'
import Skills from './skills/Skills'
import Project from './project/project'
import Contact from './contact/Contact'
import Resume from './resume/resume'

export default function AppLayout() {
  return (
    <div>
        <Navbar />
        <div id='home'><HeroSection /></div>
        <div id='about'><About /></div>
        <div id='skill'><Skills /></div>
        <div id='project'><Project /></div>
        <div id='resume'><Resume /></div>
        <div id='contact'><Contact /></div>
    </div>
  )
}
