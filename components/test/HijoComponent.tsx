import { Button, Container, Text } from '@nextui-org/react'
import React, { FC } from 'react'

interface Props {
  onDecirAlgoAlPadre: (algo: string) => void
}

export const HijoComponent: FC<Props> = ({ onDecirAlgoAlPadre }) => {
  return (
    <Container
      css={{
        border: '1px solid blue',
        padding: '1em',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <Text h3>Soy el hijo</Text>
      <Button
        color={'error'}
        onPress={() =>
          onDecirAlgoAlPadre('Yo te puedo decir lo que yo quiera papi')
        }>
        Decirle algo al padre
      </Button>
    </Container>
  )
}
