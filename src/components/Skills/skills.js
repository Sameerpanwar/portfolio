import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';


const Skills = () => {
  return (
   <section id='skills'>
    <span className='skillTitle'>What I do</span>
    <span className='skillDesc'>I am skilled and passionate web designer with experience in creating visually appealing and user-friendly websites I have a strong understanding of design and a keen eye for detail, I am profieient in HTML,CSS, and JavaScript as well as MERN stack. </span>

    <div className='skillBars'>
      <div className='skillBar'>
        <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
        <div className='skillBarText'>
          <h2>Technologies/frameworks</h2>
          <p>
            React Js, Node.js, Bootstrap, Tailwind, MongoDB, EJS.
          </p>

        </div>
      </div>

      <div className='skillBar'>
        <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
        <div className='skillBarText'>
          <h2>website development</h2>
          <p>As a motivated and enthusiastic fresher in web development, I am excited to showcase my skills and knowledge in building innovative and user-friendly web applications. With a strong foundation in HTML, CSS, JavaScript, and various frameworks, I am eager to learn and grow in the field of web development.</p>

        </div>
      </div>

      <div className='skillBar'>
        <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
        <div className='skillBarText'>
          <h2>Languages</h2>
          <p>Java, Python Basic, C++, C, HTML, CSS, JavaScript, SQL</p>
        </div>
      </div>

    </div>





   </section>
  );
}

export default Skills;
