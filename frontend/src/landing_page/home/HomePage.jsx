import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import Award from './Awards';
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';


function HomePage() {
    return ( 
        <>
       
        <Hero/>
        <Award/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
      
        </>
     );
}

export default HomePage;