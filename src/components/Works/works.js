import React from 'react';
import './works.css';
import portfolio1 from '../../assets/react.png';
import portfolio2 from '../../assets/ejs.png';
import portfolio3 from '../../assets/sql.png';
import portfolio4 from '../../assets/express.png';
import portfolio5 from '../../assets/js.png';
import portfolio6 from '../../assets/mongo.png';

const Works = () => {
  return (
    <section id='works'>
      <h2 className='workstitle'>My Portfolio</h2>
      <span className='worksDesc'>As a skilled MERN stack web developer, I specialize in crafting scalable, efficient, and secure web applications using MongoDB, Express.js, React, and Node.js. With expertise in both front-end and back-end development, I deliver comprehensive web solutions that meet the unique needs of each project.</span>
      <div className='worksImgs'>
        <img src={portfolio1} alt='' className='worksImg'/>
        <img src={portfolio2} alt='' className='worksImg'/>
        <img src={portfolio3} alt='' className='worksImg'/>
        <img src={portfolio4} alt='' className='worksImg'/>
        <img src={portfolio5} alt='' className='worksImg'/>
        <img src={portfolio6} alt='' className='worksImg'/>

      </div>
      <button className='workBtn'>See More</button>


    </section>
  );
}

export default Works;