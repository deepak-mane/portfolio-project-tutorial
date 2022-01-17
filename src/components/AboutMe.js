import React from 'react';
import author from '../me.jpg';

const AboutMe = () => {
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-lg-6 col-xm-12'>
          <div className='photo-wrap mb-5'>
            <img className='profile-img' src={author} alt='author...' />
          </div>
        </div>
        <div className='col-lg-6 col-xm-12'>
          <h1 className='about-heading'>about me</h1>
          <p>
            Hello, I am Deepak, a motivated professional with collaboration proficiency and
            extensive experience as Senior Software Engineer. As a person who
            thrives in high-pressure and fast-paced situations, I strive for
            positive results through the application of my abilities in systems
            design analysis and client relationship management. Additionally, I
            possess expertise in compliance and an aptitude for optimizing
            performance and motivating colleagues. In any position, I am able to
            visualize success and identify innovative and effective strategies
            for achieving it. I have artfully balanced workplace objectives and
            productive relationships, inspiring strategies and insightful
            suggestions to achieve a competitive business edge. My innovation
            and decision-making strengths have enabled my professional growth.
          </p>
          <p>
            I'm Full Stack Web Developer. Technologies I use is MERN(MongoDB,
            Express, ReactJS and NodeJS). I create responsive websites that are
            displayed on all devices, desktops and smartphones
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
