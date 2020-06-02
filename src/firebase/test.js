import React from 'react';
const Card = ({ name, status, species, gender, image }) => {
  return (
    <div>
      <h2 className="text-red-600">Pickle Rick</h2>
      <div className="character-details">
        <h2>Rick and Morty Character</h2>
        <div className="content">
          <h5>{name}</h5>
          <p>{status}</p>
          <p>{species}</p>
          <p>{gender}</p>
          <div
            style={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: '400px 700px',
            }}
            className="h-64"
          ></div>
        </div>
      </div>
    </div>
  );
};
export default Card;
