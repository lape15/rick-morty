import React from 'react';
import Rick from '../images/Rick.png';
import { Link } from 'react-router-dom';
const Section = () => {
  return (
    <div className="lg:p-3 p-1">
      <div className="lg:flex h-auto lg:p-3 block p-1">
        <div
          className="lg:flex-1 
          text-center 
          block
          box
          "
        >
          <h3 className="text-green-900 lg:text-6xl text-3xl lg:p-4  p-2 m-4 font-extrabold big relative">
            Rick and Morty
          </h3>
          <span className="text-green-900 leading-9 tracking-wide relative ">
            {' '}
            The series follows the misadventures of cynical mad scientist Rick
            Sanchez and his good-hearted but fretful grandson Morty Smith, who
            split their time between domestic life and interdimensional
            adventures.
          </span>
          <div className="btn-box mt-6 ">
            <button className="text-green-900 btns mt-16 opacity-0 p-4 font-bold tracking-wide rounded-full outline-none">
              <Link to="/signup"> Explore our world </Link>
            </button>
          </div>
        </div>
        <div className="lg:flex-1  h-screen text-center block">
          {/*<img
            src={Rick}
            alt="Rick"
            className=" lg:h-full rounded-full max-w-full lg:opacity-25 hover:opacity-100 object-cover transition duration-900 ease-in-out transition-opacity"
          /> */}
        </div>
      </div>
    </div>
  );
};
export default Section;
