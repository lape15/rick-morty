import React from 'react';
import Section from './Section';
import World from '../images/White.gif';
import About from './About';
const Home = () => {
  return (
    <div
      // style={{
      //   backgroundImage: `url(${World})`,
      //
      // }}
      className="dance"
    >
      <Section />
      <About />
    </div>
  );
};

export default Home;
