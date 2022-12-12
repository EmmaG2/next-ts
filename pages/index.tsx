import { MainLayout } from '../components/layout'
import { GetStaticProps, NextPage } from 'next'
import { pokeApi } from '../api'
import { PokemonListResponse, smallPokemon } from '../interfaces'
import { Grid } from '@nextui-org/react'
import { PokeCard } from '../components/pokemon'

interface Props {
  pokemons: smallPokemon[]
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <MainLayout title='Pagina Principal'>
      <Grid.Container
        gap={2}
        justify='center'>
        {pokemons.map((poke) => (
          <Grid
            xs={12}
            sm={6}
            md={3}
            key={poke.id}>
            <PokeCard {...poke} />
          </Grid>
        ))}
      </Grid.Container>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response = await pokeApi.get<PokemonListResponse>('pokemon?limit=151', {
    headers: { 'accept-encoding': null },
  })

  const pokemons: smallPokemon[] = response.data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }))

  return {
    props: {
      pokemons,
    },
  }
}

export default Home
