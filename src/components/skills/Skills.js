import React from 'react'
import sectionstyles from './skills.module.css'

function Skills() {
  return (
    <section>
      <h1>Skills</h1>
      <div className={sectionstyles.skill_box}>
        <div className={sectionstyles.skill_text}> Java</div>
        <div className={sectionstyles.skill_text}> Data Structures</div>
        <div className={sectionstyles.skill_text}> Algorithms</div>
        <div className={sectionstyles.skill_text}> JavaScript</div>
        <div className={sectionstyles.skill_text}> React</div>
        <div className={sectionstyles.skill_text}> CSS</div>
        <div className={sectionstyles.skill_text}> SASS</div>
        <div className={sectionstyles.skill_text}> SCSS</div>
        <div className={sectionstyles.skill_text}> HTML</div>
        <div className={sectionstyles.skill_text}> MySQL</div>
        <div className={sectionstyles.skill_text}> MongoDB</div>
        <div className={sectionstyles.skill_text}> Git and GitHub</div>
        <div className={sectionstyles.skill_text}> Responsive designs</div>
      </div>
    </section>
  )
}

export default Skills