import React from 'react'
import Card from '../Components/Card'
import { useQuery } from '@apollo/react-hooks'
import { ALL_CHARACTERS } from '../Queries/index'
const Characters = () => {
  const { data, loading, error } = useQuery(ALL_CHARACTERS)
  if (loading) {
    return <h2>Just gonna be a minute</h2>
  }
  if (error) {
    return <p>Errors are annoying</p>
  }
  console.log(data.characters.results)
  return (
    <div>
      {data.characters.results.map(
        ({ id, name, species, gender, image, status }) => {
          // console.log(character)
          return (
            <Card
              key={id}
              name={name}
              specie={species}
              status={status}
              gender={gender}
              image={image}
            />
          )
        }
      )}
    </div>
  )
}

export default Characters
