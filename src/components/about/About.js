import React from 'react'
import CV from './CV'
import sectionstyles from './About.module.css'

// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import { faAtom } from '@fortawesome/free-solid-svg-icons'

// import { Button } from 'antd';
// import { Typography } from 'antd';
// const { Title } = Typography;

function About() {
  return (
    <section className={sectionstyles.About}>

      <h1>Hi, <br/>
       I'm Mahima Andani</h1>
      <CV/>
      {/* <div>x</div><div>o</div>
      <div>x</div><div>o</div>
      <div>x</div><div>o</div>
      <div>x</div><div>o</div>
      <div>x</div><div>o</div>
      <div>x</div><div>o</div>
      <div>x</div><div>o</div>
      <div>x</div><div>o</div> */}
        {/* <Title>Hey! <br/> I'm Mahima Andani</Title> */}
        {/* <Button type="secondary" className='button'>Say Hi</Button> */}
        {/* <iframe src='https://leetcode.com/MahimaAndani/' width='50%'></iframe> */}
    </section>
  )
}

export default About