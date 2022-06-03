import React from 'react'
import styles from '../assets/layout.module.css'

function TitleComponent(props) {
  return (
    <div className={styles.TitleComponent}>
      {/* <div className={styles.container}/> */}
      <h1>
        {props.title}
      </h1>
    </div>
  )
}

export default TitleComponent