import React from 'react';
const Card = ({ name, status, species, gender, image }) => {
  return (
    <div className="flex-1   bg-transparent text-white m-2">
      <div className="text-center border border-solid border-red-500 w-64text-center w-64 bg-green-900 relative">
        <h5 className="text-gray-600">{name}</h5>
        <p>{status}</p>
        <p>{species}</p>
        <p>{gender}</p>

        <img
          src={image}
          alt="A character"
          className=" rounded-full h-auto w-full absolute-center  origin-center transform rotate-45 hover:transform hover:scale-y-50"
        />
      </div>
    </div>
  );
};
export default Card;
