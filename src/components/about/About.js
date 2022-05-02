import React from 'react'
import sectionstyles from './About.module.css'
import { Button } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;

function About() {
  return (
    <section className={sectionstyles.About}>
      <h1>Hi, <br/> I'm Mahima Andani</h1>
        {/* <Title>Hey! <br/> I'm Mahima Andani</Title> */}
        {/* <Button type="secondary" className='button'>Say Hi</Button> */}
        {/* <iframe src='https://leetcode.com/MahimaAndani/' width='50%'></iframe> */}
    </section>
  )
}

export default About