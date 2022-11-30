import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const HeroSection = () => {
  return (
    // <div>
    //   HeroSection
    // </div>
    <Wrapper>
        <div className="container grid grid-two-column">
            <div className="section-hero-data">
            <p className='hero-top-data'>THIS IS ME</p>
            <h1 className='hero-heading'>THAPA TECHNICAL</h1>
            <p className='hero-para'>
              I'm a full stack developer, youtuber and freelancer. 
            </p></div>
            <button className='btn hireme-btn'>
              <NavLink to="/contact">Hire me</NavLink>
            </button>
            <div className="section-hero-image"></div>
        </div>
    </Wrapper>
  )
}

const Wrapper=styled.section``;

export default HeroSection

