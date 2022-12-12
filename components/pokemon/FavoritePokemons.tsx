import { Grid } from '@nextui-org/react'
import React, { FC } from 'react'
import { PokeCard } from './PokeCard'

interface Props {
  pokemons: number[]
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container
      gap={2}
      justify='center'>
      {pokemons.map((id) => (
        <Grid
          xs={12}
          sm={6}
          md={3}
          key={id}>
          <PokeCard
            key={id}
            id={id}
            img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          />
        </Grid>
      ))}
    </Grid.Container>
  )
}
