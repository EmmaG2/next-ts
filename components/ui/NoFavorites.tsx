import { Container, Text } from '@nextui-org/react'
import React from 'react'

export const NoFavorites = () => {
  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text h1>No Hay favoritos</Text>
    </Container>
  )
}
