import React from 'react';
import Card from '../Components/Card';
import { useQuery } from '@apollo/react-hooks';
import { ALL_CHARACTERS } from '../Queries/index';
const Characters = () => {
  const { data, loading, error } = useQuery(ALL_CHARACTERS);
  if (loading) {
    return <h2>Just gonna be a minute</h2>;
  }
  if (error) {
    console.log(error);
  }
  var characters = [];
  if (data) {
    characters = data.characters.results;
  }
  console.log(characters);
  return (
    <div className="flex w-auto  lg:justify-between lg:items-center flex-wrap">
      {characters.map(({ id, name, species, gender, image, status }) => {
        return (
          <Card
            key={id}
            name={name}
            specie={species}
            status={status}
            gender={gender}
            image={image}
          />
        );
      })}
    </div>
  );
};

export default Characters;
