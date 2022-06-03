import React from 'react'
import sectionstyles from './skills.module.css'

function List(props) {
  return (
    <div className={sectionstyles.skillList}>
        <h3>
        {props.skill}
        </h3>
    </div>
  )
}

export default List