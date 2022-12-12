import React, { FC, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react'
import { pokeApi } from '../../api'
import { Pokemon, PokemonListResponse } from '../../interfaces'
import { getPokemonInfo, localFavorites } from '../../utils'
import confetti from 'canvas-confetti'
import { MainLayout } from '../../components/layout'

interface Props {
  pokemon: Pokemon
}

const PokemonByNamePage: FC<Props> = ({ pokemon }) => {
  const { name, id, sprites } = pokemon
  const [isFavorite, setIsFavorite] = useState(localFavorites.isInFavorite(id))

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(id)
    setIsFavorite(!isFavorite)

    if (isFavorite) return

    confetti({
      zIndex: 3,
      particleCount: 400,
      spread: 400,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    })
  }

  return (
    <MainLayout title={`${name}`}>
      <Grid.Container
        css={{
          marginTop: '5px',
        }}
        gap={2}>
        <Grid
          xs={12}
          sm={4}>
          <Card isPressable>
            <Card.Body>
              <Card.Image
                src={
                  sprites.other?.dream_world.front_default || '/no-image.png'
                }
                alt={name}
                width='100%'
                height={'200px'}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid
          xs={12}
          sm={8}>
          <Card>
            <Card.Header
              css={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}>
              <Text
                transform='capitalize'
                h1>
                {name}
              </Text>
              <Button
                color={isFavorite ? 'error' : 'success'}
                onPress={() => {
                  onToggleFavorite()
                }}
                ghost>
                {isFavorite ? 'Eliminar de favoritos' : 'Guardar en favoritos'}
              </Button>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container
                direction='row'
                display='flex'>
                <Image
                  src={sprites.front_default}
                  alt={name}
                  height={'100px'}
                  width={'100px'}
                  showSkeleton
                />
                <Image
                  src={sprites.back_default}
                  alt={name}
                  height={'100px'}
                  width={'100px'}
                  showSkeleton
                />
                <Image
                  src={sprites.front_shiny}
                  alt={name}
                  height={'100px'}
                  width={'100px'}
                  showSkeleton
                />
                <Image
                  src={sprites.back_shiny}
                  alt={name}
                  height={'100px'}
                  width={'100px'}
                  showSkeleton
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </MainLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('pokemon?limit=151', {
    headers: { 'accept-encoding': null },
  })
  const pokemonNames: string[] = data.results.map((pokemon) => pokemon.name)

  return {
    paths: pokemonNames.map((name) => ({
      params: { name },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string }

  return {
    props: {
      pokemon: await getPokemonInfo(name),
    },
  }
}

export default PokemonByNamePage
